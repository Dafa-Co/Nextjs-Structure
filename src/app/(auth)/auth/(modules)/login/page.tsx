import TransitionPage from "@/container/components/transitions/transitionPage";

import Title from "@/app/(auth)/auth/components/title";

import HaveAndNotHaveAccount from "@/app/(auth)/auth/components/haveAndNotHaveAccount";

import Form from "./components/form";

type Props = {};

export default function Page({}: Props) {
  return (
    <TransitionPage>
      <Title title='Welcome back!' subtitle='We are glad to see you again!' className='mb-3rem' />
      <Form />
      <HaveAndNotHaveAccount className='mt-2rem' />
    </TransitionPage>
  );
}
