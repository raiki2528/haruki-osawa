import type { Metadata } from "next";
import Image from "next/image";
import { books, sources } from "@/lib/data";

export const metadata: Metadata = {
  title: "Books",
  description: "大澤陽樹氏の著書と、各書籍を貫くテーマ。",
};

export default function BooksPage() {
  return (
    <>
      <section className="page-hero section-shell">
        <p className="eyebrow">Books</p>
        <h1>データから、<br />働く未来を読む。</h1>
        <p>
          社員クチコミ、企業価値、キャリア。
          <br />
          蓄積された声を、社会が使える知見へ。
        </p>
      </section>

      <section className="book-list section-shell">
        {books.map((book, index) => (
          <article key={book.title} data-reveal>
            <div className={`book-cover cover-${index + 1}`} aria-hidden="true">
              <small>HARUKI<br />OHSAWA</small>
              <strong>{book.title}</strong>
              <span>{book.year}</span>
            </div>
            <div className="book-info">
              <p className="section-index">{book.year} / {book.publisher}</p>
              <h2>{book.title}</h2>
              <p>{book.theme}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="book-feature section-shell">
        <figure data-reveal>
          <Image
            src="/images/media-book.jpg"
            alt="著書『1300万件のクチコミからわかった超優良企業』を扱った動画"
            fill
            sizes="(max-width: 860px) 100vw, 55vw"
          />
        </figure>
        <div data-reveal>
          <p className="section-index">From data to dialogue</p>
          <h2>本を起点に、<br />議論をひらく。</h2>
          <p>
            ランキングを示すだけではなく、「何をもって良い会社とするのか」を問い直す。
            書籍で提示したデータは、動画、講演、経営の現場へと広がっています。
          </p>
          <a href="https://www.youtube.com/watch?v=-R0uL7l1Tuw" target="_blank" rel="noreferrer">
            関連動画を見る ↗
          </a>
        </div>
      </section>

      <section className="book-arc section-shell">
        <p className="section-index">One Continuing Question</p>
        <h2>「良い会社」を見つける。<br />「企業価値」を見つめ直す。<br />「自分のキャリア」を選び直す。</h2>
        <p>
          3冊は別々のテーマを扱いながら、情報の非対称性をなくし、
          一人ひとりの意思決定を支えるという同じ問いにつながっています。
        </p>
        <a href={sources.official} target="_blank" rel="noreferrer">
          公式サイトで著書情報を確認 ↗
        </a>
      </section>
    </>
  );
}
