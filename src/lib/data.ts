import { images } from "@/lib/images";

export type TimelineItem = {
  year: string;
  title: string;
  detail: string;
  source?: string;
};

export type MediaItem = {
  date: string;
  type: string;
  outlet: string;
  title: string;
  href?: string;
  image?: string;
};

export const sources = {
  official: "https://harukiohsawa.com/",
  company: "https://www.openwork.co.jp/about",
  topMessage: "https://www.openwork.co.jp/recruit/message/top",
  business: "https://www.openwork.co.jp/recruit/business",
  ir: "https://www.openwork.co.jp/ir/library/presentation/",
  listing: "https://www.openwork.co.jp/ir/management/",
  bng: "https://www.openwork.co.jp/press/2026031701",
  interview: "https://shachomeikan.jp/industry_article/2224",
  keiei: "https://keiei-note.com/recipe/168/",
  student:
    "https://gakuseishinbun.jp/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%83%AF%E3%83%BC%E3%82%AF%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE-%E4%BB%A3%E8%A1%A8%E5%8F%96%E7%B7%A0%E5%BD%B9%E7%A4%BE%E9%95%B7-%E5%A4%A7%E6%BE%A4%E9%99%BD/",
  productivity:
    "https://www.jpc-net.jp/column/detail/dhrclub_humancapital20.html",
  bizgate:
    "https://bizgate.nikkei.com/article/DGXZQOLM221OV022052026000000",
  porters: "https://hrbc.porters.jp/magazine/special_detail/id=1411",
};

export const timeline: TimelineItem[] = [
  {
    year: "2003–07",
    title: "生命科学から、社会を動かす問いへ",
    detail:
      "筑波大学生物学類へ。3〜4年次はマンチェスター大学で学び、砂漠緑化の研究を通じて、技術だけでなく法律・倫理・人の合意が社会実装を左右すると知る。",
    source: sources.student,
  },
  {
    year: "2007–09",
    title: "東京大学大学院で都市計画を研究",
    detail:
      "新領域創成科学研究科で修士課程を修了。計画を描くだけでは街は変わらないという経験が、「社会を変える手触り感」を求める原点になる。",
    source: sources.interview,
  },
  {
    year: "2009",
    title: "リンクアンドモチベーション入社",
    detail:
      "人事制度、組織文化、人材育成、採用に関するベンチャー企業向けコンサルティングに従事。営業成績最下位から、プロジェクトマネージャーへ。",
    source: sources.keiei,
  },
  {
    year: "2015",
    title: "企画室室長、新規事業をつくる",
    detail:
      "本社・グループ企業の企画と経営管理を管掌。組織改善クラウド「モチベーションクラウド」を2名で立ち上げ、CVCではアカツキ、ラクスルなどを担当。",
    source: sources.official,
  },
  {
    year: "2018–19",
    title: "ヴォーカーズへ兼務出向、そして転職",
    detail:
      "採用支援サービスの立ち上げに参画。働く人の声で企業と個人を対等にする可能性に惹かれ、2019年にフルコミットを選ぶ。",
    source: sources.interview,
  },
  {
    year: "2020",
    title: "代表取締役社長に就任",
    detail:
      "一度は創業者からの打診を断ったのち、創業者が会長として残る体制で就任。プラットフォームと採用支援の成長を率いる。",
    source: sources.interview,
  },
  {
    year: "2022",
    title: "東証グロース市場へ上場",
    detail:
      "12月16日、オープンワークが上場。働くデータを蓄積・透明化するWorking Data Platformへの進化を掲げる。",
    source: sources.listing,
  },
  {
    year: "2023–25",
    title: "データを社会の共通言語へ",
    detail:
      "働きがい、人的資本、オルタナティブデータ、キャリアをテーマに3冊を刊行。研究・講演・メディア発信を広げる。",
    source: sources.official,
  },
  {
    year: "2026",
    title: "相互選択型市場への次の一手",
    detail:
      "BNGパートナーズの完全子会社化を決議。プラットフォームのデータと、CxO領域の深いコンサルティングを組み合わせる。",
    source: sources.bng,
  },
];

export const books = [
  {
    year: "2023",
    title: "1300万件のクチコミからわかった超優良企業",
    publisher: "東洋経済新報社",
    theme: "社員クチコミから、これから選ばれる会社の条件を読み解く。",
  },
  {
    year: "2025",
    title: "オルタナティブデータ入門",
    publisher: "中央経済社",
    theme: "従来の財務情報だけでは見えない企業価値を、データから捉える。",
  },
  {
    year: "2025",
    title: "大退職時代の歩き方",
    publisher: "NewsPicks プロピッカー新書",
    theme: "会社にキャリアを預けず、自ら選択する時代の働き方を考える。",
  },
];

