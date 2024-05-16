import {Props} from ".";

export default function ArrowLeftIcon({svgProps, pathProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...svgProps}
    >
      <path
        stroke='#1C274C'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M20 12H4m0 0l6-6m-6 6l6 6'
        {...pathProps}
      ></path>
    </svg>
  );
}
