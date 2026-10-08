export function extractSearchParamsFromURL(
  url: string,
  params: string[],
): string[] {
  const values: string[] = [];
  const receivedUrl = new URL(url);
  const hashParams = new URLSearchParams(receivedUrl.hash.substring(1));
  params.forEach((value) => {
    values.push(hashParams.get(value) ?? "");
  });
  return values;
}
