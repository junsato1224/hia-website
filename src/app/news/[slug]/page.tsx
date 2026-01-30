import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { newsArticles, getNewsArticle } from "@/data/news";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return { title: "記事が見つかりません" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

const categoryColors: Record<string, string> = {
  "お知らせ": "bg-sky-soft/30",
  "イベント": "bg-peach/30",
  "レポート": "bg-mint-soft/30",
  "メディア": "bg-sky-soft/20",
};

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHeader title={article.title} />

      <section className="py-20">
        <Container className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <time
              dateTime={article.date}
              className="text-sm text-text-muted"
            >
              {formatDate(article.date)}
            </time>
            <span
              className={`rounded-full px-3 py-0.5 text-xs font-medium text-text-secondary ${categoryColors[article.category] || "bg-warm-gray"}`}
            >
              {article.category}
            </span>
          </div>

          <div className="space-y-4 leading-relaxed text-text-secondary">
            {article.body.split("\n").map((paragraph, i) =>
              paragraph.trim() ? (
                <p key={i}>{paragraph}</p>
              ) : null
            )}
          </div>

          <div className="mt-12">
            <Link
              href="/news"
              className="inline-block text-sm font-medium text-coral-soft transition-colors hover:text-text-primary"
            >
              ← 一覧に戻る
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
