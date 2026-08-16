"use client";

import { useParams } from "next/navigation";
import { PlayExperience } from "@/components/play-experience";
import { getGame } from "@/lib/data";

export default function PlayPage() {
  const params = useParams<{ slug: string }>();
  return <PlayExperience game={getGame(params.slug)} />;
}
