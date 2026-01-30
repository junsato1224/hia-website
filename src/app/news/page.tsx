import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { getNewsArticles } from "@/data/news";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "HUMAN INFINITY ACADEMY からのお知らせ一覧です。",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

const categoryColors: Record<string, string> = {
  "お知らせ": "bg-sky-soft/30",
  "イベント": "bg-peach/30",
  "レポート": "bg-mint-soft/30",
  "メディア": "bg-sky-soft/20",
};

export default async function NewsPage() {
  const articles = await getNewsArticles();
  const sorted = articles.sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <>
      <PageHeader title="お知らせ" />

      <section className="py-20">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            {sorted.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="block rounded-xl bg-ivory p-6 shadow-soft transition-shadow hover:shadow-medium"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <time
                    dateTime={article.date}
                    className="shrink-0 text-sm text-text-muted"
                  >
                    {formatDate(article.date)}
                  </time>
                  <span
                    className={`inline-block w-fit rounded-full px-3 py-0.5 text-xs font-medium text-text-secondary ${categoryColors[article.category] || "bg-warm-gray"}`}
                  >
                    {article.category}
                  </span>
                </div>
                <h2 className="mt-2 font-bold text-text-primary">
                  {article.title}
                </h2>
                <p className="mt-1 text-sm text-text-secondary">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
