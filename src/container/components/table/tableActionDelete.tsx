import useModal from "@/container/hooks/useModal";

import TrashIcon from "@/container/components/icons/trashIcon";

type Props = {
  id: number;
};

export default function TableActionDelete({id}: Props) {
  const {show} = useModal();

  return (
    <button
      type='button'
      className='tooltip'
      data-tip='Delete'
      onClick={() => show(EnumModalTypes.delete, {id})}
    >
      <TrashIcon />
    </button>
  );
}
