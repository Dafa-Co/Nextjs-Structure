import CookieHelper, {CookieOptions} from "@/container/helpers/cookieHelper";

import {tokenCookiesKey} from "../constants";

import AuthJourneyHelper from "./authJourneyHelper";

import AuthTokenHelper from "./authTokenHelper";

import AuthUserDataHelper from "./authUserDataHelper";

import ServerHelper from "@/container/helpers/serverHelpers";

export default class AuthHelper {
  static isAuthenticated(options: CookieOptions = {}) {
    return CookieHelper.hasCookie(tokenCookiesKey, options);
  }

  static async isAuthenticatedOnSerever(): Promise<boolean> {
    const cookies = await ServerHelper.serverCookies();
    return AuthHelper.isAuthenticated({cookies});
  }

  static async logout(options: CookieOptions = {}) {
    AuthJourneyHelper.removeEmail();
    AuthTokenHelper.removeToken();
    AuthUserDataHelper.removeUserData();
  }
}
