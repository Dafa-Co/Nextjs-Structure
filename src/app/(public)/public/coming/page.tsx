import Link from "next/link";

import Container from "@/container/components/container";

import Logo from "@/container/components/logo";

import CloseIcon from "@/container/components/icons/closeIcon";

type Props = {};

export default function page({}: Props) {
  return (
    <section>
      <div className='py-2rem min-h-screen flex '>
        <Container className='flex flex-col'>
          <div className='flex items-center justify-between'>
            <Logo className='w-[250px]' />
            <Link href='/' className='text-gray-500'>
              <CloseIcon
                svgProps={{
                  className: "w-2rem h-2rem",
                }}
              />
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center flex-1 mt-2rem'>
            <h1 className='text-5xl uppercase text-center  text-primary font-bold tracking-widest relative z-10'>
              coming soon
              {/* <span className='absolute -z-[1] -bottom-2.25rem left-1/2 -translate-x-1/2 w-[300px] h-[100px] rounded-full border-2 border-b-gray-100 border-transparent'></span> */}
            </h1>
            <p className='mt-1.5rem text-xl text-center text-gray-500'>
              Get notified when we launch
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
