import type { Metadata } from "next";
import "./globals.css";
import { DemoProvider } from "@/components/demo-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "FounDigame — 遊んで気づく。その気づきで、ゲームが育つ。",
  description: "未完成ゲームを発見・プレイし、日常の気づきと応援を開発者へ届ける参加型ゲーム支援サービス",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body><DemoProvider><Header />{children}<Footer /></DemoProvider></body>
    </html>
  );
}
