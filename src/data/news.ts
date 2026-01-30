import type { NewsArticle } from "@/types";
import { readNews } from "@/lib/news-store";

export function getNewsArticles(): NewsArticle[] {
  return readNews();
}

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return readNews().find((a) => a.slug === slug);
}

export function getLatestNews(count: number): NewsArticle[] {
  return readNews()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}
