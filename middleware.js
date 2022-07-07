import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  if (request.nextUrl.pathname === "/") {
    const session = await getToken({
      req: request,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });

    const url = request.nextUrl.clone();

    url.pathname = "/home";

    if (!session) return NextResponse.rewrite(url);
  }
}
