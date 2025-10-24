import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { SignInForm } from "../components/sign-in-form";

export const SignInView = async () => {
  const session = await auth.api.getSession({ 
    headers: await headers()
  })

  if (session) { 
    return redirect("/")
  }

  return <SignInForm />
};

