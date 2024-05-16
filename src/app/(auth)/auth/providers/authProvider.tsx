"use client";

import {ReactNode, createContext, useState} from "react";

import AuthHelper from "../helpers/authHelper";

import AuthUserDataHelper from "../helpers/authUserDataHelper";

import AuthTokenHelper from "../helpers/authTokenHelper";

type AuthContextModel = {
  userData: TypeUser | undefined;
  isLoggedIn: boolean;
  setUserData: (userData: TypeUser, token: string) => void;
  logout: () => void;
};

export const authContext = createContext<AuthContextModel>({
  isLoggedIn: false,
  logout: () => {},
  setUserData: (userData: TypeUser, token: string) => {},
  userData: undefined,
});

type AuthProviderProps = {
  children: ReactNode;
};

export default function AuthProvider({children}: AuthProviderProps) {
  const getSavedUserData = AuthUserDataHelper.getUserData();

  const isAuthenticated = AuthHelper.isAuthenticated();

  const [currentUserData, setCurrentUserData] = useState<TypeUser | undefined>(getSavedUserData);

  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);

  const setUserData = (userData: TypeUser, token: string) => {
    AuthTokenHelper.setToken(token);
    AuthUserDataHelper.setUserData(userData);
    setCurrentUserData(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    AuthHelper.logout();
    setCurrentUserData(undefined);
    setIsLoggedIn(false);
  };

  return (
    <authContext.Provider value={{isLoggedIn, logout, setUserData, userData: currentUserData}}>
      {children}
    </authContext.Provider>
  );
}
