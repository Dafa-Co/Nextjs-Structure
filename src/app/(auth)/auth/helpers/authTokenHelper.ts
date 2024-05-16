import CookieHelper, {CookieOptions} from "@/container/helpers/cookieHelper";

import AppHelper from "@/container/helpers/appHelper";

import {tokenCookiesKey} from "../constants";

export default class AuthTokenHelper {
  static getToken(options: CookieOptions = {}) {
    return CookieHelper.getCookie(tokenCookiesKey, options);
  }

  static setToken(token: string, options: CookieOptions = {}) {
    CookieHelper.setCookie(tokenCookiesKey, token, options);
  }

  static removeToken(options: CookieOptions = {}) {
    CookieHelper.deleteCookie(tokenCookiesKey, options);
  }
}
