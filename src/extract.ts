import * as cheerio from "cheerio";

export function extractSample(data: string): string {
  const $ = cheerio.load(data);
  const value = $("input[name=btnG]").attr("value");
  return value ?? "";
}

// // Example cheerio usage
//
// // Select the second table on the page
// const table = $("table").eq(1)
//
// // Iterate over the rows in the table
// const rows = table.find("tbody tr")
// rows.each((_, row) => {
//   // Get the text of the first column in the row
//   const firstColumnText = $(row).find("td").eq(0).text().trim();
// })
