import {ReactNode, memo} from "react";

type Props = {
  children: ReactNode;
};

function TableThead({children}: Props) {
  return <thead className='bg-base-100'>{children}</thead>;
}

export default memo(TableThead);
