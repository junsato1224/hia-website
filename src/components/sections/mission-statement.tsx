import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function MissionStatement() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <SectionHeading title="わたしたちの想い" />
        <div className="space-y-6 text-center leading-relaxed text-text-secondary">
          <p>
            どんな環境に生まれても、すべての子どもには無限の可能性があります。
          </p>
          <p>
            HUMAN INFINITY ACADEMY
            は、学びの支援だけでなく、心のケア、安心できる暮らし、
            そして未来を自分で切り拓く力を、一人ひとりに合わせて届けます。
          </p>
          <p>
            「教育」「心理」「生活」「未来創造」の4つの領域を統合し、
            子どもたちが自分らしく成長できる環境をつくります。
          </p>
        </div>
      </Container>
    </section>
  );
}
