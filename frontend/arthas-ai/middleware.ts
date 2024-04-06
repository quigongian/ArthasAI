import { updateSession } from "./app/utils/supabase/middleware";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "./app/utils/supabase/server";

export async function middleware(request: NextRequest) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/document/:path*", "/dashboard"],
};
