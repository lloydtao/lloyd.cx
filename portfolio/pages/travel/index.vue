<template>
  <div class="container mx-auto px-3 py-5">
    <div>
      <h1 class="text-2xl font-semibold text-slate-50">Travel</h1>
    </div>
    <div class="mt-5">
      <h1 class="text-xl font-semibold text-slate-100">Trips</h1>
    </div>
    <div id="travel-grid-card" class="mt-5">
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
