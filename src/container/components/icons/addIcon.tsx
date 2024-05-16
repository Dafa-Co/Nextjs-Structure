import {Props} from ".";

export default function AddIcon({pathProps, svgProps}: Props) {
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
        d='M.25 11C.25 5.063 5.063.25 11 .25a.75.75 0 010 1.5A9.25 9.25 0 1020.25 11a.75.75 0 011.5 0c0 5.937-4.813 10.75-10.75 10.75S.25 16.937.25 11zm15.52-9.724a3.503 3.503 0 014.954 4.953l-6.648 6.649c-.371.37-.604.604-.863.806a5.34 5.34 0 01-.987.61c-.297.141-.61.245-1.107.411l-2.905.968a1.492 1.492 0 01-1.887-1.887l.968-2.905c.166-.498.27-.81.411-1.107.167-.35.372-.68.61-.987.202-.26.435-.492.806-.863l6.649-6.648zm3.893 1.06a2.003 2.003 0 00-2.832 0l-.376.377c.022.096.054.21.098.338.143.413.415.957.927 1.469a3.875 3.875 0 001.807 1.025l.376-.376a2.003 2.003 0 000-2.832zm-1.558 4.391a5.397 5.397 0 01-1.686-1.146 5.395 5.395 0 01-1.146-1.686L10.217 8.95c-.416.417-.58.582-.718.76-.172.22-.319.458-.439.71-.097.203-.171.423-.358.982l-.431 1.295 1.032 1.033 1.295-.432c.56-.187.779-.261.983-.358.251-.12.49-.267.71-.439.177-.139.342-.302.759-.718l5.055-5.056z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
}