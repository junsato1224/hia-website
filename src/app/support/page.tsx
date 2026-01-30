import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "支援する",
  description:
    "HUMAN INFINITY ACADEMY への寄付・ボランティア・企業パートナーシップなど、さまざまな支援方法をご紹介します。",
};

const supportMethods = [
  {
    icon: "🤝",
    title: "寄付で支える",
    description:
      "ご寄付は、子どもたちの学び、暮らし、心のケア、そして未来づくりに直接使われます。一回きりのご寄付も、毎月の継続的なご支援も、どちらも大きな力になります。",
    color: "bg-peach/30",
  },
  {
    icon: "🙋",
    title: "ボランティア・メンターとして参加",
    description:
      "子どもたちの学びや体験活動を一緒に支えてくださる方を募集しています。特別な資格は必要ありません。週末だけ、オンラインだけの参加も歓迎します。",
    color: "bg-mint-soft/30",
  },
  {
    icon: "🏢",
    title: "企業パートナーシップ",
    description:
      "CSR/ESG活動の一環として、また共同研究や人材育成プログラムの連携先として、企業の皆さまとの協力関係を歓迎します。",
    color: "bg-sky-soft/30",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        title="支援する"
        subtitle="子どもたちの未来を、一緒に支えませんか"
      />

      {/* Support Methods */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="ご支援の方法"
            subtitle="さまざまな形で、子どもたちの力になれます"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {supportMethods.map((method) => (
              <Card
                key={method.title}
                className="border-0 shadow-soft transition-shadow hover:shadow-medium"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${method.color} text-2xl`}
                    aria-hidden="true"
                  >
                    {method.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-text-primary">
                    {method.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Donation Details */}
      <section className="bg-warm-gray py-20">
        <Container className="max-w-3xl">
          <SectionHeading title="ご寄付について" />
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-text-primary">
                    単発のご寄付
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    お好きな金額で、一度きりのご寄付をいただけます。
                    オンライン決済の仕組みは現在準備中です。
                    お振込みでのご寄付をご希望の方は、お問い合わせフォームよりご連絡ください。
                  </p>
                </div>
                <div className="border-t border-soft-beige pt-6">
                  <h3 className="text-lg font-bold text-text-primary">
                    マンスリーサポーター
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    毎月定額でご支援いただく「マンスリーサポーター」制度を準備しています。
                    継続的なご支援は、子どもたちへの安定した支援につながります。
                    開始時期が決まりましたら、お知らせにてご案内いたします。
                  </p>
                </div>
                <div className="rounded-xl bg-warm-gray p-4 text-center text-sm text-text-muted">
                  オンライン決済は現在準備中です。
                  <br />
                  ご寄付のご相談は、お問い合わせフォームよりお願いいたします。
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Volunteer / Partner CTA */}
      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading title="参加する・連携する" />
          <div className="space-y-6">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg font-bold text-text-primary">
                  ボランティア・メンター募集
                </h3>
                <p className="mt-2 leading-relaxed text-text-secondary">
                  子どもたちと一緒に過ごし、寄り添い、応援してくださる方を歓迎します。
                  活動内容や参加頻度は柔軟に相談できます。
                </p>
                <Button asChild className="mt-4 rounded-xl">
                  <Link href="/contact">応募・相談する</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg font-bold text-text-primary">
                  企業・団体の皆さまへ
                </h3>
                <p className="mt-2 leading-relaxed text-text-secondary">
                  CSR/ESG活動、共同研究、プロボノ、物資の提供など、
                  さまざまな形での連携をお待ちしています。
                </p>
                <Button asChild className="mt-4 rounded-xl">
                  <Link href="/contact">お問い合わせ</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="まずはお気軽にご連絡ください"
        description="ご支援の方法について、ご質問やご相談がありましたら、いつでもお問い合わせください。"
      />
    </>
  );
}
