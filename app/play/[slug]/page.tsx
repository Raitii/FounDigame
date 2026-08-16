import { PlayExperience } from "@/components/play-experience";
import { games, getGame } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export default async function PlayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PlayExperience game={getGame(slug)} />;
}
