import dotenv from "dotenv";

import { writeCSVSample } from "./src/csv.js";
import { extractSample } from "./src/extract.js";
import { fetchSample } from "./src/fetch.js";
import { readHTMLSample, writeHTMLSample } from "./src/file.js";
import { sleep } from "./src/utils.js";

dotenv.config();
// Example
// const session = process.env.SESSION ?? "";

async function load() {
  const data = await fetchSample();
  await sleep(1000);
  await writeHTMLSample(data);
  console.log("Data loaded");
}

async function generate() {
  const data = await readHTMLSample();
  const value = extractSample(data);
  await writeCSVSample(value);
  console.log("Data generated");
}

(async () => {
  await load();
  await generate();
})();
