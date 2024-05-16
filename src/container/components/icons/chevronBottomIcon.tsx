import {Props} from ".";

export default function ChevronBottomIcon({svgProps, pathProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='8'
      fill='none'
      viewBox='0 0 16 8'
      {...svgProps}
    >
      <path
        className='fill-current'
        fillRule='evenodd'
        d='M.43.512A.75.75 0 011.489.43L8 6.012 14.512.431a.75.75 0 01.976 1.138l-7 6a.75.75 0 01-.976 0l-7-6A.75.75 0 01.43.512z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
}
