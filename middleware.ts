import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "development-secret-change-in-production"
);

const PROTECTED_ROUTES = ["/dashboard"];
const AUTH_ROUTES = ["/login"];

const verifyToken = async (token: string): Promise<boolean> => {
  try {
    await jwtVerify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("session")?.value;

  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  const isAuthenticated = sessionToken
    ? await verifyToken(sessionToken)
    : false;

  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && isAuthenticated) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*", "/login"]
};
