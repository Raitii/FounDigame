"use client";

import Link from "next/link";
import { ArrowLeft, Check, Download, Globe2, ImagePlus, Link2, Save } from "lucide-react";
import { useState } from "react";

const steps = [
  { label: "基本情報", note: "作品の顔をつくる" },
  { label: "体験方法", note: "URL・配布形式を設定" },
  { label: "公開設定", note: "内容を確認して提出" },
];

export default function NewGamePage() {
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const [buildType, setBuildType] = useState<"web" | "download">("web");

  return (
    <main className="editor-page">
      <div className="shell editor-top">
        <Link href="/creator"><ArrowLeft /> Creator Studio</Link>
        <div><button className="button ghost" onClick={() => setSaved(true)}><Save size={17} /> 下書き保存</button><button className="button primary" onClick={() => setStep(Math.min(3, step + 1))}>{step === 3 ? "審査に提出" : "次へ"}</button></div>
      </div>
      <section className="shell editor-layout">
        <aside className="editor-steps">
          <span className="kicker">NEW PROJECT</span><h1>作品を登録</h1>
          {steps.map((item, index) => <button className={step === index + 1 ? "active" : step > index + 1 ? "done" : ""} onClick={() => setStep(index + 1)} key={item.label}><span>{step > index + 1 ? <Check /> : index + 1}</span><div><b>{item.label}</b><small>{item.note}</small></div></button>)}
        </aside>

        <div className="editor-form">
          {saved && <div className="save-notice"><Check /> モック内容を保存しました</div>}

          {step === 1 && <>
            <span className="kicker">STEP 01 / 03</span><h2>どんなゲームですか？</h2><p>あとからいつでも変更できます。まずはプレイヤーに伝わる言葉を置いてみましょう。</p>
            <label>ゲームタイトル <em>必須</em><input defaultValue="STARLING ARCHIVE" /></label>
            <label>ひとこと紹介 <em>必須</em><input defaultValue="光と周波数を合わせ、失われた星の記憶を探す探索ゲーム。" /></label>
            <div className="field-row"><label>ジャンル<select defaultValue="アドベンチャー"><option>アドベンチャー</option><option>パズル</option><option>アクション</option></select></label><label>開発ステージ<select defaultValue="プロトタイプ"><option>プロトタイプ</option><option>アルファ</option><option>ベータ</option></select></label></div>
            <label>作品について<textarea defaultValue="宇宙を旅しながら、小さな物語の断片を集めていくゲームです。現在は最初の惑星まで遊べます。" /></label>
            <label>カバー画像<div className="drop-zone"><ImagePlus /><b>画像をドロップ、または選択</b><span>PNG / JPG・16:9推奨・最大10MB</span></div></label>
          </>}

          {step === 2 && <>
            <span className="kicker">STEP 02 / 03</span><h2>プレイヤーの体験方法を登録</h2><p>Web作品はブラウザですぐ遊べます。Windows／macOS作品は、認証済みプレイヤーへ体験版・開発版を配布する想定です。</p>
            <div className="build-type-tabs"><button type="button" className={buildType === "web" ? "active" : ""} onClick={() => setBuildType("web")}><Globe2 /><b>ブラウザでプレイ</b><span>WebゲームURLを登録</span></button><button type="button" className={buildType === "download" ? "active" : ""} onClick={() => setBuildType("download")}><Download /><b>開発版を配布</b><span>Windows／macOS向け</span></button></div>

            {buildType === "web" ? <>
              <label>WebゲームURL <em>必須</em><div className="input-icon"><Link2 /><input defaultValue="https://demo.example.com/starling" /></div></label>
              <div className="info-box"><b>公開前の安全チェック</b><ul><li>HTTPSで配信されている</li><li>ブラウザ内でプレイが完結する</li><li>外部決済や不審なダウンロードがない</li></ul></div>
            </> : <>
              <div className="editor-field"><span className="field-label">対応OS <em>必須</em></span><div className="platform-options"><label className="check-label"><input type="checkbox" defaultChecked /> Windows</label><label className="check-label"><input type="checkbox" /> macOS</label></div></div>
              <div className="editor-field"><span className="field-label">体験版・開発版ファイル <em>必須</em></span><div className="drop-zone"><Download /><b>配布ファイルを選択</b><span>モックのため実ファイルは保存されません</span></div></div>
              <div className="info-box"><b>認証付き配布を想定</b><ul><li>月額利用者など、許可されたアカウントだけが入手</li><li>配布履歴とアクセス権限を管理</li><li>無断利用・無断配布のリスクを低減</li></ul></div>
            </>}

            <label>今回のバージョン<input defaultValue="ALPHA 0.1" /></label>
            <label>プレイヤーに聞きたいこと<textarea defaultValue="移動操作は分かりやすかったですか？ 星の記憶をもっと集めたいと感じましたか？" /></label>
          </>}

          {step === 3 && <>
            <span className="kicker">STEP 03 / 03</span><h2>公開内容を確認</h2><p>審査提出後、運営が掲載内容・体験方法・配布権限を確認します。</p>
            <div className="review-card"><div><span>タイトル</span><b>STARLING ARCHIVE</b></div><div><span>ステージ</span><b>プロトタイプ</b></div><div><span>体験方法</span><b>{buildType === "web" ? "ブラウザでプレイ" : "認証後にダウンロード"}</b></div><div><span>公開範囲</span><b>{buildType === "web" ? "全プレイヤー" : "許可されたプレイヤー"}</b></div></div>
            <div className="info-box"><b>企画検証用モック</b><ul><li>実ファイルのアップロードや配布は行われません</li><li>実装時は認証、権限管理、監査ログを追加します</li></ul></div>
            <label className="check-label"><input type="checkbox" defaultChecked /> 投稿ガイドラインと安全ポリシーに同意します</label>
            <button className="button primary wide" onClick={() => setSaved(true)}>運営審査に提出する</button>
          </>}
        </div>
      </section>
    </main>
  );
}
