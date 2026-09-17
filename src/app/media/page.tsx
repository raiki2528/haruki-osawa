import type { Metadata } from "next";
import Image from "next/image";
import { media, sources } from "@/lib/data";

export const metadata: Metadata = {
  title: "Media",
  description: "大澤陽樹氏のメディア出演、掲載、講演、研究活動。",
};

const activity = [
  {
    label: "企業・団体",
    title: "人的資本と、選ばれる組織",
    items: [
      "HR Transformation Summit 2026",
      "日本生産性本部 人事部長クラブ",
      "日本ショッピングセンター協会 全国大会",
      "コクヨ「働くのミライ会議」",
    ],
  },
  {
    label: "大学・教育",
    title: "次世代へ問いを渡す",
    items: [
      "慶應義塾大学 Keio-SPRING 基調講演",
      "東京大学大学院 創域会大会",
      "筑波大学 特別講演",
      "江戸川学園取手高等学校 キャリア教育",
    ],
  },
  {
    label: "学術研究",
    title: "働くデータを研究へ",
    items: [
      "本社移転と従業員満足度（国際会議 2024）",
      "働きがい・働きやすさと企業業績（2021）",
      "都市郊外の空閑地研究（2009）",
    ],
  },
];

export default function MediaPage() {
  return (
    <>
      <section className="page-hero section-shell">
        <p className="eyebrow">Media / Activity</p>
        <h1>データと現場を、<br />社会の議論へ。</h1>
        <p>
          経営、人事、投資、キャリア。
          <br />
          複数の領域をつなぐ発信と対話。
        </p>
      </section>

      <section className="media-section section-shell">
        <div className="section-heading">
          <div>
            <p className="section-index">Selected Media</p>
            <h2>出演・掲載</h2>
          </div>
          <p className="media-count">公式掲載 <strong>191</strong> 件</p>
        </div>
        <div className="featured-media-grid">
          {media.filter((item) => item.image).map((item, index) => (
            <a
              className={index === 0 ? "featured-media featured-media-lead" : "featured-media"}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={`${item.date}-${item.title}-visual`}
              data-reveal
            >
              <Image src={item.image!} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
              <span>{item.outlet}</span>
              <strong>{item.title}</strong>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
        <div className="media-list">
          {media.map((item) => (
            <article key={`${item.date}-${item.title}`} data-reveal>
              <time>{item.date}</time>
              <span>{item.type}</span>
              <div>
                <small>{item.outlet}</small>
                <h3>{item.title}</h3>
              </div>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.title}を読む`}>
                  ↗
                </a>
              ) : (
                <i aria-hidden="true">—</i>
              )}
            </article>
          ))}
        </div>
        <div className="archive-link">
          <p>
            本ページは主要な活動を編集・抜粋しています。全件と最新情報は、
            本人公式サイトのメディア一覧をご確認ください。
          </p>
          <a href={sources.official} target="_blank" rel="noreferrer">
            191件の公式アーカイブを見る ↗
          </a>
        </div>
      </section>

      <section className="activity-section section-shell">
        <p className="section-index">Research / Speaking</p>
        <h2>研究と実践を往復する。</h2>
        <div className="activity-grid">
          {activity.map((group) => (
            <article key={group.label} data-reveal>
              <span>{group.label}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <a className="source-note" href={sources.official} target="_blank" rel="noreferrer">
          活動名・受賞歴の出典：本人公式サイト ↗
        </a>
      </section>
    </>
  );
}
