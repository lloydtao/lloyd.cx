<template>
  <div class="container mx-auto px-3 py-3">
    <div>
      <HomeHero />
    </div>
    <div class="container mx-auto mt-8">
      <h1
        class="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-2xl font-semibold text-transparent"
      >
        Travel
      </h1>
      <p class="mt-2 text-lg leading-snug text-slate-200/90">
        <span
          class="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent"
        >
          Trips to the lesser-known.
        </span>
      </p>
      <div id="travel-grid-card" class="mt-5">
        <TravelCardGrid :cards="travelCardGrid" :display-view-all="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: travelCardGrid } = await useAsyncData(route.path, () => {
  return queryCollection("trips")
    .where("favourite", "=", true)
    .order("startDate", "DESC")
    .all();
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
