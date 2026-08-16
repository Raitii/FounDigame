"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { GameCard } from "@/components/game-card";
import { games } from "@/lib/data";

const categories = ["すべて", "探索", "パズル", "シミュレーション", "カジュアル"];

export default function GamesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("すべて");
  const filtered = useMemo(() => games.filter((game) => (category === "すべて" || `${game.genre}${game.tags.join("")}`.includes(category)) && `${game.title}${game.tags.join("")}${game.tagline}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return (
    <main className="page-main">
      <section className="page-hero compact shell"><span className="kicker">DISCOVER</span><h1>まだ知らないゲームの、<br /><em>最初のプレイヤーに。</em></h1><p>開発途中の作品をのぞいて、気になる世界へ飛び込もう。</p></section>
      <section className="shell browse-section">
        <div className="filter-bar">
          <label className="search-box"><Search size={19} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="タイトル・タグから検索" /></label>
          <div className="category-tabs">{categories.map((item) => <button className={item === category ? "active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
          <button className="filter-button" aria-label="絞り込み"><SlidersHorizontal size={18} /></button>
        </div>
        <div className="result-row"><b>{filtered.length}</b> 件のゲーム <span>更新が新しい順</span></div>
        {filtered.length ? <div className="game-grid">{filtered.map((game) => <GameCard game={game} key={game.slug} />)}</div> : <div className="empty-state"><Search /><h2>ゲームが見つかりませんでした</h2><p>検索ワードやジャンルを変えてみてください。</p></div>}
      </section>
    </main>
  );
}
