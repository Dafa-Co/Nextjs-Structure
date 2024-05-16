import {HTMLAttributes, ReactNode, memo} from "react";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableDataCellElement>;

function TableTd({children, className, ...props}: Props) {
  return (
    <td
      className={ClassNameHelper.clsn(
        "h-cell-height px-1.5rem text-14 text-gray-500 group-last:first:rounded-es-badge group-last:last:rounded-ee-badge ",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}

export default memo(TableTd);
