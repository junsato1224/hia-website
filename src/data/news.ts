import type { NewsArticle } from "@/types";
import { readNews } from "@/lib/news-store";

export async function getNewsArticles(): Promise<NewsArticle[]> {
  return readNews();
}

export async function getNewsArticle(
  slug: string
): Promise<NewsArticle | undefined> {
  const articles = await readNews();
  return articles.find((a) => a.slug === slug);
}

export async function getLatestNews(count: number): Promise<NewsArticle[]> {
  const articles = await readNews();
  return articles
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}
