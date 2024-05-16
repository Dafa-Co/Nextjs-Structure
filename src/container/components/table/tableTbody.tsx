import {HTMLAttributes, ReactNode, memo} from "react";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableSectionElement>;

function TableTbody({children, className, ...props}: Props) {
  return <tbody {...props}>{children}</tbody>;
}

export default memo(TableTbody);
