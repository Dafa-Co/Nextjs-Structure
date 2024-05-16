import {ReactNode} from "react";

import Container from "@/container/components/container";

import Logo from "@/container/components/logo";

import Shape from "./shape";

type Props = {
  children: ReactNode;
};
export default function DefaultLayout({children}: Props) {
  return (
    <>
      <Shape />

      <Container className='z-10 relative flex-1 flex flex-col'>
        <div className='py-2rem flex-1 flex flex-col'>
          <Logo className='w-[180px] mb-3rem' />
          <div className='flex-1 flex flex-col justify-center w-full max-w-[500px]'>{children}</div>
        </div>
      </Container>
    </>
  );
}
