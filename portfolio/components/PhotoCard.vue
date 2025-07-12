<template>
  <NuxtLink id="travel-card" :to="photoUrl" external>
    <div
      class="group relative aspect-[4/5] overflow-hidden rounded-lg border border-white/30 shadow-lg sm:rounded-2xl"
    >
      <NuxtImg
        :src="photoUrl"
        :alt="title"
        class="absolute inset-0 h-full w-full bg-slate-700 object-cover"
        height="600"
        width="480"
      />
      <div
        class="absolute bottom-0 left-0 z-10 flex w-full flex-col bg-slate-900/70 px-2 py-2 sm:px-5 sm:py-3"
      >
        <div class="flex items-center space-x-2">
          <div class="flex w-full items-center justify-between">
            <h3 class="text-xs text-slate-50 drop-shadow-sm sm:text-sm">
              {{ formatPhotoDate(dateTaken) }}
            </h3>
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
    year: "numeric",
  };
  return new Date(date).toLocaleDateString("en", options);
};
</script>
