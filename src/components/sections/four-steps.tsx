import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "出会い・つながり",
    description:
      "まずは安心できる関係づくりから。子どもやご家族と丁寧に対話し、今の状況や想いを聴きます。",
    color: "text-sky-soft",
    bgColor: "bg-sky-soft/20",
  },
  {
    number: "02",
    title: "Assessment",
    subtitle: "個性の発見",
    description:
      "一人ひとりの得意なこと、好きなこと、必要なサポートを多角的に見つめます。子どもの個性を深く理解するプロセスです。",
    color: "text-mint-soft",
    bgColor: "bg-mint-soft/20",
  },
  {
    number: "03",
    title: "Development",
    subtitle: "成長・挑戦",
    description:
      "個性に合わせたプログラムで、学び、体験し、挑戦する。小さな成功体験を積み重ね、自信を育てます。",
    color: "text-peach",
    bgColor: "bg-peach/20",
  },
  {
    number: "04",
    title: "Support",
    subtitle: "伴走・自立",
    description:
      "成長を見守りながら、自分の力で歩んでいけるよう長期的に伴走します。必要なときにいつでも頼れる存在であり続けます。",
    color: "text-coral-soft",
    bgColor: "bg-coral-soft/20",
  },
];

export function FourSteps() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="4つのステップ"
          subtitle="出会いから自立まで、子どもたちと共に歩むプロセス"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="border-0 shadow-soft transition-shadow hover:shadow-medium"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${step.bgColor} text-sm font-bold ${step.color}`}
                  >
                    {step.number}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-text-primary">
                      {step.title}
                    </p>
                    <p className="text-xs text-text-muted">{step.subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
