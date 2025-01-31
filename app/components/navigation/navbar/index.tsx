import Image from "next/image";
import Link from "next/link";
import React from "react";

import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";
// import DesktopNavigation from "./DesktopNavigation";
const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 shadow-light-300 gap-5">
      <div>
        <Link href="/" className="flex item-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="Dev Flow logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            Dev<span className="text-primary-500">FLow</span>
          </p>
        </Link>
        {/* <DesktopNavigation></DesktopNavigation> */}
      </div>

      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
