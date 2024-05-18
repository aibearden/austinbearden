"use client"

import ListOfRecommendations from "./ListOfRecommendations";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <ListOfRecommendations />
    </main>
  );
}