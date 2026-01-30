import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "プログラム",
  description:
    "HUMAN INFINITY ACADEMY の4つの支援領域（教育・心理・生活・未来創造）と、4段階のプロセスをご紹介します。",
};

const programs = [
  {
    icon: "📚",
    title: "教育支援",
    color: "bg-sky-soft/30",
    description:
      "一人ひとりの学習ペースや興味に合わせた、オーダーメイドの学びの場を提供します。学校の勉強だけでなく、プログラミング、アート、音楽、科学実験など、好奇心を広げる多様な学習体験を届けます。",
    faqs: [
      {
        q: "対象年齢は？",
        a: "小学生から高校生までを対象としています。個別の状況に応じてご相談ください。",
      },
      {
        q: "どんな教科に対応していますか？",
        a: "主要5教科のサポートに加え、探究学習やクリエイティブな活動も提供しています。",
      },
      {
        q: "参加費はかかりますか？",
        a: "ご家庭の状況に応じて柔軟に対応しています。お気軽にお問い合わせください。",
      },
    ],
  },
  {
    icon: "💛",
    title: "心理サポート",
    color: "bg-peach/30",
    description:
      "専門のスタッフが一人ひとりに寄り添い、安心して自分を表現できる環境をつくります。カウンセリングだけでなく、アートセラピーや自然体験を通じた心のケアも行います。",
    faqs: [
      {
        q: "どんなスタッフが担当しますか？",
        a: "心理学や教育学の専門知識を持つスタッフが担当します。必要に応じて外部の専門家とも連携します。",
      },
      {
        q: "保護者も相談できますか？",
        a: "はい。保護者の方向けの相談サポートも提供しています。子育ての悩みも一緒に考えます。",
      },
    ],
  },
  {
    icon: "🏠",
    title: "生活サポート",
    color: "bg-mint-soft/30",
    description:
      "安心して過ごせる居場所を提供します。温かい食事、規則正しい生活リズム、清潔な環境など、日々の暮らしの土台を一緒に整えます。365日、いつでも安心して帰ってこられる場所です。",
    faqs: [
      {
        q: "滞在はどのような形ですか？",
        a: "短期から長期まで、お子さまの状況に合わせた柔軟な対応が可能です。詳しくはお問い合わせください。",
      },
      {
        q: "食事は提供されますか？",
        a: "栄養バランスを考えた温かい食事を提供しています。アレルギーなどにも対応します。",
      },
    ],
  },
  {
    icon: "🌱",
    title: "未来創造",
    color: "bg-sky-soft/20",
    description:
      "さまざまな分野で活躍するロールモデルとの出会いを通じて、「憧れ」を「目標」に変えるきっかけをつくります。キャリア体験や社会見学、メンタリングなどを通じて、自分の未来を自分で描く力を育てます。",
    faqs: [
      {
        q: "どんなロールモデルと出会えますか？",
        a: "起業家、研究者、アーティスト、アスリートなど、多様な分野のトップランナーが参加しています。",
      },
      {
        q: "子どもの個性はどうやって見つけますか？",
        a: "多角的なアセスメントと日々の関わりを通じて、お子さまの興味・関心・強みを丁寧に発見していきます。",
      },
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "出会い・つながり",
    description:
      "まずは安心できる関係づくりから。子どもやご家族と丁寧に対話し、今の状況や想いを聴きます。",
    color: "border-sky-soft",
  },
  {
    number: "02",
    title: "Assessment",
    subtitle: "個性の発見",
    description:
      "一人ひとりの得意なこと、好きなこと、必要なサポートを多角的に見つめます。子どもの個性を深く理解するプロセスです。",
    color: "border-mint-soft",
  },
  {
    number: "03",
    title: "Development",
    subtitle: "成長・挑戦",
    description:
      "個性に合わせたプログラムで、学び、体験し、挑戦する。小さな成功体験を積み重ね、自信を育てます。",
    color: "border-peach",
  },
  {
    number: "04",
    title: "Support",
    subtitle: "伴走・自立",
    description:
      "成長を見守りながら、自分の力で歩んでいけるよう長期的に伴走します。必要なときにいつでも頼れる存在であり続けます。",
    color: "border-coral-soft",
  },
];

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        title="プログラム"
        subtitle="子どもたちの可能性を、あらゆる面から支えます"
      />

      {/* 4 Program Areas */}
      <section className="py-20">
        <Container>
          <SectionHeading title="4つの支援領域" />
          <div className="space-y-8">
            {programs.map((program) => (
              <Card
                key={program.title}
                className="border-0 shadow-soft"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${program.color} text-xl`}
                      aria-hidden="true"
                    >
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary">
                        {program.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-text-secondary">
                        {program.description}
                      </p>
                      <Accordion type="single" collapsible className="mt-4">
                        {program.faqs.map((faq, i) => (
                          <AccordionItem
                            key={i}
                            value={`${program.title}-${i}`}
                            className="border-soft-beige"
                          >
                            <AccordionTrigger className="text-sm font-medium text-text-primary hover:no-underline">
                              {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-text-secondary">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4 Steps Process */}
      <section className="bg-warm-gray py-20">
        <Container>
          <SectionHeading
            title="4つのステップ"
            subtitle="出会いから自立まで、子どもたちと共に歩むプロセス"
          />
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`rounded-2xl border-t-4 ${step.color} bg-ivory p-6 shadow-soft`}
              >
                <p className="text-3xl font-bold text-soft-beige">
                  {step.number}
                </p>
                <h3 className="mt-2 text-lg font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted">{step.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="プログラムについて詳しく知りたい方へ"
        description="お子さまの状況に合わせたご提案をいたします。まずはお気軽にご相談ください。"
      />
    </>
  );
}
