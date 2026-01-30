import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-gray py-20 sm:py-28 lg:py-36">
      {/* Decorative background shapes */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-soft/30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-mint-soft/30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 h-32 w-32 rounded-full bg-peach/20"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <h1 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
          すべての子どもに、
          <br />
          無限の可能性を。
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
          一般社団法人 HUMAN INFINITY ACADEMY は、
          <br className="hidden sm:inline" />
          教育・心理・生活・未来創造を統合し、
          <br className="hidden sm:inline" />
          子どもたち一人ひとりの可能性に寄り添い、共に歩みます。
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="rounded-xl px-8 text-base">
            <Link href="/about">活動を知る</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl border-soft-beige px-8 text-base text-text-secondary hover:bg-ivory"
          >
            <Link href="/support">支援する</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
