<template>
  <div id="travel-card">
    <div
      class="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/30 shadow-lg"
    >
      <NuxtImg
        :src="coverPhoto"
        :alt="title"
        class="absolute inset-0 h-full w-full object-cover"
        height="500"
        width="400"
      />
      <div
        class="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-white/10 opacity-0 transition duration-100 group-hover:opacity-100 group-hover:shadow-[0_0_25px_4px_rgba(255,255,255,0.6)]"
      ></div>
      <div
        class="absolute bottom-0 left-0 z-10 flex w-full flex-col bg-white/20 px-5 py-3 backdrop-blur-md"
      >
        <div class="flex items-center space-x-2">
          <div class="flex w-full items-center justify-between">
            <h3 class="font-semibold text-slate-50 drop-shadow-sm">
              {{ title }}
            </h3>
            <p class="flex space-x-1 text-sm drop-shadow-sm">
              <Twemoji
                v-for="(emoji, i) in countries.map(getFlagEmoji)"
                :key="i"
                :emoji="emoji"
              />
            </p>
          </div>
        </div>
        <p class="mt-1 text-sm text-slate-50/90 drop-shadow-sm">
          {{ formatDate(startDate) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TravelCardProps } from "~/types/travel-card-props";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<TravelCardProps>();

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  return new Date(date).toLocaleDateString("en", options);
};

const getFlagEmoji = (countryCode: string) => {
  const OFFSET = 0x1f1e6 - "A".charCodeAt(0);

  return Array.from(countryCode.toUpperCase())
    .map((char) => String.fromCodePoint(OFFSET + char.charCodeAt(0)))
    .join("");
};
</script>
