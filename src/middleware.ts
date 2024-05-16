import {NextResponse} from "next/server";

import withAuthMiddleware from "@/container/middlewares/authMiddleware";

function middleware() {
  return NextResponse.next();
}

export default withAuthMiddleware(middleware);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public/*).*)"],
};
