import {Props} from ".";

export default function SunIcon({pathProps, svgProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      className='w-1.5rem'
      {...svgProps}
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8 22h8M5 19h14M2 16h20'
        {...pathProps}
      ></path>
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 6a6 6 0 00-4.5 9.969h9A6 6 0 0012 6z'
        {...pathProps}
      ></path>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 5.322l-.393-.393'
        {...pathProps}
      ></path>
    </svg>
  );
}
