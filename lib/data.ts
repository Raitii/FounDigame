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
  feedbackPrompts: string[];
};

export const games: Game[] = [
  {
    slug: "pixel-hearth",
    title: "PIXEL HEARTH",
    tagline: "岩の中に眠る王国を探索し、町を少しずつ再建する。",
    description:
      "壊れた王国を探索し、素材を集めて拠点を再建するRPGです。現在のビルドでは、森の探索と拠点づくりの最初の30分を体験できます。",
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
    feedbackPrompts: [
      "最初の5分で、次の目的が分かりましたか？",
      "素材を集めて拠点を作る流れは気持ちよかったですか？",
      "次の更新で会ってみたい住人や追加してほしい機能はありますか？",
    ],
  },
  {
    slug: "prism-ascent",
    title: "PRISM ASCENT",
    tagline: "色と形をつないで魔力をためる、1試合3分の対戦パズル。",
    description:
      "盤面の色と形をつないで魔力をため、相手より先にゲージを完成させる対戦パズルです。ルールの分かりやすさと、逆転要素のバランスについて感想を募集しています。",
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
    feedbackPrompts: [
      "チュートリアル後に対戦ルールを理解できましたか？",
      "逆転ルールは納得できるバランスでしたか？",
      "盤面の色や形で見分けにくいものはありましたか？",
    ],
  },
  {
    slug: "corebreak",
    title: "COREBREAK",
    tagline: "鉱石を砕き、集めたエネルギーで破壊力を強化する。",
    description:
      "画面をクリックして鉱石を砕き、集めたエネルギーで道具を強化するクリッカーです。破壊したときの手応えと、強化速度のバランスを検証しています。",
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
    feedbackPrompts: [
      "鉱石を砕いたときの手応えは気持ちよかったですか？",
      "強化の速度は遅すぎたり、速すぎたりしませんでしたか？",
      "追加してほしい破壊エフェクトや効果音はありますか？",
    ],
  },
  {
    slug: "deep-echoes",
    title: "DEEP ECHOES",
    tagline: "ソナーで暗い海底を照らし、沈んだ街の記憶を探す。",
    description: "小さな潜水艇を操作し、ソナーの反響から海底の地形を読み取る探索アドベンチャーです。沈んだ都市を巡り、住人が残した記録を集めます。",
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
    feedbackPrompts: [
      "説明を読まなくてもソナーを操作できましたか？",
      "暗い海底でも進む方向や地形を把握できましたか？",
      "もっと探索したい場所や読みたい記録はありましたか？",
    ],
  },
  {
    slug: "neon-orchard",
    title: "NEON ORCHARD",
    tagline: "光る果実をリズムに合わせて収穫し、音楽をつないでいく。",
    description: "音楽のタイミングに合わせてネオンフルーツを収穫するリズムゲームです。同じ色を連続で取ると音が重なり、果樹園の曲が変化します。",
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
    feedbackPrompts: [
      "収穫のタイミングは音楽と合っていましたか？",
      "同じ色をつなぐルールは画面から理解できましたか？",
      "遊びやすかった曲、難しかった曲を教えてください。",
    ],
  },
  {
    slug: "tiny-forge",
    title: "TINY FORGE",
    tagline: "旅人の依頼を聞き、次の冒険に必要な道具を鍛える。",
    description: "森の鍛冶工房を営み、旅人の目的に合った武器や道具を作るクラフトシミュレーションです。素材と加工方法の組み合わせで、完成品の性能が変わります。",
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
    feedbackPrompts: [
      "旅人が求めている道具を迷わず判断できましたか？",
      "素材と加工方法を選ぶ意味を感じられましたか？",
      "会話の長さや依頼のテンポで気になる点はありましたか？",
    ],
  },
  {
    slug: "moonline-express",
    title: "MOONLINE EXPRESS",
    tagline: "限られた燃料で線路を引き、夜明けまでに乗客を届ける。",
    description: "夜空に浮かぶ都市同士を線路で結ぶ鉄道ストラテジーです。残りの燃料と乗客の行き先を確認しながら、効率のよい路線を組み立てます。",
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
    feedbackPrompts: [
      "線路を引く操作はすぐに理解できましたか？",
      "燃料不足が理不尽だと感じる場面はありましたか？",
      "路線を決める前に、さらに知りたい情報はありますか？",
    ],
  },
  {
    slug: "signal-lost",
    title: "SIGNAL LOST",
    tagline: "光と周波数を組み替え、途切れた宇宙通信を復元する。",
    description: "使われなくなった宇宙観測所で、アンテナの向きと信号の周波数を調整するパズルです。ノイズを取り除き、遠い惑星から届いた通信を復元します。",
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
    feedbackPrompts: [
      "周波数を合わせるための手がかりは分かりましたか？",
      "ノイズや光の表示で見分けにくい部分はありましたか？",
      "ヒントが出るタイミングは早すぎたり遅すぎたりしませんでしたか？",
    ],
  },
  {
    slug: "paper-wings",
    title: "PAPER WINGS",
    tagline: "折り紙の鳥を操作し、風に乗って本の島々を渡る。",
    description: "折り紙の鳥を操作して、本から生まれた島々を飛び回るアドベンチャーです。上昇気流を乗り継ぎ、各地に散らばった物語のページを集めます。",
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
    feedbackPrompts: [
      "鳥の上昇・旋回操作は直感的でしたか？",
      "上昇気流の場所を画面から見つけられましたか？",
      "ページを見失った場所や、迷いやすいルートはありましたか？",
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
