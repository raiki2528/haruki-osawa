import Link from "next/link";
import { sources } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="eyebrow light">Haruki Ohsawa</p>
          <h2>意味のあふれる社会に。</h2>
        </div>
        <div className="footer-links">
          <Link href="/profile">Profile</Link>
          <Link href="/ideas">Ideas</Link>
          <Link href="/media">Media</Link>
          <a href={sources.official} target="_blank" rel="noreferrer">
            公式サイト ↗
          </a>
        </div>
      </div>
      <div className="footer-note">
        <p>公開情報をもとに制作した非公式コンセプトサイトです。</p>
        <p>© 2026 Portfolio Concept</p>
      </div>
    </footer>
  );
}
