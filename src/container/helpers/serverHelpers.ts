import AuthJourneyHelper from "@/app/(auth)/auth/helpers/authJourneyHelper";

import LangHelper from "./langHelper";

import ThemeHelper from "./themeHelper";

import AuthTokenHelper from "@/app/(auth)/auth/helpers/authTokenHelper";

import AuthUserDataHelper from "@/app/(auth)/auth/helpers/authUserDataHelper";

export default class ServerHelper {
  static isServer(): boolean {
    return typeof window === "undefined";
  }

  static async serverCookies() {
    const {cookies} = await import("next/headers");
    return cookies;
  }

  static async getLangOnServer(): Promise<TypeLang> {
    const cookies = await ServerHelper.serverCookies();
    return LangHelper.getLang({cookies});
  }

  static async getThemeOnServer(): Promise<TypeTheme> {
    const cookies = await ServerHelper.serverCookies();
    return ThemeHelper.getTheme({cookies});
  }

  static async getEmailOnServer(): Promise<string | undefined> {
    const cookies = await ServerHelper.serverCookies();
    return AuthJourneyHelper.getEmail({cookies});
  }

  static async getOtpOnServer(): Promise<string | undefined> {
    const cookies = await ServerHelper.serverCookies();
    return AuthJourneyHelper.getOtp({cookies});
  }

  static async getTokenOnServer(): Promise<string | undefined> {
    const cookies = await ServerHelper.serverCookies();
    return AuthTokenHelper.getToken({cookies});
  }

  static async getUserDataOnServer(): Promise<TypeUser | undefined> {
    const cookies = await ServerHelper.serverCookies();
    return AuthUserDataHelper.getUserData({cookies});
  }
}
