<template>
  <div class="container mx-auto">
    <div>
      <div class="px-3 md:px-5">
        <PageHeading title="Portfolio" subtitle="Experience" />
      </div>
      <div class="mb-8 mt-5 grid gap-3 px-1 md:px-2 lg:grid-cols-2">
        <PortfolioEntryCard
          v-for="entry in experienceEntries"
          :key="entry.title"
          v-bind="entry"
        />
      </div>
      <div class="mt-5 px-3 md:px-5">
        <PageHeading subtitle="Projects" />
      </div>
      <div class="mb-8 mt-5 grid gap-3 lg:grid-cols-2">
        <PortfolioEntryCard
          v-for="entry in projectEntries"
          :key="entry.title"
          v-bind="entry"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PortfolioEntryCard from "~/components/portfolio/PortfolioEntryCard.vue";
import PageHeading from "~/components/ui/PageHeading.vue";

interface PortfolioEntry {
  title: string;
  subtitle: string;
  dateRange: string;
  logoSrc: string;
}

const experienceEntries: PortfolioEntry[] = [
  {
    title: "Deliveroo",
    subtitle: "Software Engineer II",
    dateRange: "Jul 2024 – Present",
    logoSrc: "/portfolio/experience/deliveroo/logo.jpg",
  },
  {
    title: "RecruitHub",
    subtitle: "Software Engineer",
    dateRange: "Feb 2023 – Jul 2024",
    logoSrc: "/portfolio/experience/recruit-hub/logo.jpg",
  },
  {
    title: "Magpie Education",
    subtitle: "Full Stack Developer",
    dateRange: "Jun 2020 – Feb 2023",
    logoSrc: "/portfolio/experience/magpie-education/logo.webp",
  },
  {
    title: "Hatless Studios",
    subtitle: "Software Engineer",
    dateRange: "Feb 2020 – Oct 2020",
    logoSrc: "/portfolio/experience/hatless-studios/logo.jpg",
  },
];

const projectEntries: PortfolioEntry[] = [
  {
    title: "Duflist",
    subtitle: "Social media application",
    dateRange: "Jul 2025 – Present",
    logoSrc: "/portfolio/projects/duflist/logo-hexagon.png",
  },
  {
    title: "Gridlink",
    subtitle: "Social media application",
    dateRange: "Nov 2022 – Present",
    logoSrc: "/portfolio/projects/gridlink/logo.jpg",
  },
];

useSeoMeta({
  title: "Portfolio • lloyd.cx",
  ogTitle: "Portfolio",
  description: "Software Engineer II, Production Platforms at Deliveroo",
  ogDescription: "Software Engineer II, Production Platforms at Deliveroo",
  ogImage: "https://lloyd.cx/images/lloyd.jpg",
  twitterCard: "summary_large_image",
});
</script>
