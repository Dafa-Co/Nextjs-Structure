import Link from "next/link";

import {ReactNode} from "react";

import ClassNameHelper from "../helpers/classNameHelper";

type Props = {children: ReactNode};

export default function TabsContainer({children}: Props) {
  return (
    <div className='flex items-center gap-1rem px-1rem relative -bottom-[1px]'>{children}</div>
  );
}

type TabProps = Props & {
  href: string;
  isActive: boolean;
};

export function Tab({children, href, isActive}: TabProps) {
  return (
    <Link
      href={href}
      className={ClassNameHelper.clsn(
        "text-18  px-1.75rem py-0.5rem text-gray-500 border border-transparent rounded-ss-btn rounded-se-btn",
        {
          "border-base-300 border-b-white text-primary": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
}
