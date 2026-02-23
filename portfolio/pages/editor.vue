<template>
  <div class="container mx-auto px-2 md:px-3">
    <div>
      <HomeHero />
    </div>
    <div class="container mx-auto mt-8">
      <h1
        class="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-2xl font-semibold text-transparent"
      >
        Image editor
      </h1>
      <div id="travel-grid-card" class="mt-3">
        <ImageEditor />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageEditor from "~/components/ImageEditor.vue";

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
