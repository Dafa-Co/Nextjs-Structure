import Logo from "@/container/components/logo";

import Container from "@/container/components/container";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className='flex items-center min-h-screen py-2rem'>
      <Container>
        <div className='flex items-center justify-center'>
          <div>
            <div className='loader w-[5px] h-[5px] rounded-full text-primary'></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
