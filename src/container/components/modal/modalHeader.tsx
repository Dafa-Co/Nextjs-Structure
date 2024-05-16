import {ReactNode} from "react";

import useModal from "@/container/hooks/useModal";

import CloseIcon from "@/container/components/icons/closeIcon";

type Props = {children: ReactNode};

export default function ModalHeader({children}: Props) {
  const {hide} = useModal();
  return (
    <div className='border-b pb-1rem flex items-center justify-between'>
      <h1 className='text-18'>{children}</h1>
      <button type='button' className='text-18 text-gray-500' onClick={hide}>
        <CloseIcon />
      </button>
    </div>
  );
}
