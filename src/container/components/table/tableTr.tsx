import ClassNameHelper from "@/container/helpers/classNameHelper";

import {HTMLAttributes, ReactNode, memo} from "react";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableRowElement>;

function TableTr({children, className, ...props}: Props) {
  return (
    <tr className={ClassNameHelper.clsn("border-0 even:bg-base-100 group", className)} {...props}>
      {children}
    </tr>
  );
}

export default memo(TableTr);
