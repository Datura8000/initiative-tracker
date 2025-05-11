"use client";

import InitiativeCard from "../components/InitiativeCard";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <InitiativeCard
        name="Thorin Oakenshield"
        initiative={18}
        ac={16}
        hp={42}
        status="Wounded"
      />
    </main>
  );
}
