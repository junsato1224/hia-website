import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

interface CtaBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CtaBanner({
  title = "お気軽にお問い合わせください",
  description = "活動について、ご支援について、取材のご依頼など、どんなことでもお気軽にご連絡ください。",
  buttonText = "お問い合わせ",
  buttonHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-2xl bg-peach/20 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
          <p className="mx-auto mt-4 max-w-md text-text-secondary">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-xl px-8 text-base"
          >
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
