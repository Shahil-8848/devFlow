"use client";
import Image from "next/image";
import React from "react";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocalAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Sign-in failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="github"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        ></Image>
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonClass}>
        <Image
          src="/icons/google.svg"
          alt="google"
          width={20}
          height={20}
          className=" mr-2.5 object-contain"
          onClick={() => handleSignIn("google")}
        ></Image>
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocalAuthForm;
