<template>
  <section>
    <h1 class="mt-8 text-xl font-semibold text-slate-100">{{ year }}</h1>

    <div
      class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <TravelCard v-for="card in cards" :key="card.title" v-bind="card" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TravelCardProps } from "~/types/travel-card-props";

interface Props {
  year: number;
  cards: TravelCardProps[];
}
defineProps<Props>();
</script>
