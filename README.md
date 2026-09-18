# 大澤陽樹 ポートフォリオ・コンセプト

オープンワーク株式会社 代表取締役社長・大澤陽樹氏の公開情報をもとに、人物、思想、著書、発信活動を紹介する非公式コンセプトサイトです。

## 起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

```bash
npm run lint
npm run build
```

## ページ

- `/` — Home：人物像、ミッション、主要指標
- `/profile` — Profile / Story：プロフィールとキャリア年表
- `/ideas` — Ideas：相互選択型市場、Working Data、人的資本
- `/media` — Media：主要掲載、登壇、研究と公式アーカイブへの導線

著書3冊は `/profile` 内の Publications に集約しています。

## 主な情報源

- [大澤陽樹 公式サイト](https://harukiohsawa.com/)
- [オープンワーク株式会社 会社概要](https://www.openwork.co.jp/about)
- [OpenWork 代表メッセージ](https://www.openwork.co.jp/recruit/message/top)
- [OpenWork 事業ビジョン](https://www.openwork.co.jp/recruit/business)
- [OpenWork IR資料](https://www.openwork.co.jp/ir/library/presentation/)
- [BNGパートナーズ子会社化リリース](https://www.openwork.co.jp/press/2026031701)
- [社長名鑑インタビュー](https://shachomeikan.jp/industry_article/2224)
- [経営ノートインタビュー](https://keiei-note.com/recipe/168/)
- [日本生産性本部 講演記録](https://www.jpc-net.jp/column/detail/dhrclub_humancapital20.html)

会社のユーザー数、クチコミ数、上場等は会社全体の実績であり、大澤氏個人の成果と断定していません。数値には可能な範囲で基準日を併記しています。

## 写真と権利

人物写真4点は本人公式サイトのプレスキット、動画サムネイルは YouTube の `maxresdefault`（取得不可時は `hqdefault`）です。`npm run optimize-images` で WebP を生成し、ビルド時に参照します。人物写真は `object-fit: contain` で切り抜きを避け、動画サムネイルは 16:9 枠内に収めています。

画像は `public/images/` に保存し、人物写真には内容を示す代替テキストを設定しています。YouTubeサムネイルはリンク先動画を表す装飾・プレビューとして使用しています。本人公式サイトの案内があっても、公開目的や媒体によって条件が異なる可能性があるため、商用公開前には本人・権利者へ最終確認してください。

## 公開前の確認

- 本人または所属会社による肩書、年表、引用文の最終確認
- 公式プレスキットを含む人物写真の二次利用許諾
- 書影、企業ロゴ、媒体ロゴの掲載許諾
- 191件のメディアアーカイブの更新状況
- OGP画像、公開URL、独自ドメイン、問い合わせ先
- 「非公式コンセプトサイト」の表示を維持するかの判断
