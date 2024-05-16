"use client";

import {useState} from "react";

import DatePicker, {ReactDatePickerProps} from "react-datepicker";

import {useFormContext} from "react-hook-form";

import ClassNameHelper from "@/container/helpers/classNameHelper";

import "react-datepicker/dist/react-datepicker.css";

type Props = Partial<ReactDatePickerProps> & {name: string; isErorr?: boolean};

export default function DateInput({className, isErorr, ...props}: Props) {
  const {getValues, setValue} = useFormContext();

  const fieldValue = getValues(props.name);

  const [selected, setSelected] = useState(fieldValue);

  return (
    <DatePicker
      selected={selected}
      onChange={(date) => {
        setValue(props.name, date);
        setSelected(date);
      }}
      className={ClassNameHelper.clsn(
        "input input-bordered w-full focus:border-primary focus:outline-0 focus:outline-primary/50 focus:outline-dashed",
        {
          "input-error focus:outline-error/50 focus:border-error": isErorr,
        },
        className
      )}
      {...props}
    />
  );
}
