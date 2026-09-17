import type { Metadata } from "next";
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
          <article key={book.title}>
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
