import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { getLatestNews } from "@/data/news";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

export function NewsPreview() {
  const latestNews = getLatestNews(3);

  return (
    <section className="bg-warm-gray py-20">
      <Container>
        <SectionHeading title="お知らせ" />
        <div className="space-y-4">
          {latestNews.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="block rounded-xl bg-ivory p-5 shadow-soft transition-shadow hover:shadow-medium"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <time
                  dateTime={article.date}
                  className="shrink-0 text-sm text-text-muted"
                >
                  {formatDate(article.date)}
                </time>
                <span className="inline-block w-fit rounded-full bg-sky-soft/30 px-3 py-0.5 text-xs font-medium text-text-secondary">
                  {article.category}
                </span>
                <p className="text-sm font-medium text-text-primary sm:text-base">
                  {article.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-block text-sm font-medium text-coral-soft transition-colors hover:text-text-primary"
          >
            一覧を見る →
          </Link>
        </div>
      </Container>
    </section>
  );
}
