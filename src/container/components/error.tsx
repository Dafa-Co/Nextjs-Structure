"use client";

import Image from "next/image";

import ImageError from "@/app/assets/container/images/error.png";

import Container from "@/container/components/container";

import Button from "@/container/components/buttons/button";

type Props = TypeResponseError & {
  reset: () => void;
};
export default function Error({message, reset}: Props) {
  return (
    <div className='flex items-center min-h-screen py-2rem'>
      <Container>
        <div className='flex flex-wrap justify-center items-center gap-y-1rem gap-x-4rem'>
          {/* image  */}
          <div className='max-w-[350px] md:max-w-[500px] '>
            <Image src={ImageError} alt='not found' />
          </div>
          {/* ****  */}

          {/* content  */}
          <div>
            <h1 className='text-2xl text-primary font-medium mb-0.25rem'>ERROR 500</h1>
            <h2 className='text-3xl font-semibold mb-0.75rem'>Something went wrong</h2>
            <p className='text-balance text-xl text-gray-300 mb-1.5rem'>{message}</p>
            <Button className='btn-primary' onClick={reset}>
              Try Again
            </Button>
          </div>
          {/* ******  */}
        </div>
      </Container>
    </div>
  );
}
