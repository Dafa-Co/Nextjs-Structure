"use client";

import {ReactNode, createContext, useState} from "react";

import AuthJourneyHelper from "../helpers/authJourneyHelper";

type AuthJourneyContextModel = {
  email: string | undefined;
  setEmail: (email: string) => void;
  removeEmail: () => void;
  otp: string | undefined;
  setOtp: (email: string) => void;
  removeOtp: () => void;
};

export const authJourneyContext = createContext<AuthJourneyContextModel>({
  email: undefined,
  setEmail: (email) => {},
  removeEmail: () => {},
  otp: undefined,
  setOtp: (email) => {},
  removeOtp: () => {},
});

type AuthJourneyProviderProps = {
  children: ReactNode;
};

export default function AuthJourneyProvider({children}: AuthJourneyProviderProps) {
  const getSavedEmail = AuthJourneyHelper.getEmail();

  const getSavedOtp = AuthJourneyHelper.getOtp();

  const [emailState, setEmailState] = useState(getSavedEmail);

  const [otpState, setOtpState] = useState(getSavedOtp);

  const setEmail = (email: string) => {
    AuthJourneyHelper.setEmail(email);
    setEmailState(email);
  };

  const removeEmail = () => {
    AuthJourneyHelper.removeEmail();
    setEmailState(undefined);
  };

  const setOtp = (otp: string) => {
    AuthJourneyHelper.setOtp(otp);
    setOtpState(otp);
  };

  const removeOtp = () => {
    AuthJourneyHelper.removeOtp();
    setOtpState(undefined);
  };

  return (
    <authJourneyContext.Provider
      value={{email: emailState, setEmail, removeEmail, otp: otpState, setOtp, removeOtp}}
    >
      {children}
    </authJourneyContext.Provider>
  );
}
