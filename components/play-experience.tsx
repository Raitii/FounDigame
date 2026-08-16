"use client";

import Link from "next/link";
import { ArrowLeft, Check, Gamepad2, RotateCcw, Send, Sparkles, Star, Volume2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Game } from "@/lib/data";
import { useDemo } from "./demo-provider";

const shardColors = ["cyan", "violet", "gold", "lime"];

export function PlayExperience({ game }: { game: Game }) {
  const [phase, setPhase] = useState<"ready" | "playing" | "done">("ready");
  const [time, setTime] = useState(20);
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState(12);
  const [rating, setRating] = useState(0);
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
    if (!rating) return;
    addFeedback({ game: game.slug, rating, text, date: "たった今" });
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

      {phase === "done" && <section className="feedback-sheet"><div className="feedback-inner">{sent ? <div className="feedback-sent"><div><Check /></div><h2>声を届けました！</h2><p>あなたのフィードバックが、次のアップデートのヒントになります。</p><Link href={`/games/${game.slug}`} className="button primary">ゲーム詳細へ戻る</Link></div> : <><span className="kicker">AFTER PLAY</span><h2>遊んでみて、どうでしたか？</h2><p>まずは直感で教えてください。</p><div className="stars">{[1,2,3,4,5].map((n) => <button key={n} className={rating >= n ? "active" : ""} onClick={() => setRating(n)}><Star fill={rating >= n ? "currentColor" : "none"} /></button>)}</div><textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="よかったところ、気になったところ（任意）" /><button className="button primary" disabled={!rating} onClick={sendFeedback}><Send size={17} /> フィードバックを送る</button></>}</div></section>}
    </main>
  );
}
