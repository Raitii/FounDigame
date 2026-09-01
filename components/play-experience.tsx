"use client";

import Link from "next/link";
import { ArrowLeft, Check, Gamepad2, RotateCcw, Send, Sparkles, Star, Volume2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Game } from "@/lib/data";
import { feedbackCategories, type FeedbackCategory, useDemo } from "./demo-provider";

const shardColors = ["cyan", "violet", "gold", "lime"];

export function PlayExperience({ game }: { game: Game }) {
  const [phase, setPhase] = useState<"ready" | "playing" | "done">("ready");
  const [time, setTime] = useState(20);
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(12);
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState<FeedbackCategory | "">("");
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  const { addFeedback } = useDemo();
  const cells = useMemo(() => Array.from({ length: 20 }, (_, i) => i), []);

  useEffect(() => {
    if (phase !== "playing") return;
    if (time <= 0) { setPhase("done"); return; }
    const timer = window.setTimeout(() => setTime((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [phase, time]);

  function collect(index: number) {
    if (phase !== "playing" || index !== target) return;
    setScore((value) => value + 120);
    setTarget((index * 7 + score / 120 + 3) % 20);
  }

  function start() { setScore(0); setTime(20); setTarget(12); setPhase("playing"); }
  function sendFeedback() {
    if (!category || !text.trim()) return;
    addFeedback({ game: game.slug, category, rating, text: text.trim(), date: "たった今" });
    setSent(true);
  }

  return (
    <main className="play-page">
      <div className="play-topbar"><Link href={`/games/${game.slug}`}><ArrowLeft /> 詳細へ戻る</Link><div><b>{game.title}</b><span>{game.stage}</span></div><button aria-label="音量"><Volume2 /></button></div>
      <section className={`game-stage phase-${phase}`} style={{ backgroundImage: `linear-gradient(rgba(4,8,20,.2), rgba(4,8,20,.76)), url(${game.image})` }}>
        {phase === "ready" && <div className="game-modal"><span className="kicker">PLAYABLE MOCK</span><Gamepad2 className="modal-icon" /><h1>FRAGMENT HUNT</h1><p>光る欠片を20秒間で集めよう。<br />このミニゲームは操作フロー確認用のモックです。</p><button className="button primary" onClick={start}>ゲームをはじめる</button></div>}
        {phase === "playing" && <><div className="game-hud"><div><span>SCORE</span><b>{score.toString().padStart(4, "0")}</b></div><div className="timer"><span>TIME</span><b>{time}</b></div></div><div className="shard-grid">{cells.map((cell) => <button key={cell} aria-label={cell === target ? "光る欠片" : "フィールド"} className={cell === target ? `shard active ${shardColors[(score / 120) % shardColors.length]}` : "shard"} onClick={() => collect(cell)}>{cell === target && <Sparkles />}</button>)}</div></>}
        {phase === "done" && <div className="game-modal result"><span className="kicker">BUILD COMPLETE</span><h1>{score >= 1200 ? "EXCELLENT!" : score >= 600 ? "NICE RUN!" : "FIRST DISCOVERY"}</h1><div className="final-score"><span>SCORE</span><b>{score}</b></div><button className="button ghost-light" onClick={start}><RotateCcw /> もう一度</button></div>}
      </section>

      {phase === "done" && <section className="feedback-sheet"><div className="feedback-inner">{sent ? <div className="feedback-sent"><div><Check /></div><h2>気づきを届けました！</h2><p>小さな気づきが、次のアップデートを考えるヒントになります。</p><Link href={`/games/${game.slug}`} className="button primary">作品ページで更新を見る</Link></div> : <><span className="kicker">AFTER PLAY</span><h2>プレイ中に気づいたことは？</h2><p>「少し分かりにくい」だけでも大丈夫。種類を選んで、そのまま開発者へ届けられます。</p><span className="feedback-label">気づきの種類</span><div className="feedback-types">{feedbackCategories.map((item) => <button type="button" key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><span className="feedback-label">満足度（任意）</span><div className="stars">{[1,2,3,4,5].map((n) => <button key={n} className={rating >= n ? "active" : ""} onClick={() => setRating(n)} aria-label={`${n}点`}><Star fill={rating >= n ? "currentColor" : "none"} /></button>)}</div><textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="どこで、何を感じたかを短く教えてください" /><button className="button primary" disabled={!category || !text.trim()} onClick={sendFeedback}><Send size={17} /> この気づきを送る</button></>}</div></section>}
    </main>
  );
}
