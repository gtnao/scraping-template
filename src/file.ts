import { promises as fs } from "fs";

export async function writeHTMLSample(data: string): Promise<void> {
  const path = "data/html/sample.html";
  console.log(`Writing: ${path}`);
  await fs.writeFile(path, data);
}

export async function readHTMLSample(): Promise<string> {
  const path = "data/html/sample.html";
  const data = await fs.readFile(path, "utf-8");
  return data;
}
