"use client";

import ModalFooter from "@/container/components/modal/modalFooter";

import WarningIcon from "@/container/components/icons/warningIcon";

import Button from "@/container/components/buttons/button";

import useMutate from "@/container/hooks/useMutate";

import useModal from "@/container/hooks/useModal";

import ActionsHelper from "@/container/helpers/actionsHelper";

type Props = {mutationFn: (id: number) => Promise<any>; mutationKey: string; revalidateKey: string};

export default function DeleteAlert({mutationFn, mutationKey, revalidateKey}: Props) {
  const {data, hide} = useModal();

  const {isPending, mutate} = useMutate({
    mutationFn: (variables: number) => mutationFn(variables),
    mutationKey: [mutationKey],
  });

  const handleDelete = () => {
    if (data?.id) {
      mutate(data.id, {
        onSuccess: () => {
          ActionsHelper.revalidate(revalidateKey);
          hide();
        },
      });
    }
  };

  return (
    <div>
      <WarningIcon />
      <h2 className='mt-2rem text-24'>Warning!</h2>
      <h3 className='mt-0.25rem text-18 text-gray-500 text-balance'>
        Are you sure you want to delete? You can’t undo this action.
      </h3>

      <div className='mt-2rem'>
        <ModalFooter isLoading={isPending}>
          <Button
            onClick={handleDelete}
            isLoading={isPending}
            type='button'
            className='btn-error text-white min-w-10rem'
          >
            Delete
          </Button>
        </ModalFooter>
      </div>
    </div>
  );
}
