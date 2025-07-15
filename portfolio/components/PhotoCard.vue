<template>
  <NuxtLink id="travel-card" :to="photoUrl" external>
    <div
      class="group relative aspect-[4/5] overflow-hidden rounded-lg border border-white/30 shadow-lg sm:rounded-2xl"
    >
      <NuxtImg
        :src="photoUrl"
        :alt="title"
        :modifiers="{ rotate: null }"
        class="absolute inset-0 h-full w-full bg-slate-700 object-cover"
        height="600"
        width="480"
      />
      <div
        class="absolute bottom-0 left-0 z-10 flex w-full flex-col bg-slate-900/70 px-2 py-1 sm:px-3 sm:py-2"
      >
        <div class="flex items-center space-x-2">
          <div class="flex w-full items-center justify-between">
            <div
              class="font-mono text-xs text-slate-200 drop-shadow-sm sm:text-sm"
            >
              {{ formatPhotoDate(dateTaken) }}
            </div>
            <div
              class="font-mono text-xs text-slate-200 drop-shadow-sm sm:text-sm"
            >
              {{ formatPhotoTime(dateTaken) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PhotoCardProps } from "~/types/photo-card-props";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<PhotoCardProps>();

const formatPhotoDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
  };
  return new Date(date).toLocaleDateString("en", options);
};

const formatPhotoTime = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return new Date(date).toLocaleTimeString("en", options);
};
</script>
