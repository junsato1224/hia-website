"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { NewsCategory } from "@/types";

const categories: NewsCategory[] = ["お知らせ", "イベント", "レポート", "メディア"];

export default function NewNewsPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const form = new FormData(e.currentTarget);
    const article = {
      slug: form.get("slug") as string,
      title: form.get("title") as string,
      date: form.get("date") as string,
      category: form.get("category") as NewsCategory,
      excerpt: form.get("excerpt") as string,
      body: form.get("body") as string,
    };

    try {
      const res = await fetch("/api/admin/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
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

  const today = new Date().toISOString().split("T")[0];

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
        <h2 className="mb-6 text-xl font-bold text-text-primary">新規記事作成</h2>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-ivory p-6 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="title">タイトル</Label>
              <Input id="title" name="title" required />
            </div>
            <div>
              <Label htmlFor="slug">スラッグ (URL)</Label>
              <Input id="slug" name="slug" required pattern="[a-z0-9\-]+" title="半角英数字とハイフンのみ" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="date">日付</Label>
              <Input id="date" name="date" type="date" required defaultValue={today} />
            </div>
            <div>
              <Label htmlFor="category">カテゴリ</Label>
              <select
                id="category"
                name="category"
                required
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
            <Textarea id="excerpt" name="excerpt" rows={2} required />
          </div>

          <div>
            <Label htmlFor="body">本文</Label>
            <Textarea id="body" name="body" rows={10} required />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex justify-end gap-2">
            <Link href="/admin">
              <Button type="button" variant="outline">キャンセル</Button>
            </Link>
            <Button type="submit" disabled={saving}>
              {saving ? "保存中..." : "作成する"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
