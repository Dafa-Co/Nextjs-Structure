import CookieHelper, {CookieOptions} from "@/container/helpers/cookieHelper";

import {userJourneyEmailCookiesKey, userJourneyOtpCookiesKey} from "../constants";

export default class AuthJourneyHelper {
  static getEmail(options: CookieOptions = {}): string | undefined {
    return CookieHelper.getCookie(userJourneyEmailCookiesKey, options);
  }

  static setEmail(email: string, options: CookieOptions = {}) {
    CookieHelper.setCookie(userJourneyEmailCookiesKey, email, options);
  }

  static removeEmail(options: CookieOptions = {}) {
    CookieHelper.deleteCookie(userJourneyEmailCookiesKey, options);
  }

  static getOtp(options: CookieOptions = {}): string | undefined {
    return CookieHelper.getCookie(userJourneyOtpCookiesKey, options);
  }

  static setOtp(otp: string, options: CookieOptions = {}) {
    CookieHelper.setCookie(userJourneyOtpCookiesKey, otp, options);
  }

  static removeOtp(options: CookieOptions = {}) {
    CookieHelper.deleteCookie(userJourneyOtpCookiesKey, options);
  }
}
