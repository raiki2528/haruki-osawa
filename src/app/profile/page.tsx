import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { sources, timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Profile / Story",
  description: "大澤陽樹氏のプロフィールと、研究から経営へ至るキャリアの軌跡。",
};

export default function ProfilePage() {
  return (
    <>
      <section className="page-hero section-shell">
        <p className="eyebrow">Profile / Story</p>
        <h1>社会を変える、<br />手触りを求めて。</h1>
        <p>
          生物学、都市計画、組織人事、新規事業、経営。
          <br />
          一見異なる領域を貫くのは「実行されてこそ、社会は変わる」という信念です。
        </p>
      </section>

      <section className="profile-intro section-shell">
        <div className="profile-monogram" aria-hidden="true">
          <span>1985</span>
          <b>大澤<br />陽樹</b>
          <small>Haruki Ohsawa</small>
        </div>
        <div className="profile-copy">
          <p className="section-index">Biography</p>
          <h2>オープンワーク株式会社<br />代表取締役社長</h2>
          <p>
            1985年2月、福島県いわき市生まれ。兵庫県西宮市、千葉県松戸市で育つ。
            筑波大学生物学類、The University of Manchesterを経て、
            東京大学大学院新領域創成科学研究科修士課程を修了。
          </p>
          <p>
            2009年にリンクアンドモチベーションへ入社。組織人事コンサルティング、
            新規事業、経営管理、CVCを経験し、2018年からヴォーカーズ
            （現オープンワーク）へ兼務出向。2019年に転職し、2020年4月から現職。
            2022年12月、同社の東証グロース市場上場を迎えた。
          </p>
          <ArrowLink href={sources.official} external>
            公式プロフィール・プレスキット
          </ArrowLink>
        </div>
      </section>

      <section className="story-section section-shell">
        <div className="section-heading">
          <div>
            <p className="section-index">Career Timeline</p>
            <h2>問いが、次の仕事を導いた。</h2>
          </div>
        </div>
        <div className="full-timeline">
          {timeline.map((item) => (
            <article key={item.year}>
              <time>{item.year}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                {item.source && (
                  <a href={item.source} target="_blank" rel="noreferrer">
                    出典を確認 ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <div className="section-shell">
          <blockquote>
            「どんなに優れた戦略を描いても、
            <br />
            実行されなければ意味がない」
          </blockquote>
          <a href={sources.interview} target="_blank" rel="noreferrer">
            社長名鑑 インタビュー、2023年12月時点 ↗
          </a>
        </div>
      </section>
    </>
  );
}
