"use client";

import React from "react";

import { SignInSchema } from "@/lib/validations";
import AuthForm from "@/app/components/forms/AuthForm";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignIn;
