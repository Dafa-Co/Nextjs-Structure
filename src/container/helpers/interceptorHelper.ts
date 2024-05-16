import LangHelper from "./langHelper";

import AuthTokenHelper from "@/app/(auth)/auth/helpers/authTokenHelper";

import {toast} from "react-toastify";

import ServerHelper from "./serverHelpers";

export default class InterceptorHelper {
  private static baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // intercept request
  static async interceptRequest(options: RequestInit = {}): Promise<RequestInit> {
    // get token
    let token = AuthTokenHelper.getToken() || "";

    // get lang
    let lang = LangHelper.getLang();

    if (ServerHelper.isServer()) {
      token = await ServerHelper.getTokenOnServer();
      lang = await ServerHelper.getLangOnServer();
    }

    options.headers = {
      Authorization: `Bearer ${token}`,
      "Accept-Language": lang,
      "Content-Language": lang,
      "Content-Type": "application/json",
      ...options.headers,
    };

    // delete content type if the body is an object (eg. FormData)
    if (typeof options.body === "object") {
      if (options.headers?.["Content-Type" as keyof HeadersInit]) {
        delete options.headers["Content-Type" as keyof HeadersInit];
      }
    }

    return options;
  }

  // intercept response
  static async interceptResponse<T>(
    response: Response,
    method: string | undefined
  ): Promise<TypeResponse<T>> {
    const responseJson = await response.json();

    const message = responseJson?.message;

    // handle response error
    if (!response.ok) {
      // show error message
      // if (!ServerHelper.isServer()) {
      //   toast.error(message);
      // }

      return Promise.reject(responseJson);
    }

    // handle response success
    if (method && method.toLowerCase() !== "get") {
      // if (!ServerHelper.isServer()) {
      //   toast.success(message);
      // }
    }

    return responseJson;
  }

  // intercept function
  static async intercept<T>(url: string, options: RequestInit = {}): Promise<TypeResponse<T>> {
    // handle request
    const requestOptions = await InterceptorHelper.interceptRequest(options);

    const response = await fetch(InterceptorHelper.baseUrl + "" + url, requestOptions);

    // handle response
    const responsOption = await InterceptorHelper.interceptResponse<T>(response, options.method);

    return responsOption;
  }
}
