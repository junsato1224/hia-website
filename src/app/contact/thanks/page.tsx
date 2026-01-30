import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "送信完了",
};

export default function ThanksPage() {
  return (
    <section className="py-20">
      <Container className="max-w-xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mint-soft/30 text-4xl">
          <span aria-hidden="true">✉️</span>
        </div>
        <h1 className="mt-6 text-2xl font-bold text-text-primary">
          お問い合わせありがとうございます
        </h1>
        <p className="mt-4 leading-relaxed text-text-secondary">
          内容を確認の上、担当者よりご連絡いたします。
          <br />
          しばらくお待ちくださいますようお願いいたします。
        </p>
        <Button asChild className="mt-8 rounded-xl px-8">
          <Link href="/">ホームに戻る</Link>
        </Button>
      </Container>
    </section>
  );
}
