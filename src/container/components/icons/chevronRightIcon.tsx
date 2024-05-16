import {Props} from ".";

export default function ChevronRightIcon({pathProps, svgProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='8'
      height='16'
      fill='none'
      viewBox='0 0 8 16'
      {...svgProps}
    >
      <path
        className='fill-current'
        fillRule='evenodd'
        d='M.512.43a.75.75 0 011.057.082l6 7a.75.75 0 010 .976l-6 7a.75.75 0 01-1.138-.976L6.012 8 .431 1.488A.75.75 0 01.51.431z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
}
