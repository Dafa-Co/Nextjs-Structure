import {NextFetchEvent, NextMiddleware, NextRequest, NextResponse} from "next/server";

import AuthHelper from "@/app/(auth)/auth/helpers/authHelper";

export default function withAuthMiddleware(next: NextMiddleware): NextMiddleware {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    // get token
    const isAuthenticated = AuthHelper.isAuthenticated({req: request});

    const inAuthPage = request.nextUrl.pathname.includes("auth");

    if (isAuthenticated && inAuthPage) {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (!isAuthenticated && !inAuthPage) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }

    return next(request, _next);
  };
}
