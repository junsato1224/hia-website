"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { NewsArticle } from "@/types";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

export default function AdminPage() {
  const router = useRouter();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteSlug, setDeleteSlug] = useState<string | null>(null);

  async function fetchArticles() {
    const res = await fetch(`/api/admin/news?t=${Date.now()}`);
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setArticles(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function handleDelete(slug: string) {
    const res = await fetch(`/api/admin/news/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setDeleteSlug(null);
      fetchArticles();
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-text-muted">読み込み中...</p>
      </div>
    );
  }

  return (
    <>
      <header className="border-b border-warm-gray bg-ivory px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h1 className="text-lg font-bold text-text-primary">
            HIA 管理画面
          </h1>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            ログアウト
          </Button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-text-primary">ニュース一覧</h2>
          <Link href="/admin/news/new">
            <Button size="sm">新規作成</Button>
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl bg-ivory shadow-soft">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-warm-gray bg-cream/50">
              <tr>
                <th className="px-4 py-3 font-medium text-text-secondary">日付</th>
                <th className="px-4 py-3 font-medium text-text-secondary">カテゴリ</th>
                <th className="px-4 py-3 font-medium text-text-secondary">タイトル</th>
                <th className="px-4 py-3 text-right font-medium text-text-secondary">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-warm-gray/50">
              {articles
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((article) => (
                <tr key={article.slug}>
                  <td className="whitespace-nowrap px-4 py-3 text-text-muted">
                    {formatDate(article.date)}
                  </td>
                  <td className="px-4 py-3 text-text-secondary">
                    {article.category}
                  </td>
                  <td className="px-4 py-3 font-medium text-text-primary">
                    {article.title}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/news/${article.slug}/edit`}>
                        <Button variant="outline" size="xs">
                          編集
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        size="xs"
                        onClick={() => setDeleteSlug(article.slug)}
                      >
                        削除
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {deleteSlug && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm rounded-xl bg-ivory p-6 shadow-medium">
            <h3 className="mb-2 text-lg font-bold text-text-primary">
              記事を削除しますか？
            </h3>
            <p className="mb-6 text-sm text-text-secondary">
              この操作は取り消せません。
            </p>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDeleteSlug(null)}
              >
                キャンセル
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(deleteSlug)}
              >
                削除する
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
