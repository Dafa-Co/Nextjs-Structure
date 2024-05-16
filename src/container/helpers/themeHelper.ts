import defaultConfig from "@/container/config/defaultConfig";

import {themeCookiesKey} from "@/container/constants";

import CookieHelper, {CookieOptions} from "./cookieHelper";

export default class ThemeHelper {
  // get theme
  static getTheme(options: CookieOptions = {}): TypeTheme {
    return CookieHelper.getCookie(themeCookiesKey, options) || defaultConfig.theme;
  }

  // set theme
  static setTheme(theme: TypeTheme) {
    CookieHelper.setCookie(themeCookiesKey, theme);
  }
}
