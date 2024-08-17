import * as cheerio from "cheerio";

export function extractSample(data: string): string {
  const $ = cheerio.load(data);
  const value = $("input[name=btnG]").attr("value");
  return value ?? "";
}
