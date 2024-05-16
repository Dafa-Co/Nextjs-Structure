import {Props} from ".";

export default function SearchIcon({pathProps, svgProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 22 22'
      {...svgProps}
    >
      <path
        className='fill-current'
        fillRule='evenodd'
        d='M10.5 1.75a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM.25 10.5C.25 4.84 4.84.25 10.5.25S20.75 4.84 20.75 10.5 16.16 20.75 10.5 20.75.25 16.16.25 10.5zm18.22 7.97a.75.75 0 011.06 0l2 2a.75.75 0 11-1.06 1.06l-2-2a.75.75 0 010-1.06z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
}
