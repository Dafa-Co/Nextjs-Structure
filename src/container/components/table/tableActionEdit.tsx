import EditIcon from "@/container/components/icons/editIcon";

import useModal from "@/container/hooks/useModal";

type Props = {
  data: any;
};

export default function TableActionEdit({data}: Props) {
  const {show} = useModal();

  return (
    <button
      type='button'
      className='tooltip'
      data-tip='Edit'
      onClick={() => show(EnumModalTypes.edit, data)}
    >
      <EditIcon />
    </button>
  );
}
