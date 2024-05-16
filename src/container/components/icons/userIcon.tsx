import {Props} from ".";

export default function UserIcon({pathProps, svgProps}: Props) {
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
        className='fill-current'
        fillRule='evenodd'
        d='M12 1.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM8.75 6a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM12 12.25c-2.04 0-3.922.47-5.322 1.27C5.3 14.308 4.25 15.51 4.25 17s1.05 2.692 2.428 3.48c1.4.8 3.283 1.27 5.322 1.27 2.04 0 3.922-.47 5.322-1.27 1.378-.788 2.428-1.99 2.428-3.48s-1.05-2.692-2.428-3.48c-1.4-.8-3.283-1.27-5.322-1.27zM5.75 17c0-.72.517-1.517 1.672-2.177 1.134-.648 2.751-1.073 4.578-1.073 1.827 0 3.444.425 4.578 1.073 1.155.66 1.672 1.458 1.672 2.177 0 .72-.517 1.517-1.672 2.177-1.134.648-2.751 1.073-4.578 1.073-1.827 0-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
}