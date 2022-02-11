import { BookOpenIcon, CheckIcon, CodeIcon, DocumentTextIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useLocale } from "@lib/hooks/useLocale";

import { HeadSeo } from "@components/seo/head-seo";

import { ssgInit } from "@server/lib/ssg";

export default function Custom404() {
    const { t } = useLocale();
    const router = useRouter();
    const username = router.asPath.replace("%20", "-");
    const links = [
        {
            title: t("documentation"),
            description: t("documentation_description"),
            icon: DocumentTextIcon,
            href: "https://docs.Ezzoom.us",
        },
        {
            title: t("api_reference"),
            description: t("api_reference_description"),
            icon: CodeIcon,
            href: "https://developer.Ezzoom.us",
        },
        {
            title: t("blog"),
            description: t("blog_description"),
            icon: BookOpenIcon,
            href: "https://Ezzoom.us/blog",
        },
    ];

    const isSubpage = router.asPath.includes("/", 2);

    return (
        <>
            <HeadSeo
                title={t("privacy")}
                description={t("privacy")}
                nextSeoProps={{
                    nofollow: true,
                    noindex: true,
                }}
            />
            <div className="min-h-screen px-4 bg-white">
                <main className="max-width pt-16 pb-6 mx-auto sm:pt-24">
                    <h1 className="header_h1">Ezzoom Privacy Statement</h1>
                    <p className="para">This Privacy Statement describes the personal data we collect and/or process (which may include collecting, organizing, structuring, storing, using, or disclosing) to provide products and services offered directly by Ezzoom Video Communications, Inc. (“Ezzoom”), including Ezzoom’s websites and its meetings, webinars, and messaging platform, and Ezzoom App Marketplace (“Ezzoom Products” or “Products”).
                        Ezzoom Products do not include products developed by Ezzoom that are covered under a separate privacy policy (listed here).</p>

                    <h1 className="header_h1">What Personal Data Do We Receive?</h1>
                    <p className="para"> Personal data is any information from or about an identified or identifiable person, including information that Ezzoom can associate with
                        an individual person. We may collect, or process on behalf of our customers, the following categories of personal data when you use or interact with Ezzoom Products:</p>
                    <p className="para"> Account Information: Information associated with an account that licenses Ezzoom Products, which may include administrator name, contact information, account ID, billing information, and account plan information.
                        Profile and Participant Information: Information associated with the Ezzoom profile of a user who uses Ezzoom Products under a licensed account or that is provided by an unlicensed participant joining a meeting, which may include name, display name, picture, email address, phone number, job information, stated locale, user ID, or other information provided by the user or their account owner.
                        Contacts and Calendar Integrations: Contact information added by accounts or their users to create contact lists on Ezzoom Products, which may include contact information a user integrates from a third-party app. Users can also integrate their calendars from other services with their Ezzoom profile or account.
                        Settings: Information associated with the preferences and settings on a Ezzoom account or user profile, which may include audio and video settings, recording file location, screen sharing settings, and other settings and configuration information.
                        Registration Information: Information people provide when registering for a Ezzoom meeting, webinar or recording, which may include name and contact information, responses to registration questions, and other registration information requested by the host.
                        Device Information: Information about the computers, phones, and other devices people use when interacting with Ezzoom Products, which may include information about the speakers, microphone, camera, OS version, hard disk ID, PC name, MAC address, IP address (which may be used to infer general location at a city or country level), device attributes (like operating system version and battery level), WiFi information, and other device information (like Bluetooth signals).
                        Meeting, Webinar, and Messaging Content and Context: Content generated in meetings, webinars, or messages that are hosted on Ezzoom Products, which may include audio, video, in-meeting messages, chat messaging content, transcriptions, written feedback, responses to polls and Q&A, and files, as well as related context, such as invitation details, meeting or chat name, or meeting agenda. Content may contain your voice and image, depending on the account owner’s settings, what you choose to share, your settings, and what you do on Ezzoom Products.
                        Product and Website Usage: Information about how people and their devices interact with Ezzoom Products, such as: when participants join and leave a meeting; whether participants sent messages and who they message with; performance data; mouse movements, clicks, keystrokes or actions (such as mute/unmute or video on/off), and other user inputs that help Ezzoom to understand feature usage, improve product design, and suggest features; which third-party apps users add to a meeting or other Product and what information and actions the app is authorized to access and perform; use of third-party apps and the Ezzoom App Marketplace; features used (such as screen sharing, emojis, or filters); and other usage information and metrics. This also includes information about when and how people visit and interact with Ezzoom’s websites, including what pages they accessed, their interaction with the website features, and whether or not they signed up for a Ezzoom Product.
                        Communications with Ezzoom: Information about your communications with Ezzoom, including relating to support questions, your account, and other inquiries.
                        Information from Partners: Ezzoom obtains information about account owners and their users from third-party companies, such as market data enrichment services, including information about an account owner’s company size or industry, contact information, or activity of certain enterprise domains. Ezzoom may also obtain information from third-party advertising partners who deliver ads displayed on Ezzoom Products, such as whether you clicked on an ad they showed you.</p>
                    <h1 className="header_h1">How Do We Use Personal Data?</h1>
                    <p className="para"> Ezzoom provides personal data to third parties only with consent or in one of the following circumstances (subject to your prior consent where required under applicable law):

                        Resellers: If an account owner licensed or purchased Ezzoom Products from a third-party reseller of Ezzoom Products, the reseller may be able to access personal data and content for users, including meetings, webinars, and messages hosted by the account owner.
                        Vendors: Ezzoom works with third-party service providers to provide, support, and improve Ezzoom Products and technical infrastructure, and for business services such as payment processing. Ezzoom may also work with third-party service providers to provide advertisements and business analytics regarding Ezzoom Products. These vendors can access personal data subject to contractual and technical requirements for protecting personal data and prohibiting them from using personal data for any purpose other than to provide services to Ezzoom or as required by law.
                        For Legal Reasons: Ezzoom may share personal data as needed to: (1) comply with applicable law or respond to, investigate, or participate in valid legal process and proceedings, including from law enforcement or government agencies; (2) enforce or investigate potential violations of its Terms of Service or policies; (3) detect, prevent, or investigate potential fraud, abuse, or safety and security concerns, including threats to the public; (4) meet our corporate and social responsibility commitments; (5) protect our and our customers’ rights and property; and (6) resolve disputes and enforce agreements.
                        Marketing, Advertising, and Analytics Partners: Ezzoom uses third-party marketing, advertising, and analytics providers: to provide statistics and analysis about how people are using Ezzoom Products and our website; to provide advertising and marketing for Ezzoom Products, including targeted advertising based on your use of our website; and to show you third-party advertising within Ezzoom Products. These third-party partners may receive information about your activities on Ezzoom’s website through third-party cookies placed on Ezzoom’s website. To opt out of our use of third-party cookies that share data with these partners, visit our cookie management tool, available Cookies Settings. Where required by law, Ezzoom will first obtain your consent before engaging in the marketing or advertising activities described.
                        Corporate Affiliates: Ezzoom shares personal information with corporate affiliates, such as Ezzoom Voice Communications, Inc., to provide integrated and consistent experiences across Ezzoom Products (such as enabling a user to integrate a Ezzoom Phone call into a meeting) to detect, investigate, and prevent fraud, abuse, and threats to public safety.
                        Change of Control: We may share personal data with actual or prospective acquirers, their representatives and other relevant participants in, or during negotiations of, any sale, merger, acquisition, restructuring, or change in control involving all or a portion of Ezzoom’s business or assets, including in connection with bankruptcy or similar proceedings.</p>
                    <h1 className="header_h1">Who Can See and Share My Personal Data When I Use Ezzoom?</h1>
                    <p className="para"> When you send messages or join meetings and webinars on Ezzoom, other people and organizations, including third parties outside the meeting, webinar, or message, may be able to see content and information that you share:

                        Account Owner: An account owner is the organization or individual that signs up for a Ezzoom account. Typically, an account owner designates one or more people (called an “administrator”) to manage their account and can grant privileges to users on the account. Depending on their license with Ezzoom, the account owner can authorize additional users on their account, and the account owner can create and/or access the profile information for all users on their account. The account owner and their users can invite others (including guests not on their account) to meetings or webinars hosted on their account.
                        Ezzoom gives account owners controls and features that they can use to determine whether certain types of content, such as recordings or out-of-meeting messages, can be created or sent, and what third-party apps can be used, for meetings and webinars hosted on their account. Depending on their settings, account owners and the people they designate can access personal data for people who join meetings and webinars on their account or send messages to users on their account. Specifically, account owners may have access to:
                        Account Usage:
                        Product Usage:  Information about how people and their devices interact with their account, which may include who sent messages to their users in chat, email addresses, IP addresses, device information, and other information about who joined meetings or webinars on their account, whether users viewed or downloaded a recording, how long people participated in their meetings, the time a message was sent, information about Ezzoom Phone integrations, and other usage information and feedback metrics.
                        Participant List:  Information about the participants in a Ezzoom meeting, webinar, or chat, which may include name, display name, email address, phone number, and participant or user ID.
                        Registration Information:  Information provided during registration for a webinar, meeting, or recording hosted by the account.
                        Ezzoom Chat Out-of-Meeting Messages:  If enabled on their account, account owners can see information about who sent and received out-of-meeting messages to users on their account along with information about the message (for example, date and time, and number of participants).  Depending on their settings, account owners also can see sender and receiver information, and other messaging data, along with the content of messages sent to and from users on their account, unless the account owner has enabled Advanced Chat Encryption.
                        In-Meeting/Webinar Messages:  Depending on their settings, account owners can see sender and receiver information, along with the content of messages sent to and from users on their account, in the following circumstances:
                        Messages sent to Everyone in a meeting that is recorded
                        Messages sent to panelists in a webinar that is recorded
                        Direct messages if the account owner has enabled archiving
                        Recordings: Account owners can watch the content of recordings of meetings and webinars hosted on their account.  They can also view a transcript of meeting audio, if enabled.
                        Polling, Q&A, and Feedback:  Account owners can see information about who provided responses to their polls, Q&A, or post meeting or webinar feedback requests, including name and contact information, together with the responses or feedback, unless responses are submitted anonymously.
                        Meeting Hosts and Participants:  Hosts and other participants in a meeting may be able to see your email, display name, and profile picture.  Meeting hosts and participants can also see and (depending on the account owner’s settings) record or save meeting content, audio transcripts, messages sent to Everyone or to them directly, and files, whiteboards, or other information shared during a meeting.  Hosts may also be able to see responses to Q&A and polls generated during the meeting.
                        Webinar Panelists and Attendees:  Only panelists may be visible to attendees during a webinar, but attendees who agree to unmute can be heard by other attendees.  If an attendee agrees to become a panelist during a webinar, they may be visible to other attendees, depending on settings.  Panelists and attendees may be able to see the name of a participant who asks a question during a Q&A, along with their question, unless the participant submits the question anonymously.
                        Livestreams:  Meeting and webinar hosts can choose to livestream to a third-party site or service, which means anyone with access to the livestream will be able to see the meeting or webinar.
                        Third-Party Apps and Integrations:
                        Account owners can choose to add third-party apps to their account and the Ezzoom Products they use, including via use of the Ezzoom App Marketplace, and they can also control whether their users can add and use specific third-party apps, including in meetings, webinars, and chats hosted on their account.  Depending on their settings, account owners and their users and guests can share your personal data and content with third-party apps and integrations they approve, which may include all of the personal data available to account owners, hosts, and participants listed above, such as account information, profile and contact information, registration information, participants list, settings, content, product usage, and device information.
                        Other participants in the meeting may be able to see the third-party app that you are using in a meeting, if the third-party app is receiving real-time features and information from the meeting.
                        Third-party developers may also integrate or embed Ezzoom meetings into their website or app experiences or build versions of Ezzoom that enable access to Ezzoom Products from a third-party app.
                        Personal information shared by account owners and users with third-party apps and integrations is collected and processed in accordance with the app developers’ terms and privacy policies, not Ezzoom’s.</p>
                    <h1 className="header_h1"> Privacy Rights and Choices</h1>
                    <p className="para"> If you are in the European Economic Area (EEA), Switzerland, or the UK, or a resident of California, please refer to the respective dedicated sections below. Otherwise, at your request, and as required by applicable law, we will:

                        Inform you of what personal data we have about you that is under our control;
                        Amend or correct such personal data or any previous privacy preferences you selected, or direct you to
                        applicable tools; and/or
                        Delete such personal data or direct you to applicable tools.
                        In order to exercise any of your rights as to personal data controlled by Ezzoom, please click here. Where legally permitted, we may decline to process requests that are unreasonably repetitive or systematic, require disproportionate
                        technical effort, or jeopardize the privacy of others. As an account owner or a user under a licensed account, you may also take steps to affect your personal data by visiting your account and modifying your personal data directly.</p>
                    <h1 className="header_h1"> Children</h1>
                    <p className="para"> Ezzoom does not allow children under the age of 16 to sign up for a Ezzoom account.
                        For educational organizations that use Ezzoom Products to provide educational services to children under 18, Ezzoom’s Children’s Educational Privacy Statement is available here.</p>
                    <h1 className="header_h1"> Changes to This Privacy Statement</h1>
                    <p className="para">We may update this Privacy Statement periodically to account for changes in our collection and/or processing of personal data, and will post the updated Privacy Statement on our website, with a “Last Updated” date at the top. If we make material changes to this Privacy Statement, we will notify you and provide you an opportunity to review before you choose to continue using our Products. </p>
                </main>
            </div>
        </>
    );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const ssr = await ssgInit(context);

    return {
        props: {
            trpcState: ssr.dehydrate(),
        },
    };
};
