# HUMAN INFINITY ACADEMY 公式Webサイト

一般社団法人 HUMAN INFINITY ACADEMY（HIA）の公式Webサイトです。

## 技術スタック

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Button / Card / Accordion)
- Google Fonts (Zen Maru Gothic / Nunito)

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:3000` でサイトが表示されます。

## デプロイ (Vercel)

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com) でリポジトリをインポート
3. 設定はデフォルトのままデプロイ（自動検出されます）

## 差し替えポイント

### 画像
- `public/images/ogp.png` — OGP画像（1200x630px推奨）
- `public/images/logo.svg` — サイトロゴ（ヘッダーで使用する場合）

### お問い合わせフォーム
- `src/app/api/contact/route.ts` — 現在はコンソールログ出力のみ
  - メール送信サービス（SendGrid、Resend等）に差し替え可能
  - 環境変数でAPI keyを管理する想定

### ニュース記事
- `src/data/news.ts` — 記事データを追加・編集
  - CMSに移行する場合はこのファイルのフェッチ部分を差し替え

### 寄付・決済
- `src/app/support/page.tsx` — 現在は「準備中」表記
  - Stripe等の決済サービス導入時に差し替え

### メタデータ
- `src/app/layout.tsx` — サイト全体のtitle、description、OGP
- 各ページの `metadata` export — ページ固有のSEO情報

### フォント
- `src/lib/fonts.ts` — Google Fonts設定（Zen Maru Gothic / Nunito）

### カラーパレット
- `src/app/globals.css` — `:root` セクションでCSS変数を管理

## ページ構成

| パス | ページ |
|------|--------|
| `/` | トップページ |
| `/about` | HIAについて |
| `/program` | プログラム |
| `/support` | 支援する |
| `/news` | お知らせ一覧 |
| `/news/[slug]` | お知らせ詳細 |
| `/contact` | お問い合わせ |
| `/contact/thanks` | 送信完了 |
| `/privacy` | プライバシーポリシー |
