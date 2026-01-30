import type { NewsArticle } from "@/types";

export const newsArticles: NewsArticle[] = [
  {
    slug: "spring-program-2025",
    title: "2025年度 春の体験プログラム参加者募集のお知らせ",
    date: "2025-04-01",
    category: "イベント",
    excerpt:
      "今年も春の体験プログラムを開催します。自然の中で新しい発見をしませんか。",
    body: `HUMAN INFINITY ACADEMY では、2025年度の春の体験プログラムの参加者を募集しています。

自然豊かなフィールドで、子どもたちが自分のペースで学び、発見し、成長できるプログラムです。

専門のメンターが一人ひとりに寄り添い、安心して挑戦できる環境をつくります。

詳細・お申込みについては、お問い合わせフォームよりご連絡ください。`,
  },
  {
    slug: "website-launch",
    title: "公式ウェブサイトを公開しました",
    date: "2025-03-15",
    category: "お知らせ",
    excerpt:
      "HUMAN INFINITY ACADEMY の公式ウェブサイトを公開しました。活動内容や支援方法をご覧いただけます。",
    body: `このたび、一般社団法人 HUMAN INFINITY ACADEMY の公式ウェブサイトを公開いたしました。

当サイトでは、私たちの理念や活動内容、プログラムの詳細、ご支援の方法などをご紹介しています。

今後も活動の様子やお知らせを随時更新してまいります。どうぞよろしくお願いいたします。`,
  },
  {
    slug: "mentor-recruitment",
    title: "ボランティアメンター募集を開始します",
    date: "2025-03-01",
    category: "お知らせ",
    excerpt:
      "子どもたちの学びと成長を一緒に支えてくださるメンターを募集しています。",
    body: `HUMAN INFINITY ACADEMY では、子どもたちの成長を支えるボランティアメンターを募集しています。

特別な資格は必要ありません。子どもたちと一緒に過ごし、寄り添い、応援してくださる方を歓迎します。

週末のプログラムへの参加や、オンラインでのサポートなど、ご自身のペースで活動いただけます。

ご関心のある方は、お問い合わせフォームより「ボランティア」を選択のうえ、ご連絡ください。`,
  },
  {
    slug: "partnership-with-university",
    title: "○○大学との連携プログラムを開始",
    date: "2025-02-15",
    category: "レポート",
    excerpt:
      "大学との連携により、子どもたちがさまざまな分野の専門家と出会える機会を拡大します。",
    body: `このたび、○○大学と連携し、子どもたちが多様な学問分野に触れられる特別プログラムを開始いたします。

大学の研究者や学生と交流することで、子どもたちの好奇心を刺激し、将来の選択肢を広げることを目指しています。

第一弾として、科学実験ワークショップを開催予定です。詳細は決まり次第お知らせいたします。`,
  },
  {
    slug: "media-coverage",
    title: "○○新聞に活動が紹介されました",
    date: "2025-01-20",
    category: "メディア",
    excerpt:
      "HUMAN INFINITY ACADEMY の取り組みが○○新聞に掲載されました。",
    body: `2025年1月20日付の○○新聞にて、HUMAN INFINITY ACADEMY の活動が紹介されました。

記事では、子どもたちの個性を大切にした教育支援や、安心できる居場所づくりの取り組みについてご紹介いただきました。

今後も、私たちの活動をより多くの方に知っていただけるよう、情報発信を続けてまいります。`,
  },
];

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function getLatestNews(count: number): NewsArticle[] {
  return [...newsArticles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}
