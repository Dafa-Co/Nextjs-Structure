"use client";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {
  isLoading: boolean;
  onChange: () => void;
  status: boolean;
};

export default function TableChangeStatus({isLoading, onChange, status}: Props) {
  return (
    <div className='flex items-center gap-sm'>
      <input
        type='checkbox'
        className='toggle toggle-primary'
        checked={status}
        onChange={onChange}
        disabled={isLoading}
      />

      <span
        className={ClassNameHelper.clsn("invisible loading loading-spinner loading-sm", {
          visible: isLoading,
        })}
      ></span>
    </div>
  );
}
