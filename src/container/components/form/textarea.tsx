import ClassNameHelper from "@/container/helpers/classNameHelper";

import {ForwardedRef, TextareaHTMLAttributes, forwardRef} from "react";

type Props = {isErorr?: boolean} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef(
  ({isErorr, className, ...props}: Props, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={ClassNameHelper.clsn(
          "textarea textarea-bordered w-full focus:border-primary focus:outline-0 focus:outline-primary/50 focus:outline-dashed",
          {
            "textarea-error focus:outline-error/50 focus:border-error": isErorr,
          },
          className
        )}
      />
    );
  }
);

export default Textarea;
