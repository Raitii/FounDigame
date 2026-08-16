"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Users } from "lucide-react";
import type { Game } from "@/lib/data";
import { formatNumber } from "@/lib/data";
import { useDemo } from "./demo-provider";

export function GameCard({ game, priority = false }: { game: Game; priority?: boolean }) {
  const { favorites, toggleFavorite } = useDemo();
  const liked = favorites.includes(game.slug);
  return (
    <article className="game-card" style={{ "--accent": game.accent } as React.CSSProperties}>
      <Link href={`/games/${game.slug}`} className="game-cover">
        <Image src={game.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" priority={priority} quality={90} />
        <span className="stage-badge">{game.stage}</span>
        <span className="play-hover">作品を見る <ArrowUpRight size={18} /></span>
      </Link>
      <div className="game-card-body">
        <div className="game-card-top">
          <div><span className="genre">{game.genre}</span><h3><Link href={`/games/${game.slug}`}>{game.title}</Link></h3></div>
          <button className={liked ? "heart active" : "heart"} onClick={() => toggleFavorite(game.slug)} aria-label="お気に入り"><Heart size={20} fill={liked ? "currentColor" : "none"} /></button>
        </div>
        <p>{game.tagline}</p>
        <div className="progress-line"><i style={{ width: `${game.progress}%` }} /></div>
        <div className="game-meta"><span>{game.creator}</span><span><Users size={14} /> {formatNumber(game.supporters)}</span></div>
      </div>
    </article>
  );
}
