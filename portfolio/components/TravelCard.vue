<template>
  <NuxtLink id="travel-card" :to="`/travel/trips/${slug}/`">
    <div
      class="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-50/30 shadow-lg"
    >
      <NuxtImg
        :src="coverPhoto"
        :alt="title"
        class="absolute inset-0 h-full w-full object-cover"
        height="500"
        width="400"
      />
      <div
        class="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-slate-900/10 opacity-0 transition duration-100 group-hover:opacity-100 group-hover:shadow-[0_0_25px_4px_rgba(255,255,255,0.6)]"
      ></div>
      <div
        class="absolute left-0 top-0 z-10 flex w-full flex-col bg-slate-900/10 px-2 py-2 backdrop-blur-sm md:px-5 md:py-3"
      >
        <p
          class="flex justify-end space-x-1 text-sm drop-shadow-sm md:text-base"
        >
          <Twemoji
            v-for="(emoji, i) in countries.map(getFlagEmoji)"
            :key="i"
            :emoji="emoji"
          />
        </p>
      </div>
      <div
        class="absolute bottom-0 left-0 z-10 flex w-full flex-col bg-slate-900/10 px-2 py-2 backdrop-blur-sm md:px-5 md:py-3"
      >
        <div class="flex items-center space-x-2">
          <div class="flex w-full items-center justify-between">
            <h3
              class="text-sm font-semibold text-slate-50 drop-shadow-sm md:text-base"
            >
              {{ title }}
            </h3>
          </div>
        </div>
        <div
          class="mt-1 flex justify-between text-xs text-slate-50/90 drop-shadow-sm md:text-sm"
        >
          <p>{{ formatDate(startDate) }}</p>
          <div class="flex items-center space-x-1">
            <p>
              {{ posts?.length }}
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4"
              >
                <path
                  d="M5 3.5A1.5 1.5 0 0 1 6.5 2h3A1.5 1.5 0 0 1 11 3.5H5ZM4.5 5A1.5 1.5 0 0 0 3 6.5v.041a3.02 3.02 0 0 1 .5-.041h9c.17 0 .337.014.5.041V6.5A1.5 1.5 0 0 0 11.5 5h-7ZM12.5 8h-9A1.5 1.5 0 0 0 2 9.5v3A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 12.5 8Z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TravelCardProps } from "~/types/travel-card-props";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<TravelCardProps>();

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
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
