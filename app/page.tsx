import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GameCard } from "@/components/game-card";
import { games, updates } from "@/lib/data";
import { ImmersiveHero, RevealOnScroll, ScrollStory } from "@/components/immersive-home";

export default function Home() {
  return (
    <main className="immersive-home">
      <ImmersiveHero />

      <section className="ticker" aria-label="お知らせ">
        <div className="shell ticker-inner"><span>NEW BUILD</span><p>PIXEL HEARTH v0.4 — 拠点づくりアップデート公開</p><Link href="/games/pixel-hearth">詳しく見る <ArrowRight size={14} /></Link></div>
      </section>

      <RevealOnScroll>
        <section className="section shell home-pickup" id="discover">
          <div className="section-heading"><div><span className="kicker">PICK UP</span><h2>今、育っているゲーム</h2><p>プレイヤーの声を待っている開発中タイトル。</p></div><Link href="/games" className="text-link">すべて見る <ArrowRight size={17} /></Link></div>
          <div className="game-grid">{games.slice(0, 6).map((game, i) => <GameCard game={game} key={game.slug} priority={i === 0} />)}</div>
        </section>
      </RevealOnScroll>

      <ScrollStory />

      <RevealOnScroll>
        <section className="section shell updates-section">
          <div className="section-heading"><div><span className="kicker">CHANGE LOG</span><h2>ゲームは、今日も変わっていく。</h2></div></div>
          <div className="updates-list">{updates.map((update, i) => <article key={update.game}><span className="update-no">0{i + 1}</span><div><b>{update.game}</b><span>{update.version}</span></div><p>{update.text}</p><time>{update.date}</time></article>)}</div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="cta-section"><div className="shell cta-inner"><div><span className="kicker">FOR CREATORS</span><h2>その未完成、<br />ひとりで抱えないで。</h2><p>小さなプロトタイプから公開できます。プレイヤーと一緒に、ゲームの次を見つけよう。</p></div><Link href="/creator" className="button light">作品を公開する <ArrowRight size={18} /></Link></div></section>
      </RevealOnScroll>
    </main>
  );
}
