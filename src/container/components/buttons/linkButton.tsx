import {AnchorHTMLAttributes, ReactNode} from "react";

import Link, {LinkProps} from "next/link";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps;

export default function LinkButton({children, href, className, ...props}: Props) {
  return (
    <Link
      href={href}
      className={ClassNameHelper.clsn("btn h-3rem px-1.5rem text-base", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
