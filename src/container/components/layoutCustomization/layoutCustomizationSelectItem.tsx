import {ReactNode} from "react";

type Props = {
  value: string;
  label: string;
  description?: string;
  image: ReactNode;
};

export default function LayoutCustomizationSelectItem({image, label, value, description}: Props) {
  return (
    <div>
      <input
        type='radio'
        className='peer peer-nested'
        // defaultChecked={true}
        hidden
        name='layout-customization-select'
        value={value}
        id={value}
      />
      <label
        htmlFor={value}
        className='peer-checked:border-primary cursor-pointer border rounded-btn bg-white p-0.25rem text-center flex flex-col items-center'
      >
        <div className='mb-0.25rem'>{image}</div>
        <div className='px-0.25rem text-start w-full flex items-center justify-between'>
          <h6 className='text-12 text-gray-500 font-medium'>{label}</h6>
          <span className='w-[12px] h-[12px] rounded-full border peer-nested:border-primary peer-nested:bg-primary'></span>
        </div>
      </label>
    </div>
  );
}
