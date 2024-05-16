import {ForwardedRef, InputHTMLAttributes, forwardRef} from "react";

import Input from "./input";

type Props = {isErorr?: boolean} & InputHTMLAttributes<HTMLInputElement>;

const WithPassword = forwardRef(
  ({isErorr, className, ...props}: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className='relative'>
        <Input ref={ref} {...props} />
        <button type='button' className='absolute top-1/2 -translate-y-1/2 end-1rem'></button>
      </div>
    );
  }
);

export default WithPassword;
