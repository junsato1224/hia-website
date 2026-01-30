import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "HIAについて",
  description:
    "HUMAN INFINITY ACADEMY のビジョン・ミッション、コアバリュー、代表メッセージ、団体概要をご紹介します。",
};

const coreValues = [
  {
    icon: "🛡️",
    title: "安全",
    description: "すべての子どもが安心して過ごせる環境を最優先します。",
    color: "bg-sky-soft/30",
  },
  {
    icon: "✨",
    title: "尊厳",
    description: "一人ひとりの存在を大切にし、尊重します。",
    color: "bg-peach/30",
  },
  {
    icon: "🚀",
    title: "挑戦",
    description: "失敗を恐れず、新しいことに挑戦する勇気を応援します。",
    color: "bg-mint-soft/30",
  },
  {
    icon: "🌈",
    title: "多様性",
    description: "違いを認め合い、それぞれの個性が輝く場をつくります。",
    color: "bg-sky-soft/20",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="HIAについて"
        subtitle="わたしたちが大切にしていること"
      />

      {/* Vision / Mission */}
      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading title="ビジョン・ミッション" />
          <div className="rounded-2xl bg-warm-gray p-8 text-center sm:p-12">
            <p className="text-xl font-bold leading-relaxed text-text-primary sm:text-2xl">
              すべての子どもが、自分の可能性を信じ、
              <br className="hidden sm:inline" />
              自分らしい未来を歩める社会をつくる。
            </p>
          </div>
          <div className="mt-8 space-y-4 text-center leading-relaxed text-text-secondary">
            <p>
              わたしたちは、教育・心理・生活・未来創造の4つの領域を統合し、
              子どもたち一人ひとりの可能性に寄り添い、共に歩みます。
            </p>
            <p>
              どんな環境に生まれても、すべての子どもには無限の可能性がある。
              その信念のもと、子どもたちが安心して成長できる「第2のホーム」を提供し、
              一人ひとりの個性を発見し、伸ばしていく伴走型の支援を行います。
            </p>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="bg-warm-gray py-20">
        <Container>
          <SectionHeading
            title="コアバリュー"
            subtitle="すべての活動の根底にある4つの価値観"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <Card
                key={value.title}
                className="border-0 shadow-soft"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${value.color} text-2xl`}
                    aria-hidden="true"
                  >
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Representative Message */}
      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading title="代表メッセージ" />
          <div className="rounded-2xl bg-ivory p-8 shadow-soft sm:p-12">
            <div className="space-y-4 leading-relaxed text-text-secondary">
              <p>
                はじめまして。HUMAN INFINITY ACADEMY 代表理事の佐藤 淳です。
              </p>
              <p>
                わたしたちの活動は、ひとつの想いから始まりました。
                「どんな環境に生まれた子どもにも、無限の可能性がある」という想いです。
              </p>
              <p>
                子どもたちが安心して過ごせる場所、自分の個性を発見できる機会、
                そして「なりたい自分」に向かって挑戦できる環境。
                これらを一体的に届けることで、子どもたちの人生が大きく変わると信じています。
              </p>
              <p>
                一人ではできないことも、仲間と一緒なら実現できます。
                ぜひ、わたしたちと一緒に、子どもたちの未来を支える仲間になってください。
              </p>
            </div>
            <div className="mt-6 text-right">
              <p className="text-sm text-text-muted">代表理事</p>
              <p className="text-lg font-bold text-text-primary">佐藤 淳</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Organization Info */}
      <section className="bg-warm-gray py-20">
        <Container className="max-w-3xl">
          <SectionHeading title="団体概要" />
          <div className="overflow-hidden rounded-2xl bg-ivory shadow-soft">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["名称", "一般社団法人 HUMAN INFINITY ACADEMY"],
                  [
                    "所在地",
                    "〒220-0072 神奈川県横浜市西区浅間町1丁目4番3号 ウィザードビル402",
                  ],
                  ["代表理事", "佐藤 淳"],
                  [
                    "事業内容",
                    "子どもの教育支援、心理サポート、生活支援、未来創造プログラムの運営",
                  ],
                  ["公式サイト", "https://www.hia.jp"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-soft-beige last:border-0">
                    <th className="whitespace-nowrap bg-warm-gray/50 px-6 py-4 text-left font-medium text-text-primary">
                      {label}
                    </th>
                    <td className="px-6 py-4 text-text-secondary">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
