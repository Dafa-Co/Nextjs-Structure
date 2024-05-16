import {ReactNode} from "react";

import Image from "next/image";
import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = {
  className?: string;
  image?: string;
  width?: number;
  height?: number;
  children?: ReactNode;
};

export default function TableImageTitle({
  className,
  image,
  width = 32,
  height = 32,
  children,
}: Props) {
  return (
    <td className='p-0'>
      <div
        className={ClassNameHelper.clsn("flex items-center gap-sm text-sm text-accent", className)}
      >
        {image && <Image src={image} alt='image' width={width} height={height} className='' />}

        {children && children}
      </div>
    </td>
  );
}
