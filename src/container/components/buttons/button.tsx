import {ButtonHTMLAttributes, ReactNode} from "react";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({children, isLoading, className, ...props}: Props) {
  return (
    <button
      className={ClassNameHelper.clsn("btn h-3rem px-1.5rem text-base", className)}
      disabled={isLoading}
      {...props}
    >
      {children}
      {isLoading ? <span className='loading loading-spinner loading-xs ms-0.25rem'></span> : null}
    </button>
  );
}
