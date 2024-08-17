export async function fetchSample(): Promise<string> {
  const url = "https://www.google.com/";
  const headers = {};
  console.log(`Fetching: ${url}`);
  const response = await fetch(url, {
    headers,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.text();
  return data;
}
