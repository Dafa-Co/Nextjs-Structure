import {HTMLAttributes} from "react";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {
  title: string;
  subtitle?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Title({title, subtitle, className, ...props}: Props) {
  return (
    <div className={ClassNameHelper.clsn("", className)} {...props}>
      <h1 className='text-3xl font-medium mb-0.5rem'>{title}</h1>
      {subtitle ? <h3 className='text-lg text-gray-500'>{subtitle}</h3> : null}
    </div>
  );
}
