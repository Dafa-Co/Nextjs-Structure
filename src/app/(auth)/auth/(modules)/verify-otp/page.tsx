import TransitionPage from "@/container/components/transitions/transitionPage";

import Title from "@/app/(auth)/auth/components/title";

import BackButton from "@/app/(auth)/auth/components/backButton";

import Form from "./components/form";

import ServerHelper from "@/container/helpers/serverHelpers";

import {redirect} from "next/navigation";

type Props = {};

export default async function Page({}: Props) {
  const isEmail = await ServerHelper.getEmailOnServer();

  if (!isEmail) {
    return redirect("/auth/login");
  }

  return (
    <TransitionPage>
      <BackButton className='mb-2rem' />
      <Title
        title='Verification'
        subtitle='We have sent a verification code to your email. Please check your email.'
        className='mb-3rem'
      />
      <Form />
    </TransitionPage>
  );
}
