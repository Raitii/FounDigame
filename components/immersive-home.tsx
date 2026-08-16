"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Gamepad2, MessageSquareText, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { games } from "@/lib/data";
import { assetPath } from "@/lib/paths";

const heroSlides = [
  {
    image: assetPath("/images/pixel-kingdom-hd.png"),
    alt: "岩の中に広がるピクセルの王国",
    label: "FounDigame · 新しいゲーム体験",
    title: <><span>未完成だからこそ、</span><br /><em>世界は広がる。</em></>,
    text: "開発途中のゲームに飛び込み、最初のプレイヤーになろう。",
    game: "PIXEL HEARTH",
    build: "ALPHA 0.4",
    href: "/games/pixel-hearth",
  },
  {
    image: assetPath("/images/deep-echoes.png"),
    alt: "深海遺跡へ降りていく小さな潜水艇",
    label: "PLAY · FEEL · DISCOVER",
    title: <><span>沈むほど、</span><br /><em>世界の声が近くなる。</em></>,
    text: "完成前だから出会える、荒削りな驚きと可能性。",
    game: "DEEP ECHOES",
    build: "ALPHA 0.3",
    href: "/games/deep-echoes",
  },
  {
    image: assetPath("/images/neon-orchard.png"),
    alt: "光る果実を育てるネオンの果樹園",
    label: "YOUR VOICE BUILDS THE NEXT",
    title: <><span>まだない遊びを、</span><br /><em>一緒に実らせる。</em></>,
    text: "遊んだ感触を届けて、まだ見ぬ名作を一緒に育てよう。",
    game: "NEON ORCHARD",
    build: "BETA 0.7",
    href: "/games/neon-orchard",
  },
];

const storyScenes = [
  {
    image: games[2].image,
    number: "01",
    eyebrow: "PLAY THE ROUGH IDEA",
    title: <>まずは、<br />触れてみる。</>,
    text: "完成度では選ばなくていい。少しでも心が動いたら、その世界へ。インストール不要ですぐに遊べます。",
    action: "COREBREAKを遊ぶ",
    href: "/play/corebreak",
    icon: Gamepad2,
    glassTitle: "最初の3分を体験",
    glassText: "小さなプロトタイプにも、大きな発見がある。",
  },
  {
    image: games[0].image,
    number: "02",
    eyebrow: "TURN FEELING INTO WORDS",
    title: <>感じたことを、<br />そのまま届ける。</>,
    text: "うまく言葉にできなくても大丈夫。直感的な評価や短いひとことが、開発者には大切な道しるべです。",
    action: "フィードバックを見る",
    href: "/games/pixel-hearth",
    icon: MessageSquareText,
    glassTitle: "「もっと遊びたい」が届きました",
    glassText: "プレイヤーの声から次のアップデートが始まる。",
  },
  {
    image: games[1].image,
    number: "03",
    eyebrow: "SUPPORT THE NEXT BUILD",
    title: <>続きを願う気持ちを、<br />光に変える。</>,
    text: "毎月の応援ポイントを、続きを見たい作品へ。あなたの期待が、ゲームの未来を少しだけ前に進めます。",
    action: "応援するゲームを探す",
    href: "/games",
    icon: Sparkles,
    glassTitle: "+ 50 SUPPORT POINTS",
    glassText: "この応援が、次のビルドを照らします。",
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
          <span>NOW SHOWING</span><strong>{slide.game}</strong><small>{slide.build} · PLAYABLE NOW</small>
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
            <span className="story-number">{scene.number} / 03</span>
            <span className="kicker">{scene.eyebrow}</span>
            <h2>{scene.title}</h2>
            <p>{scene.text}</p>
            <Link href={scene.href}>{scene.action} <ArrowRight /></Link>
          </div>
          <div className="story-glass-card glass-surface" key={`card-${active}`}>
            <div><Icon /></div><span>LIVE MOMENT</span><strong>{scene.glassTitle}</strong><p>{scene.glassText}</p>
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
