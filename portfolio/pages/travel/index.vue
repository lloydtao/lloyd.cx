<template>
  <div class="container mx-auto px-2 md:px-3">
    <h1
      class="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-2xl font-semibold text-transparent"
    >
      Travel
    </h1>
    <h2 class="mt-3 text-lg leading-snug text-slate-200/90">
      <span
        class="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent"
      >
        Trips
      </span>
    </h2>
    <div id="travel-grid-card" class="mt-3">
      <TravelCardGrid :cards="travelCardGrid" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: travelCardGrid } = await useAsyncData(route.path, () => {
  return queryCollection("trips").order("startDate", "DESC").all();
});

useSeoMeta({
  title: "Travel • lloyd.cx",
  ogTitle: "Travel",
  description: "All of my trips and travels.",
  ogDescription: "All of my trips and travels.",
  ogImage: "https://lloyd.cx/images/lloyd.jpg",
  twitterCard: "summary_large_image",
});
</script>
