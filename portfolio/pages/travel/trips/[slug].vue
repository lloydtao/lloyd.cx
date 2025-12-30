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
              <div class="text-3xl font-bold">{{ trip?.posts?.length }}</div>
              <div class="text-sm">Posts</div>
            </div>
          </div>
        </section>
        <section class="mt-8">
          <h2 class="mb-3 px-5 text-2xl font-semibold">Posts</h2>
          <div v-for="post in trip?.posts" :key="post.slug" v-bind="post">
            <div
              class="mx-5 mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-[10px]"
            >
              <h3 class="mb-2 text-xl">{{ post?.title }}</h3>
              <h3 class="mb-1">{{ post?.description }}</h3>
              <div
                class="mt-5 grid grid-cols-3 gap-1 bg-transparent sm:gap-3 lg:grid-cols-4 xl:grid-cols-6"
              >
                <PhotoCard
                  v-for="photo in post.photos"
                  :key="photo.slug"
                  v-bind="photo"
                />
              </div>
            </div>
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
    .where("red", "<>", true)
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

useSeoMeta({
  title:
    trip?.value?.title +
    " (" +
    formatEndDate(trip?.value?.startDate) +
    ") • lloyd.cx",
  ogTitle:
    trip?.value?.title + " (" + formatEndDate(trip?.value?.startDate) + ")",
  description: trip?.value?.description,
  ogDescription: trip?.value?.description,
  ogImage: "https://lloyd.cx/" + trip?.value?.coverPhoto,
  twitterCard: "summary_large_image",
});
</script>
