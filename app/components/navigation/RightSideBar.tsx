import ROUTES from "@/constants/routes";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const hotQuestions = [
  { _id: "1", title: "How to create a new React app?" },
  { _id: "2", title: "How to use React Router?" },
  { _id: "3", title: "How to use React Hooks?" },
  { _id: "4", title: "How to use Redux?" },
];
const RightSideBar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">
          Right Side of the Code{" "}
        </h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
