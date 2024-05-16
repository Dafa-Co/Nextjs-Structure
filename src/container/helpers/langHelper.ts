import defaultConfig from "@/container/config/defaultConfig";

import {langCookiesKey} from "@/container/constants";

import CookieHelper, {CookieOptions} from "./cookieHelper";

export default class LangHelper {
  // get lang
  static getLang(options: CookieOptions = {}): TypeLang {
    return CookieHelper.getCookie(langCookiesKey, options) || defaultConfig.lang;
  }

  // set lang
  static setLang(lang: TypeLang) {
    CookieHelper.setCookie(langCookiesKey, lang);
  }
}
