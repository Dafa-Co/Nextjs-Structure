"use client";

import {ButtonHTMLAttributes} from "react";

import {useRouter} from "next/navigation";

import ArrowLeftIcon from "@/container/components/icons/arrowLeftIcon";

import ClassNameHelper from "@/container/helpers/classNameHelper";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function BackButton({className, ...props}: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type='button'
      className={ClassNameHelper.clsn(
        "border rounded-full w-3rem h-3rem flex items-center justify-center hover:border-primary transition",
        className
      )}
      {...props}
    >
      <ArrowLeftIcon />
    </button>
  );
}
