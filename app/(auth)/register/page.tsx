import React from "react";
import Image from "next/image";

import Logo from "@/app/components/logo";
import RegisterForm from "@/app/ui/auth/register-form";
import bgRegisterPage from "/public/static/bg-registration-form-1.jpg";
import bgBanner from "/public/static/registration-form-1.jpg";

const RegisterPage = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
