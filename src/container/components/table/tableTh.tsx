import {HTMLAttributes, ReactNode, memo} from "react";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableHeaderCellElement>;

function TableTh({children, className, ...props}: Props) {
  return (
    <th
      className={ClassNameHelper.clsn(
        "h-cell-height text-start text-14 first:rounded-ss-badge last:rounded-se-badge px-1.5rem py-0",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export default memo(TableTh);
