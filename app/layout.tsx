import type { Metadata } from "next";
import "./globals.css";
import { DemoProvider } from "@/components/demo-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "FounDigame — 未完成を、いっしょに遊ぼう。",
  description: "開発途中のゲームを遊び、声を届け、応援できるプラットフォーム",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body><DemoProvider><Header />{children}<Footer /></DemoProvider></body>
    </html>
  );
}
