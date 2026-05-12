<template>
  <section
    class="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:mt-3"
  >
    <NuxtImg
      v-if="trip?.coverPhoto"
      :src="trip.coverPhoto"
      :alt="trip?.title"
      class="absolute inset-0 h-full w-full object-cover opacity-40"
      height="600"
      width="1200"
    />
    <div
      class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/70"
    />

    <div class="relative px-5 py-4">
      <div class="flex flex-wrap items-center gap-2 text-xs">
        <span
          class="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-white/80 backdrop-blur-xl"
        >
          {{ formatTripDateRange(trip?.startDate, trip?.endDate) }}
        </span>
        <span
          class="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-white/80 backdrop-blur-xl"
        >
          <Twemoji
            v-for="(emoji, i) in trip?.countries.map(countryCodeToFlagEmoji)"
            :key="i"
            :emoji="emoji"
          />
        </span>
      </div>

      <h1 class="mt-2 text-3xl font-semibold tracking-tight text-white">
        {{ trip?.title }}
      </h1>
      <p class="mt-1.5 max-w-prose text-sm text-white/70">
        {{ trip?.description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TravelCardProps } from "~/types/travel-card-props";
import {
  countryCodeToFlagEmoji,
  formatTripDateRange,
} from "~/utils/travel-format";

defineProps<{
  trip?: TravelCardProps | null;
}>();
</script>
