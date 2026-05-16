<template>
  <div class="container mx-auto">
    <div class="px-3 md:px-5">
      <PageHeading title="Travel" subtitle="Trips" />
    </div>
    <div id="travel-grid-card" class="mt-3 px-1 md:px-2">
      <TravelCardGrid :cards="travelCardGrid" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TravelCardGrid from "~/components/travel/TravelCardGrid.vue";
import PageHeading from "~/components/ui/PageHeading.vue";

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
