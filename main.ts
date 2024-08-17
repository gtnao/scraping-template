import { writeCSVSample } from "./src/csv.js";
import { extractSample } from "./src/extract.js";
import { fetchSample } from "./src/fetch.js";
import { readHTMLSample, writeHTMLSample } from "./src/file.js";

async function load() {
  const data = await fetchSample();
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
