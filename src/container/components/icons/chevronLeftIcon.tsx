import {Props} from ".";

export default function ChevronLeftIcon({pathProps, svgProps}: Props) {
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
        d='M7.488.43a.75.75 0 01.081 1.058L1.988 8l5.581 6.512a.75.75 0 01-1.138.976l-6-7a.75.75 0 010-.976l6-7A.75.75 0 017.488.43z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
}
