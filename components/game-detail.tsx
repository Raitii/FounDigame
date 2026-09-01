"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ChevronRight, Gamepad2, Heart, MessageSquareText, Send, Share2, Sparkles } from "lucide-react";
import type { Game } from "@/lib/data";
import { formatNumber } from "@/lib/data";
import { feedbackCategories, type FeedbackCategory, useDemo } from "./demo-provider";
import { useState } from "react";

export function GameDetail({ game }: { game: Game }) {
  const { favorites, toggleFavorite, points, allocations, support, addFeedback } = useDemo();
  const [amount, setAmount] = useState(50);
  const [notice, setNotice] = useState("");
  const [feedbackCategory, setFeedbackCategory] = useState<FeedbackCategory | "">("");
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const liked = favorites.includes(game.slug);

  function handleSupport() {
    if (support(game.slug, amount)) setNotice(`${amount}ptの応援を届けました！`);
    else setNotice("ポイントが足りません");
    window.setTimeout(() => setNotice(""), 2600);
  }

  function handleFeedback() {
    if (!feedbackCategory || !feedbackText.trim()) return;
    addFeedback({ game: game.slug, category: feedbackCategory, rating: 0, text: feedbackText.trim(), date: "たった今" });
    setFeedbackSent(true);
  }

  return (
    <main className="detail-page" style={{ "--accent": game.accent } as React.CSSProperties}>
      <div className="shell detail-back"><Link href="/games"><ArrowLeft size={16} /> ゲーム一覧へ</Link></div>
      <section className="shell detail-hero">
        <div className="detail-visual">
          <Image src={game.image} alt={`${game.title} のキービジュアル`} fill priority sizes="(max-width: 900px) 95vw, 62vw" />
          <span className="stage-badge">{game.stage}</span>
        </div>
        <aside className="detail-summary">
          <div><span className="genre">{game.genre}</span><h1>{game.title}</h1><p className="tagline">{game.tagline}</p></div>
          <div className="creator-line"><div className="avatar">SP</div><div><span>CREATED BY</span><b>{game.creator}</b></div></div>
          <div className="detail-numbers"><div><b>{formatNumber(game.plays)}</b><span>プレイ</span></div><div><b>{formatNumber(game.supporters)}</b><span>サポーター</span></div><div><b>{game.progress}%</b><span>開発進捗</span></div></div>
          <div className="detail-actions"><Link href={`/play/${game.slug}`} className="button primary wide"><Gamepad2 size={19} /> このビルドを遊ぶ</Link><button className={liked ? "square-action active" : "square-action"} onClick={() => toggleFavorite(game.slug)} aria-label={liked ? "フォローを解除" : "作品をフォロー"}><Heart fill={liked ? "currentColor" : "none"} /></button><button className="square-action" aria-label="共有"><Share2 /></button></div>
          <small className="build-note"><i /> ブラウザでプレイ可能・インストール不要</small>
        </aside>
      </section>

      <section className="shell detail-layout">
        <div className="detail-content">
          <article className="content-block"><span className="kicker">ABOUT THIS GAME</span><h2>このゲームについて</h2><p>{game.description}</p><div className="tag-row">{game.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div></article>
          <article className="content-block"><span className="kicker">DEVELOPMENT ROADMAP</span><h2>完成までのロードマップ</h2><div className="roadmap">{game.roadmap.map((item, index) => <div className={item.done ? "done" : ""} key={item.label}><span>{item.done ? <Check size={15} /> : index + 1}</span><p>{item.label}</p><small>{item.done ? "完了" : "開発予定"}</small></div>)}</div></article>
          <article className="content-block wanted"><MessageSquareText /><div><span className="kicker">CREATOR WANTS TO KNOW</span><h2>開発者が聞きたいこと</h2><ul>{game.feedbackPrompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul></div></article>
          <article className="content-block quick-feedback" id="feedback">
            <span className="kicker">SEND YOUR NOTICE</span><h2>プレイ中の「気づき」を送る</h2><p>問い合わせ先を探す必要はありません。この作品について感じた小さな違和感やアイデアを、ここから開発者へ届けられます。</p>
            {feedbackSent ? <div className="quick-feedback-sent"><Check /><div><b>気づきを送信しました</b><span>次のアップデートを考える参考として開発者へ届きます。</span></div></div> : <><span className="feedback-label">気づきの種類</span><div className="feedback-types">{feedbackCategories.map((item) => <button type="button" key={item} className={feedbackCategory === item ? "active" : ""} onClick={() => setFeedbackCategory(item)}>{item}</button>)}</div><textarea value={feedbackText} onChange={(event) => setFeedbackText(event.target.value)} placeholder="例：拠点を作った後、次に何をすればよいか少し迷いました" /><button className="button primary" disabled={!feedbackCategory || !feedbackText.trim()} onClick={handleFeedback}><Send size={17} /> この気づきを送る</button></>}
          </article>
        </div>
        <aside className="support-panel">
          <div className="support-icon"><Sparkles /></div><span className="kicker">SUPPORT THIS GAME</span><h2>続きを、応援する。</h2><p>月額利用者へ付与されるポイントを、開発を続けてほしい作品へ分配できます。</p><div className="wallet-row"><span>使えるポイント</span><b>{points} pt</b></div><div className="amounts">{[10, 50, 100].map((n) => <button className={amount === n ? "active" : ""} onClick={() => setAmount(n)} key={n}>{n}</button>)}</div><button className="button support-button" onClick={handleSupport}><Sparkles size={17} /> {amount}pt 応援する</button><small>この作品に応援済み：{allocations[game.slug] ?? 0} pt</small><Link href="/plans" className="support-model-link">月額利用料と支援の仕組み <ChevronRight /></Link>{notice && <div className="toast"><Check size={16} /> {notice}</div>}</aside>
      </section>
      <section className="shell next-play"><div><span>PLAYABLE BUILD</span><b>{game.stage}</b><small>最終更新：{game.updated}</small></div><Link href={`/play/${game.slug}`}>プレイ画面へ <ChevronRight /></Link></section>
    </main>
  );
}
