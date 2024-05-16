import useModal from "@/container/hooks/useModal";

import ViewIcon from "@/container/components/icons/viewIcon";

type Props = {
  data: any;
};

export default function TableActionView({data}: Props) {
  const {show} = useModal();

  return (
    <button
      type='button'
      className='tooltip'
      data-tip='View'
      onClick={() => show(EnumModalTypes.view, data)}
    >
      <ViewIcon />
    </button>
  );
}
