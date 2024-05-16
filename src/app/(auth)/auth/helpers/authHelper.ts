import CookieHelper, {CookieOptions} from "@/container/helpers/cookieHelper";

import AppHelper from "@/container/helpers/appHelper";

import {tokenCookiesKey} from "../constants";

import AuthJourneyHelper from "./authJourneyHelper";

import AuthTokenHelper from "./authTokenHelper";

import AuthUserDataHelper from "./authUserDataHelper";

export default class AuthHelper {
  static isAuthenticated(options: CookieOptions = {}) {
    return CookieHelper.hasCookie(tokenCookiesKey, options);
  }

  static async isAuthenticatedOnSerever(): Promise<boolean> {
    const cookies = await AppHelper.serverCookies();
    return AuthHelper.isAuthenticated({cookies});
  }

  static async logout(options: CookieOptions = {}) {
    AuthJourneyHelper.removeEmail();
    AuthTokenHelper.removeToken();
    AuthUserDataHelper.removeUserData();
  }
}
