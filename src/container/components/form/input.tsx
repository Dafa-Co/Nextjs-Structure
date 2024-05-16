import ClassNameHelper from "@/container/helpers/classNameHelper";

import {ForwardedRef, InputHTMLAttributes, forwardRef} from "react";

type Props = {isErorr?: boolean} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  ({isErorr, className, ...props}: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        {...props}
        className={ClassNameHelper.clsn(
          "input input-bordered w-full focus:border-primary focus:outline-0 focus:outline-primary/50 focus:outline-dashed",
          {
            "input-error focus:outline-error/50 focus:border-error": isErorr,
          },
          className
        )}
      />
    );
  }
);

export default Input;
