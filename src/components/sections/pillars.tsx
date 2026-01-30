import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: "📚",
    title: "教育支援",
    description:
      "一人ひとりのペースに合わせた学びの場を提供。学校の勉強だけでなく、好奇心を広げる多様な学習体験を届けます。",
    color: "bg-sky-soft/30",
  },
  {
    icon: "💛",
    title: "心理サポート",
    description:
      "専門のスタッフが寄り添い、安心して自分を表現できる環境をつくります。子どもの心の声に耳を傾けます。",
    color: "bg-peach/30",
  },
  {
    icon: "🏠",
    title: "生活サポート",
    description:
      "安心して過ごせる居場所を提供。食事や生活リズムなど、日々の暮らしの土台を一緒に整えます。",
    color: "bg-mint-soft/30",
  },
  {
    icon: "🌱",
    title: "未来創造",
    description:
      "さまざまな分野のロールモデルとの出会いを通じて、「憧れ」を「目標」に変えるきっかけをつくります。",
    color: "bg-sky-soft/20",
  },
];

export function Pillars() {
  return (
    <section className="bg-warm-gray py-20">
      <Container>
        <SectionHeading
          title="4つの柱"
          subtitle="子どもたちの成長を、あらゆる面から支えます"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="border-0 shadow-soft transition-shadow hover:shadow-medium"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.color} text-2xl`}
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
