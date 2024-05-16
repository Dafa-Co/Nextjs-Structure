import ClassNameHelper from "@/container/helpers/classNameHelper";

import {ForwardedRef, SelectHTMLAttributes, forwardRef} from "react";

type Props = {
  isErorr?: boolean;
  options: Array<{label: string; value: string | number | boolean}>;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef(
  ({isErorr, className, options, ...props}: Props, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
      <select
        ref={ref}
        {...props}
        className={ClassNameHelper.clsn(
          "select select-bordered w-full focus:border-primary focus:outline-0 focus:outline-primary/50 focus:outline-dashed",
          {
            "input-error focus:outline-error/50 focus:border-error": isErorr,
          },
          className
        )}
      >
        {options.map((item) => (
          <option key={item.value + "key"} value={item.value as string | number}>
            {item.label}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
