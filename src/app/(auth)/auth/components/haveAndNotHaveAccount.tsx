import {HTMLAttributes} from "react";

import Link from "next/link";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {isLogin?: boolean} & HTMLAttributes<HTMLDivElement>;

export default function HaveAndNotHaveAccount({isLogin = true, className, ...props}: Props) {
  return (
    <div className={ClassNameHelper.clsn("text-center", className)} {...props}>
      <p className='text-gray-500'>
        {isLogin ? (
          <>
            Not a Member yet?{" "}
            <Link href='register' className='link-primary'>
              Sign up
            </Link>
          </>
        ) : (
          <>
            Have an Account?{" "}
            <Link href='login' className='link-primary'>
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
