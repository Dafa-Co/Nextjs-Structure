import TransitionPage from "@/container/components/transitions/transitionPage";

import Title from "@/app/(auth)/auth/components/title";

import BackButton from "@/app/(auth)/auth/components/backButton";

import Form from "./components/form";

import ServerHelper from "@/container/helpers/serverHelpers";

import {redirect} from "next/navigation";

import ModalProvider from "@/container/providers/modalProvider";

import Modal from "@/container/components/modal";

import PasswordResetSuccessfully from "./components/passwordResetSuccessfully";

type Props = {};

export default async function Page({}: Props) {
  const isEmail = await ServerHelper.getEmailOnServer();

  const isOtp = await ServerHelper.getOtpOnServer();

  if (!isEmail || !isOtp) {
    return redirect("/auth/login");
  }

  return (
    <ModalProvider>
      <TransitionPage>
        <BackButton className='mb-2rem' />
        <Title
          title='Create Password'
          subtitle='Creating a new password is easy. Just enter your new password below.'
          className='mb-3rem'
        />
        <Form />
      </TransitionPage>

      <Modal success={PasswordResetSuccessfully} />
    </ModalProvider>
  );
}
