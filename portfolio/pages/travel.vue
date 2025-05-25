<template>
  <div class="container mx-auto px-3 py-5">
    <div>
      <h1 class="text-2xl font-semibold text-slate-50">Trips</h1>
    </div>
    <div id="travel-grid-card">
      <TravelCardGrid
        v-for="[year, cards] in Object.entries(travelCardGrids).sort(
          (a, b) => Number(b[0]) - Number(a[0]),
        )"
        :key="year"
        :year="Number(year)"
        :cards="cards"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TravelCardProps } from "~/types/travel-card-props";

const travelCardGrids: Record<number, TravelCardProps[]> = {
  2024: [
    {
      imageUrl: "/images/travel/2024-svalbard/seed-vault.jpg",
      title: "Svalbard",
      emojis: ["🇸🇯"],
      date: "2024-12-01T00:00:00",
    },
    {
      imageUrl: "/images/travel/2024-levant/jericho.jpg",
      title: "The Levant",
      emojis: ["🇮🇱", "🇯🇴", "🇵🇸"],
      date: "2024-05-01T00:00:00",
    },
    {
      imageUrl: "/images/travel/2024-europe/aug.jpg",
      title: "Central Europe",
      emojis: ["🇭🇷", "🇸🇮", "🇭🇺", "🇨🇿"],
      date: "2024-02-01T00:00:00",
    },
  ],

  2023: [
    {
      imageUrl: "/images/travel/2023-iceland/aurora.jpg",
      title: "Iceland",
      emojis: ["🇮🇸"],
      date: "2023-11-01T00:00:00",
    },
    {
      imageUrl: "/images/travel/2023-luxembourg/tri-border.jpg",
      title: "Luxembourg",
      emojis: ["🇱🇺"],
      date: "2023-08-01T00:00:00",
    },
    {
      imageUrl: "/images/travel/2023-lithuania/castle.jpg",
      title: "Lithuania",
      emojis: ["🇱🇹"],
      date: "2023-06-01T00:00:00",
    },
    {
      imageUrl: "/images/travel/2023-morocco/camels.jpg",
      title: "Morocco",
      emojis: ["🇲🇦"],
      date: "2023-01-01T00:00:00",
    },
  ],

  2022: [
    {
      imageUrl: "/images/travel/2022-poland/pierogies.jpg",
      title: "Poland",
      emojis: ["🇵🇱"],
      date: "2022-11-01T00:00:00",
    },
    {
      imageUrl: "/images/travel/2022-norway/fjord.jpg",
      title: "Norway",
      emojis: ["🇳🇴"],
      date: "2022-10-01T00:00:00",
    },
  ],

  2021: [
    {
      imageUrl: "/images/travel/2022-portugal/pool.jpg",
      title: "Portugal",
      emojis: ["🇵🇹"],
      date: "2021-10-01T00:00:00",
    },
  ],
} satisfies Record<number, TravelCardProps[]>;
</script>
