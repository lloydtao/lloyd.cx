<template>
  <Teleport to="body">
    <div
      v-if="photo"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      @click.self="emit('close')"
    >
      <div class="relative max-h-[90vh] max-w-[90vw]">
        <img
          :src="photo.photoUrl"
          :alt="photo.title"
          class="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-2xl object-contain"
          loading="eager"
        />
      </div>
      <button
        type="button"
        class="fixed right-4 top-4 z-10 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-sm text-white/80 transition hover:text-white"
        @click="emit('close')"
      >
        Close
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { TravelPhoto } from "~/types/travel-card-props";

defineProps<{
  photo: TravelPhoto | null;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>
