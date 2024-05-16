import {Props} from ".";

export default function CartIcon({svgProps, pathProps}: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      fill='none'
      viewBox='0 0 21 20'
      className='w-1.25rem'
      {...svgProps}
    >
      <path
        d='M8.375 6.26a.75.75 0 01.865.615l.528 3.118a.75.75 0 11-1.48.25l-.527-3.118a.75.75 0 01.614-.864zM13.79 6.875a.75.75 0 111.478.25l-.528 3.118a.75.75 0 11-1.48-.25l.53-3.118z'
        className='fill-current'
        {...pathProps}
      ></path>
      <path
        fillRule='evenodd'
        d='M1.249.292a.75.75 0 10-.498 1.416l.262.091c.667.235 1.106.39 1.429.55.303.148.437.268.525.397.09.132.16.314.2.677.04.38.041.875.041 1.615V7.76c0 1.453.014 2.5.151 3.3.146.854.438 1.466.985 2.042.594.627 1.346.9 2.243 1.026.858.122 1.948.122 3.293.122h5.406c.742 0 1.366 0 1.87-.062.537-.065 1.025-.209 1.452-.556.426-.348.665-.797.837-1.309.163-.482.289-1.093.439-1.82l.508-2.469.002-.004.01-.053c.165-.825.303-1.519.338-2.077.036-.586-.031-1.164-.413-1.66-.235-.306-.565-.479-.866-.584a4.617 4.617 0 00-1.002-.21c-.688-.076-1.522-.076-2.34-.076H4.667a5.932 5.932 0 00-.01-.108c-.054-.497-.17-.95-.453-1.362-.284-.416-.662-.682-1.102-.899C2.69.8 2.167.615 1.55.398L1.25.292zm3.46 4.578h11.38c.856 0 1.61.001 2.205.067.296.034.517.08.672.134a.56.56 0 01.176.086c.062.082.128.23.102.651-.027.444-.143 1.036-.321 1.926v.002l-.5 2.42c-.16.783-.27 1.303-.399 1.688-.123.366-.239.523-.364.625-.125.102-.303.184-.685.23-.404.05-.935.051-1.734.051H9.938c-1.417 0-2.4-.002-3.14-.107-.716-.101-1.093-.285-1.366-.573-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047V4.87zM6.5 19.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-.75-2.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM15.5 19.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-.75-2.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0z'
        clipRule='evenodd'
        className='fill-current'
        {...pathProps}
      ></path>
    </svg>
  );
}