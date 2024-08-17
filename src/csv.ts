import { createObjectCsvWriter } from "csv-writer";

const HEADER = [{ id: "searchButton", title: "Search Button" }];

export async function writeCSVSample(value: string): Promise<void> {
  const csvWriter = createObjectCsvWriter({
    path: "data/csv/sample.csv",
    header: HEADER,
    alwaysQuote: true,
  });
  const records = [{ searchButton: value }];
  await csvWriter.writeRecords(records);
}
