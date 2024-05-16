import {LabelHTMLAttributes, ReactNode} from "react";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {children: ReactNode} & Partial<LabelHTMLAttributes<HTMLLabelElement>>;

export default function Label({children, className, ...props}: Props) {
  return (
    <label
      className={ClassNameHelper.clsn("block text-gray-500 font-medium mb-0.5rem", className)}
      {...props}
    >
      {children}
    </label>
  );
}
