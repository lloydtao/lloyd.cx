<template>
  <div class="container mx-auto px-2 md:px-3">
    <div>
      <HomeHero />
    </div>
    <div class="container mx-auto mt-8">
      <PageHeading title="Image editor" />
      <div id="travel-grid-card" class="mt-3">
        <ImageEditor />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageEditor from "~/components/editor/ImageEditor.vue";
import HomeHero from "~/components/home/HomeHero.vue";
import PageHeading from "~/components/ui/PageHeading.vue";

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
