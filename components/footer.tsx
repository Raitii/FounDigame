import Link from "next/link";
import { LogoMark } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand"><LogoMark className="brand-mark" /><span>FOUNDI<span>GAME</span></span></div>
          <p>未完成のゲームと、未来のプレイヤーが出会う場所。</p>
        </div>
        <div className="footer-links"><Link href="/games">ゲームを探す</Link><Link href="/creator">作品を公開する</Link><Link href="/admin">運営画面</Link></div>
        <small>© 2026 FounDigame — MOCK v0.2</small>
      </div>
    </footer>
  );
}
