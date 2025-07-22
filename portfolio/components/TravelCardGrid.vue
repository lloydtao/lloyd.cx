<template>
  <section>
    <div
      class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 xl:grid-cols-6"
    >
      <TravelCard v-for="card in cards" :key="card.title" v-bind="card" />
      <TravelCardViewAll v-if="displayViewAll" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TravelCardProps } from "~/types/travel-card-props";

interface Props {
  cards: TravelCardProps[];
  displayViewAll?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  displayViewAll: false,
});
</script>
