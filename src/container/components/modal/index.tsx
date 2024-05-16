"use client";

import {createPortal} from "react-dom";

import {FunctionComponent, ReactNode} from "react";

import useModal from "@/container/hooks/useModal";

type Props = Partial<{
  [Key in EnumModalTypes]: FunctionComponent;
}>;

export default function Modal({...props}: Props) {
  const {type, isOpen} = useModal();

  const Content: React.FC = () => {
    if (type && props?.[type]) {
      const Component = props[type] as React.FC;
      return <Component />;
    }
    return null;
  };

  return isOpen
    ? createPortal(
        <ModalWrapper type={type}>{Content ? <Content /> : null}</ModalWrapper>,
        document.getElementById("modal-root") as HTMLElement
      )
    : null;
}

function ModalWrapper({children, type}: {children: ReactNode; type: EnumModalTypes | undefined}) {
  return (
    <div className='modal modal-open z-50'>
      {type === "layout" ? (
        <div className='modal-box max-w-[60rem]'>{children}</div>
      ) : (
        <div className='modal-box max-w-[40rem]'>{children}</div>
      )}
    </div>
  );
}
