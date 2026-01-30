export type NewsCategory = "お知らせ" | "イベント" | "レポート" | "メディア";

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  body: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  category: string;
  message: string;
  privacyAgreed: boolean;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
}
