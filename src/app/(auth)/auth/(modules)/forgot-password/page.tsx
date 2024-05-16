import TransitionPage from "@/container/components/transitions/transitionPage";

import Title from "@/app/(auth)/auth/components/title";

import BackButton from "@/app/(auth)/auth/components/backButton";

import {passwordIsSentKey} from "@/app/(auth)/auth/constants";

import Form from "./components/form";

import SentPasswordResetSuccess from "./components/sentPasswordResetSuccess";

type Props = {searchParams: {[passwordIsSentKey]?: string}};

export default function Page({searchParams}: Props) {
  return (
    <TransitionPage>
      {searchParams?.[passwordIsSentKey] ? (
        <SentPasswordResetSuccess />
      ) : (
        <>
          <BackButton className='mb-2rem' />
          <Title
            title='Forgot Password ?'
            subtitle='Enter your email to reset your password.'
            className='mb-3rem'
          />
          <Form />
        </>
      )}
    </TransitionPage>
  );
}
