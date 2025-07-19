<template>
  <div class="container mx-auto px-3 py-5">
    <div>
      <HomeHero />
    </div>
    <div class="container mx-auto mt-3 px-3 py-5">
      <div class="mb-4 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-slate-100 md:text-2xl">
          Recent trips
        </h1>
        <NuxtLink
          to="/travel/"
          class="relative rounded-2xl border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-slate-200 shadow-lg backdrop-blur-lg transition duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 md:px-5 md:text-base"
        >
          View all
        </NuxtLink>
      </div>
      <div id="travel-grid-card">
        <TravelCardGrid :cards="travelCardGrid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: travelCardGrid } = await useAsyncData(route.path, () => {
  return queryCollection("trips").order("startDate", "DESC").limit(6).all();
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
