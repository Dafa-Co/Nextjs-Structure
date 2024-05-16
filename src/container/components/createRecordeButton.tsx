"use client";

import {ReactNode} from "react";

import Button from "./buttons/button";

import AddIcon from "./icons/addIcon";

import useModal from "@/container/hooks/useModal";

type Props = {children: ReactNode; data?: any};

export default function CreateRecordeButton({children, data}: Props) {
  const {show} = useModal();

  return (
    <Button
      className='btn-primary rounded-full rounded-ee-none'
      onClick={() => show(EnumModalTypes.add, data)}
    >
      <AddIcon
        svgProps={{
          className: "w-1.25rem h-1.25rem",
        }}
      />
      {children}
    </Button>
  );
}
