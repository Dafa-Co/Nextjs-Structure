import {
  NextResponse,
  NextRequest,
  NextMiddleware,
  NextFetchEvent,
} from "next/server";

// import { i18n } from '../i18n-config'

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

const withAuthMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    // cookies
    const cookiesStore = request.cookies;

    // // get token from cookie
    const getToken = cookiesStore.get("token");

    // in auth page
    const inAuthPage = request.nextUrl.pathname.includes("auth");

    if (getToken && inAuthPage) {

      return NextResponse.redirect(new URL("/", request.url));

    } else if (!getToken && !inAuthPage) {

      return NextResponse.redirect(new URL("/auth/login", request.url));

    }

    return next(request, _next);
  };
};

const withI18nMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    // const pathname = request.nextUrl.pathname

    // const pathnameIsMissingLocale = i18n.locales.every(
    //   (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    // )

    // if (pathnameIsMissingLocale) {
    //   // const locale = getLocale(request)
  
    //   // e.g. incoming request is /products
    //   // The new URL is now /en-US/products
    //   return NextResponse.redirect(
    //     new URL(
    //       `/en${pathname.startsWith('/') ? '' : '/'}${pathname}`,
    //       request.url
    //     )
    //   )
    // }
  
    return next(request, _next);
  };
}

function middleware() {
  return NextResponse.next();
}

export default withAuthMiddleware(withI18nMiddleware(middleware));

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
