<template>
  <div class="container mx-auto px-3 py-5">
    <div>
      <HomeHero />
    </div>
    <div class="container mx-auto mt-3 px-3 py-5">
      <h1 class="text-xl font-semibold text-slate-100 md:text-2xl">
        Recent trips
      </h1>
      <div id="travel-grid-card" class="mt-5">
        <TravelCardGrid :cards="travelCardGrid" :display-view-all="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: travelCardGrid } = await useAsyncData(route.path, () => {
  return queryCollection("trips").order("startDate", "DESC").limit(5).all();
});

useSeoMeta({
  title: "Home • lloyd.cx",
  ogTitle: "Home",
  description:
    "Specialising in full-stack, cloud-native web applications and real-time data streaming.",
  ogDescription:
    "Specialising in full-stack, cloud-native web applications and real-time data streaming.",
  ogImage: "https://lloyd.cx/images/lloyd.jpg",
  twitterCard: "summary_large_image",
});
</script>
