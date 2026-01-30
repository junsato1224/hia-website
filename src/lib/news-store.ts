import fs from "fs";
import path from "path";
import type { NewsArticle } from "@/types";

const DATA_PATH = path.join(process.cwd(), "data", "news.json");

export function readNews(): NewsArticle[] {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw) as NewsArticle[];
}

export function writeNews(articles: NewsArticle[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(articles, null, 2) + "\n", "utf-8");
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return readNews().find((a) => a.slug === slug);
}

export function createArticle(article: NewsArticle): void {
  const articles = readNews();
  if (articles.some((a) => a.slug === article.slug)) {
    throw new Error(`Slug "${article.slug}" already exists`);
  }
  articles.unshift(article);
  writeNews(articles);
}

export function updateArticle(slug: string, updated: NewsArticle): void {
  const articles = readNews();
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) {
    throw new Error(`Article "${slug}" not found`);
  }
  articles[index] = updated;
  writeNews(articles);
}

export function deleteArticle(slug: string): void {
  const articles = readNews();
  const filtered = articles.filter((a) => a.slug !== slug);
  if (filtered.length === articles.length) {
    throw new Error(`Article "${slug}" not found`);
  }
  writeNews(filtered);
}
