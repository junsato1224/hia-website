import type { Metadata } from "next";
import { zenMaru, nunito } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hia.jp"),
  title: {
    default: "HUMAN INFINITY ACADEMY | すべての子どもに、無限の可能性を",
    template: "%s | HUMAN INFINITY ACADEMY",
  },
  description:
    "一般社団法人 HUMAN INFINITY ACADEMY（HIA）は、教育・心理・生活・未来創造を統合し、すべての子どもの可能性に寄り添い、共に歩む団体です。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "HUMAN INFINITY ACADEMY",
    images: [{ url: "/images/ogp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaru.variable} ${nunito.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cream focus:px-4 focus:py-2 focus:text-text-primary focus:shadow-medium"
        >
          メインコンテンツへスキップ
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
