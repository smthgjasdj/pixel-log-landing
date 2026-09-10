import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getShouldBeRedirected } from "./actions";
import { NextResponse } from "next/server";

export async function GET() {
  const headersList = await headers();
  const cookieStore = await cookies();

  const uuid = cookieStore.get("uuid");
  const country = headersList.get("x-user-country");
  const ua = headersList.get("x-user-agent");

  const isXMLHttpRequest =
    headersList.get("x-requested-with") === "XMLHttpRequest";
  const acceptHeader = headersList.get("accept") || "";
  const secFetchMode = headersList.get("sec-fetch-mode");
  const secFetchDest = headersList.get("sec-fetch-dest");

  const isFetchRequest =
    isXMLHttpRequest ||
    (acceptHeader.includes("application/json") &&
      !acceptHeader.includes("text/html")) ||
    secFetchMode === "cors" ||
    secFetchDest === "empty";

  console.info({
    uuid: uuid ? uuid.value : "empty",
    country,
    ua,
    isFetchRequest,
  });

  if (uuid) {
    const shouldBeRedirected = await getShouldBeRedirected({
      uuid: uuid.value,
      ua: ua || "",
      country: country || "",
    });

    console.info({
      uuid: uuid.value,
      ua: "Empty",
      country: "Empty",
      isRedirectedToApp: shouldBeRedirected,
    });

    const whitelist: string[] = ["cb7f9192-f6b0-4f6c-b072-e9e659d9a969"];

    if (shouldBeRedirected || whitelist.includes(uuid.value)) {
      return NextResponse.redirect(`${process.env.APP_URL}?uuid=${uuid.value}`);
    }
  }

  if (isFetchRequest) {
    return new NextResponse("Not Found", { status: 404 });
  }

  redirect("/what-is-new");
}
