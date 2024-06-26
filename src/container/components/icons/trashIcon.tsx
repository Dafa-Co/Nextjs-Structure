import {Props} from ".";

export default function TrashIcon({pathProps, svgProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='21'
      fill='none'
      viewBox='0 0 20 21'
      className='w-1.25rem'
      {...svgProps}
    >
      <path
        className='fill-current'
        d='M10 1.75c-.978 0-1.813.625-2.122 1.5a.75.75 0 01-1.414-.5 3.751 3.751 0 017.072 0 .75.75 0 01-1.414.5A2.251 2.251 0 0010 1.75zM.75 5a.75.75 0 01.75-.75h17a.75.75 0 010 1.5h-17A.75.75 0 01.75 5zM3.915 7.45a.75.75 0 10-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132.169.845.455 1.551 1.047 2.104.591.554 1.315.793 2.17.904.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108.854-.111 1.578-.35 2.17-.904.591-.553.877-1.26 1.046-2.104.162-.814.23-1.85.316-3.132l.464-6.952a.75.75 0 00-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99-.137.685-.327 1.047-.6 1.303-.274.256-.648.422-1.34.512-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095-.692-.09-1.066-.256-1.34-.512-.273-.256-.463-.618-.6-1.303-.14-.705-.204-1.643-.294-2.99l-.46-6.9z'
        {...pathProps}
      ></path>
      <path
        className='fill-current'
        d='M7.425 9.254a.75.75 0 01.821.671l.5 5a.75.75 0 01-1.492.15l-.5-5a.75.75 0 01.671-.821zM13.246 10.075a.75.75 0 00-1.492-.15l-.5 5a.75.75 0 001.492.15l.5-5z'
        {...pathProps}
      ></path>
    </svg>
  );
}
