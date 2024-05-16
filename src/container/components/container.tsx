import {HTMLAttributes, ReactNode} from "react";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function Container({children, className}: Props) {
  return <div className={ClassNameHelper.clsn("container mx-auto", className)}>{children}</div>;
}
