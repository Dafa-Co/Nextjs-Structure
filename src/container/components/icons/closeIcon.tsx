import {Props} from ".";

export default function CloseIcon({pathProps, svgProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 22 22'
      className='w-1.5rem'
      {...svgProps}
    >
      <path
        className='fill-current'
        d='M9.03 7.97a.75.75 0 00-1.06 1.06L9.94 11l-1.97 1.97a.75.75 0 101.06 1.06L11 12.06l1.97 1.97a.75.75 0 001.06-1.06L12.06 11l1.97-1.97a.75.75 0 10-1.06-1.06L11 9.94 9.03 7.97z'
        {...pathProps}
      ></path>
      <path
        className='fill-current'
        fillRule='evenodd'
        d='M11 .25C5.063.25.25 5.063.25 11S5.063 21.75 11 21.75 21.75 16.937 21.75 11 16.937.25 11 .25zM1.75 11a9.25 9.25 0 1118.5 0 9.25 9.25 0 01-18.5 0z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
}
