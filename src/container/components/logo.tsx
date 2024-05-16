import Image from "next/image";

import ImageLogo from "@/app/assets/logo.jpeg";
import ClassNameHelper from "../helpers/classNameHelper";

type Props = {className?: string};

export default function Logo({className}: Props) {
  return (
    <Image
      src={ImageLogo}
      alt='dafa logo'
      className={ClassNameHelper.clsn("h-[80px] object-cover", className)}
    />
  );
}
