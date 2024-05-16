import TransitionPage from "@/container/components/transitions/transitionPage";

import Title from "@/app/(auth)/auth/components/title";

import HaveAndNotHaveAccount from "@/app/(auth)/auth/components/haveAndNotHaveAccount";

import Form from "./components/form";

type Props = {};

export default function Page({}: Props) {
  return (
    <TransitionPage>
      <Title
        title='Adventure starts here'
        subtitle='Make your app management easy and fun!'
        className='mb-3rem'
      />
      <Form />
      <HaveAndNotHaveAccount isLogin={false} className='mt-2rem' />
    </TransitionPage>
  );
}
