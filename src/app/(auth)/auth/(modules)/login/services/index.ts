import InterceptorHelper from "@/container/helpers/interceptorHelper";

import {TypeLoginField} from "../types";

export const apiLogin = (data: TypeLoginField) =>
  InterceptorHelper.intercept<TypeUser>("auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
