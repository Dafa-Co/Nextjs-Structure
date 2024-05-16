import {ReactNode} from "react";

import Button from "@/container/components/buttons/button";

import useModal from "@/container/hooks/useModal";

type Props = {
  children?: ReactNode;
  isLoading?: boolean;
};

export default function ModalFooter({children, isLoading}: Props) {
  const {hide} = useModal();
  return (
    <div className='flex items-center gap-1.5rem'>
      {children ? (
        children
      ) : (
        <Button isLoading={isLoading} type='submit' className='btn-primary min-w-10rem'>
          Submit
        </Button>
      )}
      <Button disabled={isLoading} type='button' className='btn-neutral' onClick={hide}>
        Cancel
      </Button>
    </div>
  );
}
