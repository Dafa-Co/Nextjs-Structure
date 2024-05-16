import {HTMLAttributes, ReactNode} from "react";

import ClassNameHelper from "../helpers/classNameHelper";

type Props = {children: ReactNode} & HTMLAttributes<HTMLDivElement>;

export default function DropdownContent({className, children}: Props) {
  return (
    <div
      tabIndex={0}
      className={ClassNameHelper.clsn(
        "dropdown-content border w-full mt-0.5rem bg-base-100 p-1rem rounded-box",
        className
      )}
    >
      {children}
    </div>
  );
}
