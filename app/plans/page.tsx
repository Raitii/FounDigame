import Link from "next/link";
import { ArrowRight, Check, Gamepad2, RefreshCcw, Sparkles, Users, WalletCards } from "lucide-react";

const distribution = [
  { title: "応援ポイント", text: "プレイヤーが特に応援したい作品へ送ったポイントを参考にします。", icon: Sparkles },
  { title: "ユニークプレイヤー数", text: "実際に体験された作品が支援につながる仕組みを検証します。", icon: Gamepad2 },
  { title: "新規作品支援枠", text: "まだ十分なファンがいない新しい作品にも支援機会を設けます。", icon: Users },
];

export default function PlansPage() {
  return (
    <main className="plans-page">
      <section className="shell plans-hero">
        <div className="plans-copy"><span className="kicker">PLAYER PLAN & CREATOR SUPPORT</span><h1>月額980円で、<br /><em>遊ぶ・気づく・応援する。</em></h1><p>プレイヤーの月額利用料を、サービス運営と開発者への支援原資につなげる計画です。個別作品を買うだけではなく、複数の未完成ゲームを体験しながら成長を見守れます。</p><div className="plans-actions"><Link href="/games" className="button primary">掲載作品を見る <ArrowRight /></Link><Link href="/#guide" className="button ghost">体験の流れを見る</Link></div></div>

        <article className="plan-card">
          <span>企画検証中の想定プラン</span><h2>プレイヤープラン</h2><div className="plan-price"><b>月額</b><strong>980</strong><small>円（税込想定）</small></div>
          <ul><li><Check /> 対象となる体験版・開発版をプレイ</li><li><Check /> 毎月の応援ポイントを好きな作品へ分配</li><li><Check /> フォロー作品のアップデート通知</li><li><Check /> 追加コンテンツや次回作の先行体験</li><li><Check /> 作品ごとのコミュニティやSpecial Thanks企画</li></ul>
          <Link href="/login" className="button primary wide">モックアカウントで体験</Link><small>この画面は企画検証用モックです。決済や契約は発生しません。</small>
        </article>
      </section>

      <section className="shell support-model">
        <div className="section-heading"><div><span className="kicker">SUPPORT MODEL</span><h2>月額利用料を、開発継続の力へ。</h2><p>決済費用やサービス運営費を除いた収益の一部を、開発者への分配原資とする想定です。</p></div></div>
        <div className="money-flow"><article><WalletCards /><span>01</span><h3>プレイヤーの月額利用料</h3><p>月額980円程度を想定</p></article><i>→</i><article><RefreshCcw /><span>02</span><h3>運営費と支援原資</h3><p>決済・サーバー・改善費用を確保</p></article><i>→</i><article><Sparkles /><span>03</span><h3>各開発者へ分配</h3><p>応援と利用状況を参考に配分</p></article></div>
        <div className="distribution-grid">{distribution.map(({ title, text, icon: Icon }) => <article key={title}><div><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="model-note">具体的な分配率・応援ポイント数・対象作品の条件は、サービス運営費と利用状況を検証したうえで決定します。</p>
      </section>

      <section className="creator-lifecycle">
        <div className="shell"><span className="kicker">LONG-TERM RELATIONSHIP</span><h2>完成して終わりではなく、次の挑戦までつながる。</h2><div>{["開発中｜プレイ・気づき・応援", "本格リリース｜Steam等へ案内", "リリース後｜DLCや追加テスト", "次回作｜既存ファンへ先行公開"].map((item, index) => <article key={item}><span>0{index + 1}</span><b>{item}</b></article>)}</div></div>
      </section>
    </main>
  );
}
