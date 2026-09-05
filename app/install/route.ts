import { geolocation, ipAddress } from "@vercel/functions";
import { NextRequest, NextResponse, userAgent } from "next/server";

export async function GET(request: NextRequest) {
  const uuid = request.nextUrl.searchParams.get("uuid");
  const version = request.nextUrl.searchParams.get("version");

  if (!uuid || !version) {
    return NextResponse.json(
      { error: "UUID and version is required" },
      { status: 400 }
    );
  }

  const ip = ipAddress(request) ?? "";
  const { country } = geolocation(request);

  const { ua, os } = userAgent(request);

  const data = {
    ip,
    country: country ?? "",
    user_agent: ua,
    cpu: os.name,
    version,
  };

  const extension = process.env.EXTENSION_CODE;

  if (!extension) {
    console.warn(`'EXTENSION_CODE' env variable is not set`);
    return NextResponse.json(
      { error: "Extension code not configured" },
      { status: 500 }
    );
  }

  const response = await fetch(
    `${process.env.API_URL}/m/install?${new URLSearchParams({
      uuid,
      extension,
    }).toString()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": ua,
      },
      body: JSON.stringify(data),
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
    console.log(result);
    return NextResponse.json(
      { error: "Failed to send metrics to the server" },
      { status: 500 }
    );
  }

  const finalResponse = NextResponse.json({ success: true });

  // Set cookie with long expiration (1 year)
  finalResponse.cookies.set({
    name: "uuid",
    value: uuid,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year in seconds
    path: "/",
  });


  return finalResponse;
}
