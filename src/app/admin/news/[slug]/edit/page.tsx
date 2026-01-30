"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { NewsArticle, NewsCategory } from "@/types";

const categories: NewsCategory[] = ["お知らせ", "イベント", "レポート", "メディア"];

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/admin/news/${params.slug}`);
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (!res.ok) {
        router.push("/admin");
        return;
      }
      const data = await res.json();
      setArticle(data);
      setLoading(false);
    }
    load();
  }, [params.slug, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const form = new FormData(e.currentTarget);
    const updated = {
      slug: form.get("slug") as string,
      title: form.get("title") as string,
      date: form.get("date") as string,
      category: form.get("category") as NewsCategory,
      excerpt: form.get("excerpt") as string,
      body: form.get("body") as string,
    };

    try {
      const res = await fetch(`/api/admin/news/${params.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "保存に失敗しました");
        return;
      }

      router.push("/admin");
    } catch {
      setError("エラーが発生しました");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-text-muted">読み込み中...</p>
      </div>
    );
  }

  if (!article) return null;

  return (
    <>
      <header className="border-b border-warm-gray bg-ivory px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h1 className="text-lg font-bold text-text-primary">
            HIA 管理画面
          </h1>
          <Link href="/admin">
            <Button variant="ghost" size="sm">← 一覧に戻る</Button>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-8">
        <h2 className="mb-6 text-xl font-bold text-text-primary">記事を編集</h2>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-ivory p-6 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="title">タイトル</Label>
              <Input id="title" name="title" required defaultValue={article.title} />
            </div>
            <div>
              <Label htmlFor="slug">スラッグ (URL)</Label>
              <Input id="slug" name="slug" required pattern="[a-z0-9\-]+" title="半角英数字とハイフンのみ" defaultValue={article.slug} />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="date">日付</Label>
              <Input id="date" name="date" type="date" required defaultValue={article.date} />
            </div>
            <div>
              <Label htmlFor="category">カテゴリ</Label>
              <select
                id="category"
                name="category"
                required
                defaultValue={article.category}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="excerpt">概要</Label>
            <Textarea id="excerpt" name="excerpt" rows={2} required defaultValue={article.excerpt} />
          </div>

          <div>
            <Label htmlFor="body">本文</Label>
            <Textarea id="body" name="body" rows={10} required defaultValue={article.body} />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex justify-end gap-2">
            <Link href="/admin">
              <Button type="button" variant="outline">キャンセル</Button>
            </Link>
            <Button type="submit" disabled={saving}>
              {saving ? "保存中..." : "更新する"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
