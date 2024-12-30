"use client";

import React from "react";

import { SignUpSchema } from "@/lib/validations";
import AuthForm from "@/app/components/forms/AuthForm";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUp;
