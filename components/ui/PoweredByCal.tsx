import Link from "next/link";

import { useLocale } from "@lib/hooks/useLocale";

const PoweredByCal = () => {
  const { t } = useLocale();
  return (
    <div className="text-xs text-center sm:text-right p-1">
      <Link href={`https://ezzoom.us?utm_source=embed&utm_medium=powered-by-button`}>
        <a target="_blank" className="dark:text-white text-gray-500 opacity-50 hover:opacity-100">
          {t("powered_by")}{" "}
          <img
            className="dark:hidden w-auto inline h-[10px] relative -mt-px"
            src="https://ezzoom.us/logo.svg"
            alt="ezzoom.us Logo"
          />
          <img
            className="hidden dark:inline w-auto h-[10px] relativ -mt-px"
            src="https://ezzoom.us/logo-white.svg"
            alt="ezzoom.us Logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default PoweredByCal;
