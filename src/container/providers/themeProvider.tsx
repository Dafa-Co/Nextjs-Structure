"use client";

import {ReactNode, createContext, useState} from "react";

import defaultConfig from "@/container/config/defaultConfig";

import ThemeHelper from "../helpers/themeHelper";

type ThemeContextModel = {
  theme: TypeTheme;
  setTheme: (theme: TypeTheme) => void;
};

export const themeContext = createContext<ThemeContextModel>({
  theme: defaultConfig.theme,
  setTheme: (theme: TypeTheme) => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({children}: ThemeProviderProps) {
  const getSavedTheme = ThemeHelper.getTheme();

  const [currentTheme, setCurrentTheme] = useState<TypeTheme>(getSavedTheme);

  const saveTheme = (themeParam: TypeTheme) => {
    setCurrentTheme(themeParam);
    ThemeHelper.setTheme(themeParam);
  };

  return (
    <themeContext.Provider value={{theme: currentTheme, setTheme: saveTheme}}>
      {children}
    </themeContext.Provider>
  );
}
