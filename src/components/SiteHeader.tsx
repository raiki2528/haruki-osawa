import Link from "next/link";

const nav = [
  { href: "/profile", label: "Profile" },
  { href: "/ideas", label: "Ideas" },
  { href: "/media", label: "Media" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="大澤陽樹 ポートフォリオ ホーム">
          <span className="brand-mark">OH</span>
          <span>
            <b>HARUKI OHSAWA</b>
            <small>PORTFOLIO CONCEPT</small>
          </span>
        </Link>
        <nav aria-label="メインナビゲーション">
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
