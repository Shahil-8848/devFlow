import { ReactNode } from "react";
import Image from "next/image";
import SocalAuthForm from "../components/forms/SocalAuthForm";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-10 py-10">
      <section className="light-border background-light-800_dark200 shadow-light-100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        <div className="item-center flex justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark200_light400">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your answered in one Place
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            alt="DevFlow Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>{" "}
        {children}
        <SocalAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
