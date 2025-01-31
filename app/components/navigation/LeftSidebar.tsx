import React from "react";
import NavLinks from "./navbar/NavLinks";

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] ">
      <div className="flex flex-1 flex-col gap-6  ">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3"></div>
    </section>
  );
};

export default LeftSideBar;
