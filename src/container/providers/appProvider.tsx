"use client";

import {ReactNode, createContext, useState} from "react";

type AppContextModel = {};

export const appContext = createContext<AppContextModel>({});

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({children}: AppProviderProps) {
  return <appContext.Provider value={{}}>{children}</appContext.Provider>;
}
