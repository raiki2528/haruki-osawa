import type { Metadata } from "next";
import { ContentImage } from "@/components/ContentImage";
import { ideas, sources } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ideas",
  description: "大澤陽樹氏が発信する、ジョブマーケット、データ、人的資本への考え。",
};

export default function IdeasPage() {
  return (
    <>
      <section className="page-hero section-shell">
        <p className="eyebrow">Ideas</p>
        <h1>働く人の声を、<br />社会を動かす力に。</h1>
        <p>
          情報の透明性は、選択肢を増やす。
          <br />
          選択肢は、企業と個人の関係を変える。
        </p>
      </section>

      <section className="ideas-long section-shell">
        {ideas.map((idea) => (
          <article key={idea.number} data-reveal>
            <h2>{idea.title}</h2>
            <p>{idea.body}</p>
            <a href={idea.source} target="_blank" rel="noreferrer">
              関連する一次・本人発言を読む ↗
            </a>
          </article>
        ))}
      </section>

      <section className="idea-visual section-shell">
        <figure className="frame-video" data-reveal>
          <ContentImage
            src={images.mediaTalk}
            alt="経営者対談番組での出演シーン"
            fill
            variant="video"
            sizes="(max-width: 860px) 100vw, 52vw"
          />
        </figure>
        <blockquote data-reveal>
          <span>VISION</span>
          「企業と働く人が<br />お互いを選び合う社会」
          <a href={sources.porters} target="_blank" rel="noreferrer">
            PORTERS MAGAZINE インタビュー ↗
          </a>
        </blockquote>
      </section>

      <section className="logic-section section-shell">
        <p className="section-index">The Change Logic</p>
        <h2>透明性から、より良い循環へ。</h2>
        <div className="logic-flow" aria-label="社会変革の循環">
          <div><b>働く人の声</b><p>経験がクチコミとして集まる</p></div>
          <div><b>情報の透明化</b><p>職場の実態を比較できる</p></div>
          <div><b>主体的な選択</b><p>個人と企業が互いに選ぶ</p></div>
          <div><b>誠実な経営</b><p>選ばれる組織へ変わり続ける</p></div>
        </div>
      </section>

      <section className="research-note section-shell">
        <div>
          <p className="section-index">Research Note</p>
          <h2>相関と因果を、混同しない。</h2>
        </div>
        <div>
          <p>
            OpenWorkのデータを用いた研究では、働きがい・働きやすさと、
            数年後の企業財務との相関が示されています。一方で大澤氏自身、
            因果関係までは立証していないと明確に説明しています。
          </p>
          <a href={sources.bizgate} target="_blank" rel="noreferrer">
            日経BizGateの解説を読む ↗
          </a>
        </div>
      </section>
    </>
  );
}
