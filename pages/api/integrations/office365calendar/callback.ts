import type { NextApiRequest, NextApiResponse } from "next";

import { getSession } from "@lib/auth";
import { BASE_URL } from "@lib/config/constants";

import prisma from "../../../../lib/prisma";
import { decodeOAuthState } from "../utils";

const scopes = ["offline_access", "Calendars.Read", "Calendars.ReadWrite"];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  // Check that user is authenticated
  const session = await getSession({ req: req });
  if (!session?.user?.id) {
    res.status(401).json({ message: "You must be logged in to do this" });
    return;
  }
  if (typeof code !== "string") {
    res.status(400).json({ message: "No code returned" });
    return;
  }

  const toUrlEncoded = (payload: Record<string, string>) =>
    Object.keys(payload)
      .map((key) => key + "=" + encodeURIComponent(payload[key]))
      .join("&");

  const body = toUrlEncoded({
    client_id: process.env.MS_GRAPH_CLIENT_ID!,
    grant_type: "authorization_code",
    code,
    scope: scopes.join(" "),
    redirect_uri: BASE_URL + "/api/integrations/office365calendar/callback",
    client_secret: process.env.MS_GRAPH_CLIENT_SECRET!,
  });

  const response = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body,
  });

  const responseBody = await response.json();

  if (!response.ok) {
    return res.redirect("/integrations?error=" + JSON.stringify(responseBody));
  }

  const whoami = await fetch("https://graph.microsoft.com/v1.0/me", {
    headers: { Authorization: "Bearer " + responseBody.access_token },
  });
  const graphUser = await whoami.json();

  // In some cases, graphUser.mail is null. Then graphUser.userPrincipalName most likely contains the email address.
  responseBody.email = graphUser.mail ?? graphUser.userPrincipalName;
  responseBody.expiry_date = Math.round(+new Date() / 1000 + responseBody.expires_in); // set expiry date in seconds
  delete responseBody.expires_in;

  await prisma.credential.create({
    data: {
      type: "office365_calendar",
      key: responseBody,
      userId: session.user.id,
    },
  });

  const state = decodeOAuthState(req);
  return res.redirect(state?.returnTo ?? "/integrations");
}