export const media: MediaItem[] = [
  {
    date: "2026.08",
    type: "動画",
    outlet: "PIVOT CAREER",
    title: "INDUSTRY MAP 2026「コンサルティング業界の業界地図」前後編",
    href: "https://www.youtube.com/watch?v=lh8xYt7xsPo",
    image: images.mediaConsulting,
  },
  {
    date: "2026.08",
    type: "書籍",
    outlet: "会社四季報 業界地図2027年版",
    title: "OpenWork掲載データを監修",
  },
  {
    date: "2026.08",
    type: "CM",
    outlet: "OpenWork",
    title: "男性ブランコ・平井まさあき氏起用テレビCMを監修",
  },
  {
    date: "2026.07",
    type: "動画",
    outlet: "PIVOT CAREER",
    title: "INDUSTRY MAP 2026「半導体産業の業界地図」前後編",
    href: "https://www.youtube.com/watch?v=P1IPBjR_MEc",
    image: images.mediaSemiconductor,
  },
  {
    date: "2026.06",
    type: "取材",
    outlet: "日経BizGate",
    title: "社員口コミから分かった 働きがいと財務の関係性",
    href: sources.bizgate,
  },
  {
    date: "2026.06",
    type: "動画",
    outlet: "バトンズ公式チャンネル",
    title: "M&A後のリアル：M&Aで飛躍するエンタメ企業",
    href: "https://youtu.be/r733hn3fZk4",
    image: images.mediaTalk,
  },
  {
    date: "2026.03",
    type: "動画",
    outlet: "ナレッジワーク NEW SALESチャンネル",
    title: "セールスと事業成長をテーマに出演",
  },
  {
    date: "2025.10",
    type: "動画",
    outlet: "PIVOT",
    title: "電通「働きがい1位」の真相",
    href: "https://youtu.be/sg0PLYdkjC0",
    image: images.mediaDentsu,
  },
  {
    date: "2025.03–",
    type: "連載",
    outlet: "NewsPicks",
    title: "プロピッカー新書「大退職時代の歩き方」",
  },
  {
    date: "2025",
    type: "取材",
    outlet: "Human Capital Online",
    title: "ネガティブなクチコミも人的資本経営に生かす",
    href:
      "https://project.nikkeibp.co.jp/HumanCapital/atcl/column/00015/021000075/",
  },
  {
    date: "2024.10",
    type: "講演",
    outlet: "日本生産性本部",
    title: "1700万件以上の社員クチコミから読み解く選ばれる会社",
    href: sources.productivity,
  },
  {
    date: "2023.12",
    type: "取材",
    outlet: "社長名鑑",
    title: "ジョブマーケット・プラットフォームで社会を変える手触り感",
    href: sources.interview,
  },
  {
    date: "2023.11",
    type: "動画",
    outlet: "PIVOT",
    title: "社員クチコミ評価スコアを使ったキャリアの導き方",
    href: "https://www.youtube.com/watch?v=VCV0d7gMHnw",
    image: images.mediaCareer,
  },
  {
    date: "2023.07",
    type: "Podcast",
    outlet: "社長に聞く！in WizBiz",
    title: "研究から経営へ、OpenWorkとの出会い",
    href: sources.keiei,
  },
  {
    date: "2023.02",
    type: "動画",
    outlet: "転職のサラタメチャンネル",
    title: "『1300万件のクチコミで分かった超優良企業』を解説",
    href: "https://www.youtube.com/watch?v=-R0uL7l1Tuw",
    image: images.mediaBook,
  },
  {
    date: "2021.12",
    type: "CM",
    outlet: "日経スペシャル カンブリア宮殿",
    title: "企画CM「アイデアの扉」",
    href: "https://www.youtube.com/watch?v=MSisNKgjZ68",
    image: images.mediaCambria,
  },
];

export function mediaLinkForImage(image: string): string | undefined {
  return media.find((item) => item.image === image && item.href)?.href;
}

export const homeVideoMosaic = (
  [
    images.mediaConsulting,
    images.mediaSemiconductor,
    images.mediaCambria,
  ] as const
).flatMap((image) => {
  const item = media.find((entry) => entry.image === image && entry.href);
  if (!item?.href) return [];
  return [{ src: image, alt: item.title, href: item.href }];
});

export const ideas = [
  {
    number: "01",
    title: "相互拘束から、相互選択へ",
    body:
      "会社が人を囲い、人が会社にキャリアを預ける関係を変える。報酬、働き方、社風、成長機会が見えることで、企業と個人が互いに選び続けられる市場をつくる。",
    source: sources.porters,
  },
  {
    number: "02",
    title: "声を、意思決定できるデータへ",
    body:
      "社員クチコミを感想の集合で終わらせない。企業評価、求人、選考、財務と接続し、キャリア・経営・投資の判断を支えるWorking Data Platformへ進化させる。",
    source: sources.business,
  },
  {
    number: "03",
    title: "働きがいを、企業価値へ",
    body:
      "組織は目に見えにくい。しかし、働きがいと財務には時間差を伴う相関がある。人への投資を理念ではなく、経営の言葉で議論できる状態を目指す。",
    source: sources.bizgate,
  },
];
