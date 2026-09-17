import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "大澤陽樹 | Portfolio Concept",
    template: "%s | 大澤陽樹",
  },
  description:
    "オープンワーク株式会社 代表取締役社長・大澤陽樹氏の経歴、思想、著書、メディア活動を紹介する非公式ポートフォリオ。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main">
          本文へ移動
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
