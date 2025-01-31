import React from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        ></Image>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex item-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="Dev Flow logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 ">
            Dev<span className="text-primary-500">FLow</span>
          </p>
        </Link>
        <div className="no-scollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>

          <div className="mt-auto flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log in</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium text-white light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="text-white">Sign up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
