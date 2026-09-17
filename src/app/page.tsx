import { ArrowLink } from "@/components/ArrowLink";
import { ContentImage } from "@/components/ContentImage";
import { ideas, sources, timeline } from "@/lib/data";

const mosaicImages = [
  ["media-consulting.jpg", "PIVOT CAREER：コンサル業界地図"],
  ["media-semiconductor.jpg", "PIVOT CAREER：半導体産業地図"],
  ["media-ma.jpg", "バトンズ：M&A後のリアル"],
  ["media-cambria.jpg", "カンブリア宮殿：アイデアの扉"],
] as const;

export default function Home() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Haruki Ohsawa · Executive Portfolio</p>
          <h1>
            声をひらき、
            <br />
            働くを変える。
          </h1>
          <p className="hero-lead">
            研究者を志した青年は、人と組織を動かす経営者へ。
            <br />
            大澤陽樹が挑むのは、企業と個人が対等に選び合う社会です。
          </p>
          <div className="hero-actions">
            <ArrowLink href="/profile">軌跡をたどる</ArrowLink>
            <ArrowLink href={sources.official} external>
              公式プロフィール
            </ArrowLink>
          </div>
        </div>
        <figure className="hero-portrait" data-reveal>
          <ContentImage
            src="/images/photo-01.jpg"
            alt="スーツ姿で正面を見つめる大澤陽樹氏"
            fill
            priority
            sizes="(max-width: 860px) 90vw, 42vw"
          />
          <span className="portrait-line">MEANING</span>
          <div className="portrait-caption">
            <span>大澤 陽樹 / Haruki Ohsawa</span>
            <span>OpenWork Inc. President &amp; CEO</span>
          </div>
        </figure>
      </section>

      <section className="statement section-shell">
        <p className="section-index">01 / Mission</p>
        <div data-reveal>
          <p className="large-statement">
            「社会を変える
            <br />
            <em>手触り感</em>を得たい」
          </p>
          <p className="statement-body">
            技術や戦略が正しくても、人が動かなければ社会は変わらない。
            その原体験は、組織人事、新規事業、そしてジョブマーケットの透明化へとつながっていきました。
          </p>
          <a className="source-note" href={sources.interview} target="_blank" rel="noreferrer">
            出典：社長名鑑 インタビュー（2023）↗
          </a>
        </div>
      </section>

      <section className="visual-story section-shell">
        <figure className="visual-story-main" data-reveal>
          <ContentImage
            src="/images/photo-02.jpg"
            alt="対話しながら手振りを交えて話す大澤陽樹氏"
            fill
            sizes="(max-width: 860px) 100vw, 58vw"
          />
        </figure>
        <div className="visual-story-copy" data-reveal>
          <p className="section-index">Leadership in action</p>
          <h2>データだけでは、<br />人は動かない。</h2>
          <p>
            現場の声を聞き、問いを立て、組織を巻き込む。
            研究からコンサルティング、事業づくりへと進んだ経験が、
            データと人間を同時に見る経営スタイルを形づくっています。
          </p>
          <ArrowLink href="/profile">人物像を深く知る</ArrowLink>
        </div>
      </section>

      <section className="metrics">
        <div className="section-shell metrics-grid">
          <div>
            <strong>2,000<small>万件超</small></strong>
            <span>社員クチコミ・評価スコア</span>
          </div>
          <div>
            <strong>788<small>万人</small></strong>
            <span>OpenWorkユーザー数</span>
          </div>
          <div>
            <strong>2022</strong>
            <span>東証グロース市場 上場</span>
          </div>
        </div>
        <p className="metric-source">
          数値はOpenWork公式発表、2026年2月末時点。会社全体の実績です。
        </p>
      </section>

      <section className="section-shell home-ideas">
        <div className="section-heading">
          <div>
            <p className="section-index">02 / Ideas</p>
            <h2>働くを変える、3つの視点。</h2>
          </div>
          <ArrowLink href="/ideas">思想を読む</ArrowLink>
        </div>
        <div className="idea-grid">
          {ideas.map((idea) => (
            <article className="idea-card" key={idea.number} data-reveal>
              <span>{idea.number}</span>
              <h3>{idea.title}</h3>
              <p>{idea.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="media-mosaic">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="section-index">On screen</p>
              <h2>働くを、社会の話題に。</h2>
            </div>
            <ArrowLink href="/media">メディア活動</ArrowLink>
          </div>
          <div className="mosaic-grid">
            {mosaicImages.map(([image, alt], index) => (
              <figure key={image} className={`mosaic-item mosaic-${index + 1}`} data-reveal>
                <ContentImage
                  src={`/images/${image}`}
                  alt={alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 34vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="journey section-shell">
        <div className="section-heading">
          <div>
            <p className="section-index">03 / Journey</p>
            <h2>研究から、経営へ。</h2>
          </div>
          <ArrowLink href="/profile">全ストーリー</ArrowLink>
        </div>
        <div className="journey-list">
          {timeline.slice(0, 6).map((item) => (
            <article key={item.year} data-reveal>
              <time>{item.year}</time>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel section-shell">
        <p className="eyebrow light">Personal Mission</p>
        <h2>意味のあふれる社会に。</h2>
        <p>
          一人ひとりが自分の意思でキャリアを選び、
          <br />
          働きがいのある場所で力を発揮できる市場へ。
        </p>
        <ArrowLink href="/media">発信・活動を見る</ArrowLink>
      </section>
    </>
  );
}
