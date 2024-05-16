import Image from "next/image";

import ImageNotFound from "@/app/assets/container/images/not-found.png";

import Container from "@/container/components/container";

import LinkButton from "@/container/components/buttons/linkButton";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <section>
      <div className='flex items-center min-h-screen py-2rem'>
        <Container>
          <div className='flex flex-wrap justify-center items-center gap-y-1rem gap-x-4rem'>
            {/* image  */}
            <div className='max-w-[350px] md:max-w-[500px] '>
              <Image src={ImageNotFound} alt='not found' />
            </div>
            {/* ****  */}

            {/* content  */}
            <div>
              <h1 className='text-2xl text-primary font-medium mb-0.25rem'>ERROR 404</h1>
              <h2 className='text-3xl font-semibold mb-0.75rem'>Page not found</h2>
              <p className='text-balance text-xl text-gray-300 mb-1.5rem'>
                The page you’re looking for doesn’t exist.
              </p>
              <LinkButton href='/' className='btn-primary'>
                Go Home
              </LinkButton>
            </div>
            {/* ******  */}
          </div>
        </Container>
      </div>
    </section>
  );
}
