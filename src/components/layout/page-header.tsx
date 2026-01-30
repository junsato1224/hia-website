import { Container } from "@/components/shared/container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-warm-gray py-12 sm:py-16">
      <Container>
        <h1 className="text-center text-3xl font-bold text-text-primary sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-center text-text-secondary">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
