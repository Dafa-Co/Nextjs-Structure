import CookieHelper, {CookieOptions} from "@/container/helpers/cookieHelper";

import AppHelper from "@/container/helpers/appHelper";

import {userDataCookiesKey} from "../constants";

export default class AuthUserDataHelper {
  static getUserData(options: CookieOptions = {}): TypeUser | undefined {
    const userData = CookieHelper.getCookie(userDataCookiesKey, options);
    return userData ? JSON.parse(userData) : undefined;
  }

  static setUserData(userData: TypeUser, options: CookieOptions = {}) {
    CookieHelper.setCookie(userDataCookiesKey, JSON.stringify(userData), options);
  }

  static removeUserData(options: CookieOptions = {}) {
    CookieHelper.deleteCookie(userDataCookiesKey, options);
  }
}
