"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Heart, Play, Settings, Sparkles } from "lucide-react";
import { useDemo } from "@/components/demo-provider";
import { games, updates } from "@/lib/data";

export default function MyPage() {
  const { points, favorites, allocations, feedback } = useDemo();
  const favoriteGames = games.filter((game) => favorites.includes(game.slug));
  const totalSupport = Object.values(allocations).reduce((a, b) => a + b, 0);
  return (
    <main className="dashboard-page">
      <section className="shell dashboard-header"><div className="profile-title"><div className="profile-avatar">YU</div><div><span className="kicker">PLAYER PROFILE</span><h1>ユウさん、おかえりなさい。</h1><p>次のアップデートが届いています。</p></div></div><button className="button ghost"><Settings size={17} /> 設定</button></section>
      <section className="shell stat-grid">
        <article className="point-stat"><Sparkles /><span>今月の応援ポイント</span><strong>{points}<small> pt</small></strong><p>次回付与まで 18日</p></article>
        <article><Play /><span>プレイした作品</span><strong>8<small> 本</small></strong><p>今月 +3本</p></article>
        <article><Heart /><span>フォロー中の作品</span><strong>{favorites.length}<small> 本</small></strong><p>更新通知 ON</p></article>
        <article><Clock3 /><span>届けた応援</span><strong>{totalSupport}<small> pt</small></strong><p>{feedback.length || 2}件の気づきを送信</p></article>
      </section>
      <section className="shell dashboard-columns">
        <div className="dashboard-panel"><div className="panel-heading"><div><span className="kicker">CONTINUE PLAYING</span><h2>続きを遊ぶ</h2></div><Link href="/games">ゲームを探す</Link></div><div className="compact-games">{(favoriteGames.length ? favoriteGames : games.slice(0, 1)).map((game) => <Link href={`/games/${game.slug}`} key={game.slug}><div className="compact-cover"><Image src={game.image} alt="" fill sizes="160px" /></div><div><span>{game.stage}</span><h3>{game.title}</h3><p>{game.updated}に更新</p><div className="progress-line"><i style={{ width: `${game.progress}%` }} /></div></div><ArrowRight /></Link>)}</div></div>
        <div className="dashboard-panel"><div className="panel-heading"><div><span className="kicker">LATEST UPDATES</span><h2>フォロー中の作品の更新</h2></div></div><div className="mini-updates">{updates.slice(0, 3).map((item) => <article key={item.game}><i /><div><b>{item.game} <span>{item.version}</span></b><p>{item.text}</p><time>{item.date}</time></div></article>)}</div></div>
      </section>
      <section className="shell support-history dashboard-panel"><div className="panel-heading"><div><span className="kicker">YOUR SUPPORT</span><h2>応援の記録</h2></div></div>{Object.keys(allocations).length ? Object.entries(allocations).map(([slug, amount]) => { const game = games.find((g) => g.slug === slug) ?? games[0]; return <div className="history-row" key={slug}><Image src={game.image} width={64} height={42} alt="" /><div><b>{game.title}</b><span>{game.creator}</span></div><strong>{amount} pt</strong><Link href={`/games/${slug}`}>作品を見る <ArrowRight size={14} /></Link></div>; }) : <p className="muted">まだ応援の記録はありません。</p>}</section>
    </main>
  );
}
