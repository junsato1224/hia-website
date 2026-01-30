import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 text-center", className)}>
      <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-peach" />
      {subtitle && (
        <p className="mt-4 text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
