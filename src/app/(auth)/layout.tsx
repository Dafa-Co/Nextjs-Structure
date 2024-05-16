import {ReactNode} from "react";

import AuthJourneyProvider from "./auth/providers/authJourneyProvider";

import DefaultLayout from "./auth/layouts/defaultLayout";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({children}: Props) {
  return (
    <AuthJourneyProvider>
      <section className='relative min-h-screen overflow-hidden flex flex-col'>
        <DefaultLayout>{children}</DefaultLayout>
      </section>
    </AuthJourneyProvider>
  );
}
