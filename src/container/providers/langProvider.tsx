"use client";

import {ReactNode, createContext, useState} from "react";

import defaultConfig from "@/container/config/defaultConfig";

import LangHelper from "../helpers/langHelper";

type LangContextModel = {
  lang: TypeLang;
  setLang: (lang: TypeLang) => void;
};

export const langContext = createContext<LangContextModel>({
  lang: defaultConfig.lang,
  setLang: (lang: TypeLang) => {},
});

type LangProviderProps = {
  children: ReactNode;
};

export default function LangProvider({children}: LangProviderProps) {
  const getSavedLang = LangHelper.getLang();

  const [currentLang, setCurrentLang] = useState<TypeLang>(getSavedLang);

  const saveLang = (langParam: TypeLang) => {
    setCurrentLang(langParam);
    LangHelper.setLang(langParam);
  };

  return (
    <langContext.Provider value={{lang: currentLang, setLang: saveLang}}>
      {children}
    </langContext.Provider>
  );
}
