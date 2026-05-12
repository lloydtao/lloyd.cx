<template>
  <div class="container mx-auto">
    <div class="px-3 md:px-5">
      <HomeHero />
    </div>
    <div class="container mx-auto mt-8">
      <div class="px-3 md:px-5">
        <PageHeading title="Travel" subtitle="Highlights" />
      </div>
      <div id="travel-grid-card" class="mt-3 px-1 md:px-2">
        <TravelCardGrid :cards="travelCardGrid" :display-view-all="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeHero from "~/components/home/HomeHero.vue";
import TravelCardGrid from "~/components/travel/TravelCardGrid.vue";
import PageHeading from "~/components/ui/PageHeading.vue";

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
