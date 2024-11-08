"use client";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <RegisterLink
        // postLoginRedirectURL=""
        className="bg-sky-500 p-4 rounded-md"
      >
        SignUp
      </RegisterLink>
    </div>
  );
}
