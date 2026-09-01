"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, UserRound, X } from "lucide-react";
import { useState } from "react";
import { useDemo } from "./demo-provider";
import { LogoMark } from "./icons";

const nav = [
  { href: "/", label: "ホーム" },
  { href: "/games", label: "ゲームを探す" },
  { href: "/#guide", label: "はじめてガイド" },
  { href: "/plans", label: "料金・支援の仕組み" },
  { href: "/creator", label: "クリエイター" },
];

export function Header() {
  const path = usePathname();
  const { points, loggedIn } = useDemo();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link href="/" className="brand" aria-label="FounDigame ホーム">
          <LogoMark className="brand-mark" />
          <span>FOUNDI<span>GAME</span></span>
        </Link>
        <nav className={open ? "main-nav open" : "main-nav"}>
          {nav.map((item) => {
            const active = item.href === "/" ? path === "/" : !item.href.includes("#") && path.startsWith(item.href);
            return <Link key={item.label} href={item.href} className={active ? "active" : ""} onClick={() => setOpen(false)}>{item.label}</Link>;
          })}
        </nav>
        <div className="header-actions">
          {loggedIn && <Link href="/mypage" className="point-pill"><Sparkles size={15} /> <b>{points}</b><span> pts</span></Link>}
          <Link href={loggedIn ? "/mypage" : "/login"} className="icon-button" aria-label="マイページ"><UserRound size={19} /></Link>
          <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="メニュー">{open ? <X /> : <Menu />}</button>
        </div>
      </div>
    </header>
  );
}
