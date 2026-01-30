import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared/container";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "HUMAN INFINITY ACADEMY のプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="プライバシーポリシー" />

      <section className="py-20">
        <Container className="max-w-3xl">
          <div className="prose-sm space-y-8 leading-relaxed text-text-secondary">
            <div>
              <h2 className="text-lg font-bold text-text-primary">
                個人情報の取り扱いについて
              </h2>
              <p className="mt-3">
                一般社団法人 HUMAN INFINITY ACADEMY（以下「当法人」）は、
                個人情報の重要性を認識し、以下の方針に基づき適切な管理・保護に努めます。
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text-primary">
                1. 収集する情報
              </h2>
              <p className="mt-3">
                当法人は、お問い合わせフォームを通じて以下の情報を収集することがあります。
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>お名前</li>
                <li>メールアドレス</li>
                <li>お問い合わせの種別および内容</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text-primary">
                2. 利用目的
              </h2>
              <p className="mt-3">収集した個人情報は、以下の目的で利用します。</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>お問い合わせへの回答およびご連絡</li>
                <li>当法人の活動に関する情報のご案内</li>
                <li>サービスの改善および統計的な分析（個人を特定しない形で）</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text-primary">
                3. 第三者への提供
              </h2>
              <p className="mt-3">
                当法人は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text-primary">
                4. 安全管理
              </h2>
              <p className="mt-3">
                当法人は、個人情報の漏えい、滅失またはき損の防止のため、
                適切な安全管理措置を講じます。
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-text-primary">
                5. お問い合わせ窓口
              </h2>
              <p className="mt-3">
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
              </p>
              <p className="mt-2">
                一般社団法人 HUMAN INFINITY ACADEMY
                <br />
                〒220-0072 神奈川県横浜市西区浅間町1丁目4番3号 ウィザードビル402
              </p>
            </div>

            <p className="text-sm text-text-muted">
              制定日：2025年3月1日
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
