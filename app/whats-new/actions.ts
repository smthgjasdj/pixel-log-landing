type GetShouldBeRedirectedParams = {
  uuid: string;
  ua: string;
  country: string;
};

export async function getShouldBeRedirected({
  uuid,
  ua,
  country,
}: GetShouldBeRedirectedParams): Promise<boolean> {
  if (country === "RU") {
    return false;
  }

  const extension = process.env.EXTENSION_CODE;

  if (!extension) {
    console.warn(`'EXTENSION_CODE' env variable is not set`);
    return false;
  }

  const response = await fetch(
    `${process.env.API_URL}/a/redirect/available?${new URLSearchParams({
      uuid,
      extension,
    }).toString()}`,
    {
      headers: {
        "User-Agent": ua,
      },
    }
  );

  const result = await response.json();
  return result.available;
}
