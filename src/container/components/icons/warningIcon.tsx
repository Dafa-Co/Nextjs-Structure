import {Props} from ".";

export default function WarningIcon({pathProps, svgProps}: Props) {
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
        className='fill-warning'
        d='M12 6.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V7a.75.75 0 01.75-.75zM12 17a1 1 0 100-2 1 1 0 000 2z'
        {...pathProps}
      ></path>
      <path
        className='fill-warning'
        fillRule='evenodd'
        d='M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
}
