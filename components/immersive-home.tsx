"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Gamepad2, MessageSquareText, RotateCcw, Search, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { games } from "@/lib/data";
import { assetPath } from "@/lib/paths";

const heroSlides = [
  {
    image: assetPath("/images/pixel-kingdom-hd.png"),
    alt: "岩の中に広がるピクセルの王国",
    label: "探索RPG · ALPHA 0.4",
    title: <><span>岩を割ると、</span><br /><em>小さな王国が現れる。</em></>,
    text: "素材を集め、住人と一緒に壊れた町を再建する探索RPG。",
    game: "PIXEL HEARTH",
    build: "ALPHA 0.4",
    href: "/games/pixel-hearth",
  },
  {
    image: assetPath("/images/deep-echoes.png"),
    alt: "深海遺跡へ降りていく小さな潜水艇",
    label: "深海探索ADV · ALPHA 0.3",
    title: <><span>音を頼りに、</span><br /><em>沈んだ街を探す。</em></>,
    text: "ソナーで暗い海底を読み、遺跡に残された記憶を集めよう。",
    game: "DEEP ECHOES",
    build: "ALPHA 0.3",
    href: "/games/deep-echoes",
  },
  {
    image: assetPath("/images/neon-orchard.png"),
    alt: "光る果実を育てるネオンの果樹園",
    label: "リズムゲーム · BETA 0.7",
    title: <><span>光る果実を、</span><br /><em>リズムに合わせて収穫。</em></>,
    text: "連鎖をつないで、自分だけの果樹園の音楽を育てよう。",
    game: "NEON ORCHARD",
    build: "BETA 0.7",
    href: "/games/neon-orchard",
  },
];

const storyScenes = [
  {
    image: games[3].image,
    number: "01",
    eyebrow: "STEP 1 · 未完成ゲームを発見",
    title: <>まだ知らない作品を、<br />見つける。</>,
    text: "ジャンルや開発段階から、これから面白くなりそうなゲームを探せます。完成前の今から、最初のプレイヤーになれます。",
    action: "ゲームを探す",
    href: "/games",
    icon: Search,
    glassTitle: `${games.length}作品から探す`,
    glassText: "新しい作品や、まだ応援の少ない作品にも出会えます。",
  },
  {
    image: games[2].image,
    number: "02",
    eyebrow: "STEP 2 · 遊んで気づく",
    title: <>まずは遊んで、<br />小さな違和感を見つける。</>,
    text: "操作しにくい場所、分かりにくい説明、もっと面白くなりそうなアイデア。プレイ中の小さな気づきが改善の種になります。",
    action: "COREBREAKを体験する",
    href: "/play/corebreak",
    icon: Gamepad2,
    glassTitle: "「強化ボタンが見つけにくい」",
    glassText: "わざわざ問い合わせるほどではない一言も、ここでは大切な気づきです。",
  },
  {
    image: games[0].image,
    number: "03",
    eyebrow: "STEP 3 · 作品ページから送信",
    title: <>気づいたその場で、<br />開発者へ伝える。</>,
    text: "作品ページから「分かりにくい」「バグ報告」「改善アイデア」などを選び、短いコメントをすぐに送れます。",
    action: "気づき入力欄を見る",
    href: "/games/pixel-hearth#feedback",
    icon: MessageSquareText,
    glassTitle: "気づきの種類を選んで送信",
    glassText: "作品ごとに開発者が知りたい質問も確認できます。",
  },
  {
    image: games[1].image,
    number: "04",
    eyebrow: "STEP 4 · ポイントで応援",
    title: <>続きを遊びたい作品を、<br />ポイントで応援する。</>,
    text: "月額利用者へ毎月付与される応援ポイントを、開発を続けてほしいゲームへ自由に分配できます。",
    action: "応援するゲームを探す",
    href: "/games",
    icon: Sparkles,
    glassTitle: "50ポイントを送りました",
    glassText: "応援やプレイ状況は、開発者への支援配分を考える参考になります。",
  },
  {
    image: games[4].image,
    number: "05",
    eyebrow: "STEP 5 · 更新後にもう一度",
    title: <>変わったゲームを、<br />もう一度遊ぶ。</>,
    text: "フォローした作品の更新を確認し、自分の気づきがどう活かされたかを体験。完成後も追加コンテンツや次回作を追いかけられます。",
    action: "フォロー中の更新を見る",
    href: "/mypage",
    icon: RotateCcw,
    glassTitle: "BETA 0.7へアップデート",
    glassText: "遊ぶ、気づく、伝える、応援する。その循環がゲームを育てます。",
  },
];

