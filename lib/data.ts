import { assetPath } from "./paths";

export type Game = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  genre: string;
  stage: string;
  progress: number;
  creator: string;
  accent: string;
  plays: number;
  supporters: number;
  updated: string;
  tags: string[];
  status: "公開中" | "審査中" | "下書き";
  roadmap: { label: string; done: boolean }[];
};

export const games: Game[] = [
  {
    slug: "pixel-hearth",
    title: "PIXEL HEARTH",
    tagline: "岩の向こうに、まだ誰も知らない小さな王国。",
    description:
      "壊れた世界の欠片を集め、住人たちと小さな王国を再建する探索RPG。今回のビルドでは、森のエリアと拠点づくりの最初の30分を遊べます。",
    image: assetPath("/images/pixel-kingdom-hd.png"),
    genre: "探索RPG",
    stage: "ALPHA 0.4",
    progress: 42,
    creator: "Studio Pebble",
    accent: "#b9ff66",
    plays: 1842,
    supporters: 286,
    updated: "2日前",
    tags: ["ピクセル", "ファンタジー", "クラフト"],
    status: "公開中",
    roadmap: [
      { label: "コア探索ループ", done: true },
      { label: "拠点クラフト", done: true },
      { label: "第2エリア：水晶洞窟", done: false },
      { label: "協力プレイ", done: false },
    ],
  },
  {
    slug: "prism-ascent",
    title: "PRISM ASCENT",
    tagline: "1試合3分。ひらめきで駆け上がる魔法競技。",
    description:
      "色と形をつなげて魔力をチャージする、短時間対戦パズル。遊び方の伝わりやすさと、逆転ルールについてフィードバックを募集中です。",
    image: assetPath("/images/prism-cup.png"),
    genre: "対戦パズル",
    stage: "BETA 0.8",
    progress: 78,
    creator: "Lumen Works",
    accent: "#71e7ff",
    plays: 3291,
    supporters: 519,
    updated: "5日前",
    tags: ["対戦", "カジュアル", "3分"],
    status: "公開中",
    roadmap: [
      { label: "基本対戦", done: true },
      { label: "ランクマッチ", done: true },
      { label: "観戦モード", done: false },
      { label: "シーズン1", done: false },
    ],
  },
  {
    slug: "corebreak",
    title: "COREBREAK",
    tagline: "砕くたび、未知の力が目を覚ます。",
    description:
      "不思議な鉱石を割って、内部のエネルギーを組み合わせる実験的クリッカー。気持ちよい操作感と成長バランスを検証しています。",
    image: assetPath("/images/corebreak.png"),
    genre: "クリッカー",
    stage: "PROTOTYPE",
    progress: 24,
    creator: "mono::lab",
    accent: "#d899ff",
    plays: 906,
    supporters: 143,
    updated: "昨日",
    tags: ["実験作", "短時間", "収集"],
    status: "公開中",
    roadmap: [
      { label: "基本破壊アクション", done: true },
      { label: "アップグレード", done: false },
      { label: "鉱石図鑑", done: false },
      { label: "サウンド強化", done: false },
    ],
  },
  {
    slug: "deep-echoes",
    title: "DEEP ECHOES",
    tagline: "光の届かない海で、忘れられた街の声を聴く。",
    description: "小さな潜水艇で深海遺跡を探索するアドベンチャー。音の反響を頼りに地形を読み、沈んだ都市に残された記憶を集めます。",
    image: assetPath("/images/deep-echoes.png"),
    genre: "探索ADV",
    stage: "ALPHA 0.3",
    progress: 36,
    creator: "Blue Current",
    accent: "#54e3ff",
    plays: 1214,
    supporters: 198,
    updated: "3日前",
    tags: ["探索", "深海", "物語"],
    status: "公開中",
    roadmap: [
      { label: "ソナー探索", done: true },
      { label: "第1深度の遺跡", done: true },
      { label: "潜水艇カスタム", done: false },
      { label: "深海生物図鑑", done: false },
    ],
  },
  {
    slug: "neon-orchard",
    title: "NEON ORCHARD",
    tagline: "実る光をリズムに変える、真夜中の果樹園。",
    description: "ネオンフルーツを音楽に合わせて収穫するリズムゲーム。色の連鎖とタイミングで、自分だけの庭のサウンドが育っていきます。",
    image: assetPath("/images/neon-orchard.png"),
    genre: "リズム",
    stage: "BETA 0.7",
    progress: 71,
    creator: "Tempo Garden",
    accent: "#ff63de",
    plays: 2477,
    supporters: 407,
    updated: "今日",
    tags: ["カジュアル", "音楽", "ネオン"],
    status: "公開中",
    roadmap: [
      { label: "リズム収穫", done: true },
      { label: "12楽曲", done: true },
      { label: "庭のカスタム", done: false },
      { label: "デイリーチャレンジ", done: false },
    ],
  },
  {
    slug: "tiny-forge",
    title: "TINY FORGE",
    tagline: "森の片隅で、だれかの冒険を鍛える。",
    description: "小さな鍛冶工房を営むクラフトシミュレーション。旅人の話を聞き、その人の次の冒険にぴったりな道具を仕立てます。",
    image: assetPath("/images/tiny-forge.png"),
    genre: "シミュレーション",
    stage: "ALPHA 0.5",
    progress: 53,
    creator: "Acorn Studio",
    accent: "#ffb84f",
    plays: 1689,
    supporters: 324,
    updated: "6日前",
    tags: ["クラフト", "経営", "癒やし"],
    status: "公開中",
    roadmap: [
      { label: "受注と鍛造", done: true },
      { label: "工房アップグレード", done: true },
      { label: "旅人の物語", done: false },
      { label: "季節イベント", done: false },
    ],
  },
  {
    slug: "moonline-express",
    title: "MOONLINE EXPRESS",
    tagline: "月と月を結ぶ、夜空でいちばん小さな鉄道。",
    description: "浮遊都市を結ぶ路線を組み立てる、静かな鉄道ストラテジー。限られた星の燃料で、夜が明けるまでに乗客を届けます。",
    image: assetPath("/images/moonline-express.png"),
    genre: "ストラテジー",
    stage: "PROTOTYPE",
    progress: 28,
    creator: "Nightjar Games",
    accent: "#a990ff",
    plays: 738,
    supporters: 156,
    updated: "1週間前",
    tags: ["鉄道", "戦略", "リラックス"],
    status: "公開中",
    roadmap: [
      { label: "路線づくり", done: true },
      { label: "乗客システム", done: false },
      { label: "6つの月都市", done: false },
      { label: "エンドレスモード", done: false },
    ],
  },
  {
    slug: "signal-lost",
    title: "SIGNAL LOST",
    tagline: "途切れた星座をつなぎ、最後の通信を取り戻す。",
    description: "廃棄された宇宙観測所を舞台にした環境パズル。光と周波数を組み替え、遠い惑星から届く未知の信号を復元します。",
    image: assetPath("/images/signal-lost.png"),
    genre: "パズル",
    stage: "ALPHA 0.2",
    progress: 31,
    creator: "Quiet Orbit",
    accent: "#7f7cff",
    plays: 1106,
    supporters: 241,
    updated: "4日前",
    tags: ["SF", "謎解き", "雰囲気"],
    status: "公開中",
    roadmap: [
      { label: "信号パズル", done: true },
      { label: "観測所探索", done: false },
      { label: "通信ログ", done: false },
      { label: "マルチエンディング", done: false },
    ],
  },
  {
    slug: "paper-wings",
    title: "PAPER WINGS",
    tagline: "ページをめくる風に乗って、物語の空へ。",
    description: "折り紙の鳥となって本の島々を渡るフライトアドベンチャー。風を読み、散らばった物語の一節を集めて空を描き直します。",
    image: assetPath("/images/paper-wings.png"),
    genre: "フライト",
    stage: "BETA 0.6",
    progress: 67,
    creator: "Folded Sky",
    accent: "#ffcb69",
    plays: 2150,
    supporters: 389,
    updated: "2日前",
    tags: ["カジュアル", "飛行", "物語"],
    status: "公開中",
    roadmap: [
      { label: "基本飛行", done: true },
      { label: "3つの本世界", done: true },
      { label: "タイムアタック", done: false },
      { label: "フォトモード", done: false },
    ],
  },
];

export const updates = [
  { game: "PIXEL HEARTH", version: "v0.4", text: "拠点づくりと新しい住人を追加しました", date: "2026.08.11" },
  { game: "COREBREAK", version: "v0.2", text: "ヒットエフェクトと連鎖ボーナスを改善", date: "2026.08.08" },
  { game: "PRISM ASCENT", version: "v0.8", text: "初心者向けチュートリアルを刷新", date: "2026.08.04" },
];

export const getGame = (slug: string) => games.find((game) => game.slug === slug) ?? games[0];

export const formatNumber = (value: number) => new Intl.NumberFormat("ja-JP").format(value);
