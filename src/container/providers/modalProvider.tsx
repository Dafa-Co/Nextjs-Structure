"use client";

import {ReactNode, createContext, useState} from "react";

type ModalContextModel = {
  type: EnumModalTypes | undefined;
  isOpen: boolean;
  show: (type: EnumModalTypes, data?: any) => void;
  hide: () => void;
  data: any;
};

export const modalContext = createContext<ModalContextModel>({
  type: undefined,
  isOpen: false,
  show: () => {},
  hide: () => {},
  data: {},
});

type ModalProviderProps = {
  children: ReactNode;
};

export default function ModalProvider({children}: ModalProviderProps) {
  const [type, setType] = useState<EnumModalTypes | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>(undefined);

  const show = (type: EnumModalTypes, data: any) => {
    setType(type);
    setIsOpen(true);
    setData(data);
  };

  const hide = () => {
    setType(undefined);
    setIsOpen(false);
    setData(undefined);
  };

  return (
    <modalContext.Provider
      value={{
        isOpen,
        show,
        hide,
        data,
        type,
      }}
    >
      {children}
    </modalContext.Provider>
  );
}
