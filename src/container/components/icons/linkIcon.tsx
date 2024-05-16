import {Props} from ".";

export default function LinkIcon({pathProps, svgProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      className='w-1.25rem'
      {...svgProps}
    >
      <path
        d='M6.17 6.309a5.317 5.317 0 017.522 0 5.326 5.326 0 010 7.529l-1.43 1.43a.75.75 0 001.06 1.061l1.43-1.431a6.826 6.826 0 000-9.65 6.817 6.817 0 00-9.644 0l-2.86 2.864A6.826 6.826 0 006.69 19.749a.75.75 0 10.083-1.498 5.326 5.326 0 01-3.465-9.08L6.17 6.31z'
        className='fill-current'
        {...pathProps}
      ></path>
      <path
        d='M17.31 4.251a.75.75 0 00-.083 1.498 5.326 5.326 0 013.465 9.08L17.83 17.69a5.317 5.317 0 01-7.523 0 5.326 5.326 0 010-7.528l1.43-1.432a.75.75 0 00-1.06-1.06l-1.43 1.431a6.826 6.826 0 000 9.65 6.817 6.817 0 009.644 0l2.86-2.864A6.826 6.826 0 0017.31 4.251z'
        className='fill-current'
        {...pathProps}
      ></path>
    </svg>
  );
}
