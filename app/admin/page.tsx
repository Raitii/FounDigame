"use client";

import Image from "next/image";
import { Check, ChevronRight, Clock3, Eye, Search, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { games } from "@/lib/data";

export default function AdminPage() {
  const [queue, setQueue] = useState([games[1], games[2]]);
  const [notice, setNotice] = useState("");
  function moderate(slug: string, result: string) { setQueue((old) => old.filter((game) => game.slug !== slug)); setNotice(result); window.setTimeout(() => setNotice(""), 2300); }
  return (
    <main className="admin-page"><aside className="admin-sidebar"><div className="admin-brand"><ShieldCheck /> ADMIN</div><nav><button className="active"><Clock3 /> 審査キュー <span>{queue.length}</span></button><button><Eye /> 公開作品</button><button><Search /> ユーザー検索</button></nav><small>運営モック v0.2</small></aside><section className="admin-content"><header><div><span className="kicker">MODERATION</span><h1>公開審査</h1><p>提出された作品の情報とプレイビルドを確認します。</p></div><div className="admin-user">OP<div>運営担当</div></div></header><div className="admin-stats"><article><span>未審査</span><b>{queue.length}</b></article><article><span>本日の承認</span><b>7</b></article><article><span>要修正</span><b>2</b></article><article><span>平均審査時間</span><b>18<small>分</small></b></article></div><div className="review-table"><div className="table-head"><span>作品</span><span>申請者</span><span>ビルド</span><span>提出日時</span><span>アクション</span></div>{queue.map((game, i) => <article key={game.slug}><div className="review-game"><Image src={game.image} width={96} height={58} alt="" /><div><b>{game.title}</b><span>{game.genre}</span></div></div><span>{game.creator}</span><span className="build-safe"><Check /> URL確認済み</span><time>{i ? "昨日 16:28" : "今日 09:42"}</time><div className="review-actions"><button className="reject" onClick={() => moderate(game.slug, `${game.title}を要修正にしました`)}><X /></button><button className="approve" onClick={() => moderate(game.slug, `${game.title}を公開承認しました`)}><Check /></button><button><ChevronRight /></button></div></article>)}{!queue.length && <div className="empty-state"><Check /><h2>審査待ちはありません</h2><p>すべての申請を確認しました。</p></div>}</div></section>{notice && <div className="admin-toast"><Check /> {notice}</div>}</main>
  );
}