export function ImmersiveHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      element.style.setProperty("--hero-scroll", `${Math.min(window.scrollY, window.innerHeight)}px`);
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  const slide = heroSlides[active];
  return (
    <section className="immersive-hero" ref={heroRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-backgrounds">
        {heroSlides.map((item, index) => (
          <div className={index === active ? "hero-background active" : "hero-background"} key={item.game} aria-hidden={index !== active}>
            <Image src={item.image} alt={index === active ? item.alt : ""} fill priority={index === 0} sizes="100vw" quality={95} />
          </div>
        ))}
      </div>
      <div className="immersive-vignette" />
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="shell immersive-hero-inner">
        <div className="hero-glass-copy" key={active}>
          <div className="glass-eyebrow"><i /><span>{slide.label}</span></div>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-actions">
            <Link href={slide.href} className="button primary">このゲームを見る <ArrowRight size={18} /></Link>
            <Link href="/games" className="button glass-button">ゲームを探す</Link>
          </div>
        </div>
        <div className="hero-side-card glass-surface">
          <span>表示中のゲーム</span><strong>{slide.game}</strong><small>{slide.build} · ブラウザで体験可能</small>
          <div className="hero-mini-progress"><i key={active} /></div>
        </div>
        <div className="hero-slider-nav" aria-label="注目ゲームのスライド">
          {heroSlides.map((item, index) => <button className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`${item.game}を表示`} key={item.game}><span>0{index + 1}</span><i /></button>)}
        </div>
        <a href="#discover" className="scroll-cue"><span>SCROLL TO DISCOVER</span><ArrowDown /></a>
      </div>
    </section>
  );
}

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const distance = Math.max(1, element.offsetHeight - window.innerHeight);
      const nextProgress = Math.max(0, Math.min(1, -rect.top / distance));
      setProgress(nextProgress);
      setActive(Math.min(storyScenes.length - 1, Math.floor(nextProgress * storyScenes.length)));
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  const scene = storyScenes[active];
  const Icon = scene.icon;
  return (
    <section className="scroll-story" id="guide" ref={sectionRef}>
      <div className="story-sticky">
        <div className="story-backgrounds">
          {storyScenes.map((item, index) => <div className={active === index ? "story-background active" : "story-background"} key={item.number}><Image src={item.image} alt="" fill sizes="100vw" quality={90} /></div>)}
        </div>
        <div className="story-shade" />
        <div className="story-progress" aria-hidden="true"><span style={{ height: `${progress * 100}%` }} /></div>
        <div className="shell story-layout">
          <div className="story-copy" key={active}>
            <span className="story-number">{scene.number} / {String(storyScenes.length).padStart(2, "0")}</span>
            <span className="kicker">{scene.eyebrow}</span>
            <h2>{scene.title}</h2>
            <p>{scene.text}</p>
            <Link href={scene.href}>{scene.action} <ArrowRight /></Link>
          </div>
          <div className="story-glass-card glass-surface" key={`card-${active}`}>
            <div><Icon /></div><span>体験イメージ</span><strong>{scene.glassTitle}</strong><p>{scene.glassText}</p>
          </div>
        </div>
        <div className="story-index">{storyScenes.map((item, index) => <span className={active === index ? "active" : ""} key={item.number}>{item.number}</span>)}</div>
      </div>
    </section>
  );
}

export function RevealOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { element.classList.add("is-visible"); observer.disconnect(); } }, { threshold: .12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`scroll-reveal ${className}`}>{children}</div>;
}
