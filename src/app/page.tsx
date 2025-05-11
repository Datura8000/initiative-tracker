"use client";

import InitiativeCard from "../components/InitiativeCard";
import { characters } from "../data/initiatives";

export default function Home() {
  // Sort descending by initiative
  const sorted = [...characters].sort((a, b) => b.initiative - a.initiative);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Turn Order</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sorted.map((char) => (
          <InitiativeCard
            key={char.id}
            name={char.name}
            initiative={char.initiative}
            ac={char.ac}
            hp={char.hp}
            status={char.status}
          />
        ))}
      </div>
    </main>
  );
}
