<template>
  <div class="container mx-auto max-w-6xl sm:py-5">
    <div class="text-slate-50">
      <header
        class="relative h-64 bg-cover bg-center"
        :style="'background-image: url(&quot;' + trip?.coverPhoto + '&quot;);'"
      >
        <div class="absolute inset-0 bg-black/50"></div>
        <div
          class="container relative mx-auto flex h-full items-center justify-between px-6"
        >
          <div>
            <h1 class="text-4xl font-bold">{{ trip?.title }}</h1>
            <div class="mt-2 flex space-x-1 text-sm">
              <span
                class="rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-[10px]"
              >
                {{ formatStartDate(trip?.startDate) }} -
                {{ formatEndDate(trip?.endDate) }}
              </span>
              <span
                class="flex items-center space-x-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm drop-shadow-sm backdrop-blur-[10px]"
              >
                <Twemoji
                  v-for="(emoji, i) in trip?.countries.map(getFlagEmoji)"
                  :key="i"
                  :emoji="emoji"
                />
              </span>
            </div>
          </div>
        </div>
      </header>

      <main class="container mx-auto -mt-16 pb-12">
        <section
          class="mx-5 mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-[10px]"
        >
          <h2 class="mb-4 text-2xl font-semibold">About this trip</h2>
          <p class="mb-4">
            {{ trip?.description }}
          </p>
          <div class="mb-4 flex flex-wrap gap-2">
            <span
              v-for="(tag, i) in trip?.tags"
              :key="i"
              class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-[10px]"
              >#{{ tag }}</span
            >
          </div>
          <div class="flex space-x-8 text-center">
            <div>
              <div class="text-3xl font-bold">{{ trip?.photos?.length }}</div>
              <div class="text-sm">Photos</div>
            </div>
            <div>
              <div class="text-3xl font-bold">{{ trip?.stats.memories }}</div>
              <div class="text-sm">Memories</div>
            </div>
          </div>
        </section>
        <section class="mt-8">
          <h2 class="mb-4 px-5 text-2xl font-semibold">Photos</h2>
          <div
            class="grid grid-cols-3 gap-1 border-4 border-slate-900 bg-slate-900 sm:gap-3 lg:grid-cols-4 xl:grid-cols-6"
          >
            <PhotoCard
              v-for="photo in trip?.photos"
              :key="photo.id"
              v-bind="photo"
            />
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import PhotoCard from "~/components/PhotoCard.vue";

const route = useRoute();

const { data: trip } = await useAsyncData(route.path, () => {
  return queryCollection("trips")
    .order("startDate", "DESC")
    .where("slug", "=", route.params.slug)
    .first();
});

const formatStartDate = (date: string | undefined) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
  };
  if (date) {
    return new Date(date).toLocaleDateString("en", options);
  }
  return "-";
};

const formatEndDate = (date: string | undefined) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  if (date) {
    return new Date(date).toLocaleDateString("en", options);
  }
  return "-";
};

const getFlagEmoji = (countryCode: string) => {
  const OFFSET = 0x1f1e6 - "A".charCodeAt(0);

  return Array.from(countryCode.toUpperCase())
    .map((char) => String.fromCodePoint(OFFSET + char.charCodeAt(0)))
    .join("");
};
</script>
