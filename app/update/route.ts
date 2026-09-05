import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");
  const currentVersion = request.nextUrl.searchParams.get("version");
  const previousVersion = request.nextUrl.searchParams.get("previous");

  if (!uuid || !currentVersion || !previousVersion) {
    return NextResponse.json(
      { error: "UUID, current version and previous version are required" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `${process.env.API_URL}/m/update?${new URLSearchParams({
      uuid,
    }).toString()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        new_version: currentVersion,
        previous_version: previousVersion,
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to send metrics to the server" },
      { status: 500 }
    );
  }

  const result = await response.json();
  if (result.error) {
    return NextResponse.json(
      { error: "Failed to send metrics to the server" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
