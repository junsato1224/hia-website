import { put, list } from "@vercel/blob";
import { unstable_noStore as noStore } from "next/cache";
import fs from "fs";
import path from "path";
import type { NewsArticle } from "@/types";

const BLOB_PATH = "news.json";
const LOCAL_PATH = path.join(process.cwd(), "data", "news.json");

function readLocalNews(): NewsArticle[] {
  try {
    const raw = fs.readFileSync(LOCAL_PATH, "utf-8");
    return JSON.parse(raw) as NewsArticle[];
  } catch {
    return [];
  }
}

export async function readNews(): Promise<NewsArticle[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return readLocalNews();
  }

  noStore();

  const { blobs } = await list({ prefix: BLOB_PATH });
  if (blobs.length === 0) {
    return readLocalNews();
  }
  const res = await fetch(blobs[0].url, { cache: "no-store" });
  return (await res.json()) as NewsArticle[];
}

async function writeNews(articles: NewsArticle[]): Promise<void> {
  await put(BLOB_PATH, JSON.stringify(articles, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function getArticleBySlug(
  slug: string
): Promise<NewsArticle | undefined> {
  const articles = await readNews();
  return articles.find((a) => a.slug === slug);
}

export async function createArticle(article: NewsArticle): Promise<void> {
  const articles = await readNews();
  if (articles.some((a) => a.slug === article.slug)) {
    throw new Error(`Slug "${article.slug}" already exists`);
  }
  articles.unshift(article);
  await writeNews(articles);
}

export async function updateArticle(
  slug: string,
  updated: NewsArticle
): Promise<void> {
  const articles = await readNews();
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) {
    throw new Error(`Article "${slug}" not found`);
  }
  articles[index] = updated;
  await writeNews(articles);
}

export async function deleteArticle(slug: string): Promise<void> {
  const articles = await readNews();
  const filtered = articles.filter((a) => a.slug !== slug);
  if (filtered.length === articles.length) {
    throw new Error(`Article "${slug}" not found`);
  }
  await writeNews(filtered);
}
