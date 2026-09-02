"use client";

import Link from "next/link";
import { ArrowRight, Check, Gamepad2, Hammer, Mail } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogoMark } from "@/components/icons";
import { useDemo } from "@/components/demo-provider";
import { assetPath } from "@/lib/paths";

export default function LoginPage() {
  const [mode, setMode] = useState<"player" | "creator">("player");
  const [email, setEmail] = useState("demo@foundigame.jp");
  const { setLoggedIn, setRole } = useDemo();
  const router = useRouter();

  function login(event: React.FormEvent) {
    event.preventDefault();
    setLoggedIn(true);
    setRole(mode);
    router.push(mode === "creator" ? "/creator" : "/mypage");
  }

  return (
    <main className="auth-page">
      <section className="auth-art" style={{ backgroundImage: `linear-gradient(rgba(3,8,19,.25), rgba(3,8,19,.86)), url(${assetPath("/images/prism-cup.png")})` }}>
        <div className="auth-overlay">
          <LogoMark />
          <span className="kicker">WELCOME TO FOUNDIGAME</span>
          <h1>まだ見ぬ名作の、<br />最初の仲間になろう。</h1>
          <ul><li><Check /> 開発中のゲームをすぐ遊べる</li><li><Check /> プレイ中の気づきを作品ページから送れる</li><li><Check /> 毎月のポイントで推しを応援</li></ul>
        </div>
      </section>
      <section className="auth-form">
        <Link href="/" className="auth-back">← ホームへ戻る</Link>
        <div className="auth-box">
          <span className="kicker">MOCK ACCOUNT</span>
          <h2>FounDiGameをはじめる</h2>
          <p>体験するロールを選んでログインしてください。</p>
          <div className="role-select"><button onClick={() => setMode("player")} className={mode === "player" ? "active" : ""}><Gamepad2 /><b>プレイヤー</b><span>遊ぶ・気づきを届ける</span></button><button onClick={() => setMode("creator")} className={mode === "creator" ? "active" : ""}><Hammer /><b>クリエイター</b><span>作品を公開・分析</span></button></div>
          <form onSubmit={login}>
            <label>メールアドレス<div><Mail size={17} /><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></div></label>
            <label>パスワード<div><input type="password" value="mockpassword" readOnly /></div></label>
            <button className="button primary wide" type="submit">モックアカウントでログイン <ArrowRight size={17} /></button>
          </form>
          <small>これはモックです。入力内容は外部へ送信されません。</small>
        </div>
      </section>
    </main>
  );
}
