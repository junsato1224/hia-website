"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

const categories = [
  { value: "一般", label: "一般的なお問い合わせ" },
  { value: "寄付", label: "寄付について" },
  { value: "協賛", label: "企業協賛・連携について" },
  { value: "取材", label: "取材について" },
  { value: "その他", label: "その他" },
];

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "一般",
    message: "",
    privacyAgreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("必須項目を入力してください。");
      return;
    }

    if (!form.privacyAgreed) {
      setError("プライバシーポリシーへの同意が必要です。");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("有効なメールアドレスを入力してください。");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      router.push("/contact/thanks");
    } catch {
      setError("送信中にエラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="お問い合わせ"
        subtitle="ご質問・ご相談など、お気軽にお問い合わせください"
      />

      <section className="py-20">
        <Container className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-primary"
              >
                お名前 <span className="text-coral-soft">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-xl border border-soft-beige bg-ivory px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-sky-soft focus:outline-none focus:ring-2 focus:ring-sky-soft/50"
                placeholder="山田 太郎"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary"
              >
                メールアドレス <span className="text-coral-soft">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-xl border border-soft-beige bg-ivory px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-sky-soft focus:outline-none focus:ring-2 focus:ring-sky-soft/50"
                placeholder="example@email.com"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-text-primary"
              >
                お問い合わせ種別
              </label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-soft-beige bg-ivory px-4 py-3 text-sm text-text-primary focus:border-sky-soft focus:outline-none focus:ring-2 focus:ring-sky-soft/50"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-primary"
              >
                メッセージ <span className="text-coral-soft">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="mt-2 block w-full resize-y rounded-xl border border-soft-beige bg-ivory px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-sky-soft focus:outline-none focus:ring-2 focus:ring-sky-soft/50"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacyAgreed"
                name="privacyAgreed"
                checked={form.privacyAgreed}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 rounded border-soft-beige text-coral-soft accent-coral-soft focus:ring-sky-soft"
              />
              <label
                htmlFor="privacyAgreed"
                className="text-sm text-text-secondary"
              >
                <Link
                  href="/privacy"
                  className="text-coral-soft underline hover:text-text-primary"
                  target="_blank"
                >
                  プライバシーポリシー
                </Link>
                に同意する <span className="text-coral-soft">*</span>
              </label>
            </div>

            {/* Error */}
            {error && (
              <div
                className="rounded-xl bg-red-50 p-4 text-sm text-red-600"
                role="alert"
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-xl text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </Button>
          </form>
        </Container>
      </section>
    </>
  );
}
