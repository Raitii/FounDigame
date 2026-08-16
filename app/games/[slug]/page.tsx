"use client";

import { useParams } from "next/navigation";
import { GameDetail } from "@/components/game-detail";
import { getGame } from "@/lib/data";

export default function GameDetailPage() {
  const params = useParams<{ slug: string }>();
  return <GameDetail game={getGame(params.slug)} />;
}
