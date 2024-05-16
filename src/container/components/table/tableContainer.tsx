import {HTMLAttributes, ReactNode, memo} from "react";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {children: ReactNode} & HTMLAttributes<HTMLTableElement>;

function TableContainer({children, className, ...props}: Props) {
  return (
    <div className='overflow-x-auto'>
      <table className={ClassNameHelper.clsn("w-full", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export default memo(TableContainer);
