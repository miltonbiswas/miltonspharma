
import { NextRequest, NextResponse } from "next/server";

const ADMIN_API_URL =
  "https://miltons-pharma-api.miltonbiswasdev.workers.dev/api/admin/me";

export async function GET(request: NextRequest) {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 },
    );
  }

  try {
    const upstream = await fetch(ADMIN_API_URL, {
      method: "GET",
      headers: {
        Authorization: authorization,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const body = await upstream.text();
    console.error("[Admin API upstream]", {
  status: upstream.status,
  body: body.slice(0, 1500),
});
    return new NextResponse(body, {
      status: upstream.status,
      headers: {
        "Content-Type":
          upstream.headers.get("content-type") ?? "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("[Admin API proxy]", error);

    return NextResponse.json(
      {
        error: "Unable to reach the admin API",
        details:
          error instanceof Error ? error.message : String(error),
      },
      { status: 502 },
    );
  }
}
