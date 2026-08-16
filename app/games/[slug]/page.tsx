import { GameDetail } from "@/components/game-detail";
import { games, getGame } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export default async function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <GameDetail game={getGame(slug)} />;
}
