<template>
  <div>
    <h1
      v-if="title"
      class="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-2xl font-semibold text-transparent"
    >
      {{ title }}
    </h1>
    <h2 v-if="subtitle" class="mt-3 text-lg leading-snug text-slate-200/90">
      <span
        class="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent"
      >
        {{ subtitle }}
      </span>
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>
