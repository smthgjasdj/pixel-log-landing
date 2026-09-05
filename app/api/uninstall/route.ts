import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");

  if (!uuid) {
    return NextResponse.json({ error: "UUID is required" }, { status: 400 });
  }

  try {
    await fetch(
      `${process.env.API_URL}/m/uninstall?${new URLSearchParams({
        uuid,
      }).toString()}`,
      {
        method: "POST",
      }
    );
  } catch {
    // Continue even if tracking fails
  }

  return NextResponse.json({ success: true });
}
