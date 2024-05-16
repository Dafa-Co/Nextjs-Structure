import {Props} from ".";

export default function SuccessIcon({pathProps, svgProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      className='w-6rem h-6rem'
      {...svgProps}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.5 12.5l2 2 5-5'
        className='stroke-primary'
        {...pathProps}
      ></path>
      <path
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7 3.338A9.954 9.954 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5'
        className='stroke-primary'
        {...pathProps}
      ></path>
    </svg>
  );
}
