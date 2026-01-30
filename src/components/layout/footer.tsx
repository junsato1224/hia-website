import Link from "next/link";
import { Container } from "@/components/shared/container";

const footerLinks = [
  { href: "/about", label: "HIAについて" },
  { href: "/program", label: "プログラム" },
  { href: "/support", label: "支援する" },
  { href: "/news", label: "お知らせ" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/privacy", label: "プライバシーポリシー" },
];

export function Footer() {
  return (
    <footer className="border-t border-soft-beige bg-warm-gray">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Organization info */}
          <div>
            <p className="text-lg font-bold text-text-primary">
              HUMAN INFINITY ACADEMY
            </p>
            <p className="mt-1 text-sm text-text-muted">
              一般社団法人 HUMAN INFINITY ACADEMY
            </p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-text-secondary">
              〒220-0072
              <br />
              神奈川県横浜市西区浅間町1丁目4番3号
              <br />
              ウィザードビル402
              <br />
              代表理事：佐藤 淳
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label="フッターナビゲーション">
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-soft-beige pt-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} 一般社団法人 HUMAN INFINITY ACADEMY. All
          rights reserved.
        </div>
      </Container>
    </footer>
  );
}
