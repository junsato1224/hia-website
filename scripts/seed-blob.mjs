import { put } from "@vercel/blob";
import { readFileSync } from "fs";
import { join } from "path";

const data = readFileSync(join(process.cwd(), "data", "news.json"), "utf-8");

const blob = await put("news.json", data, {
  access: "public",
  addRandomSuffix: false,
  contentType: "application/json",
  token: process.env.BLOB_READ_WRITE_TOKEN,
});

console.log("Seeded news.json to Vercel Blob:", blob.url);
