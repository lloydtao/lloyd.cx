<template>
  <article
    class="overflow-hidden border-b border-t border-white/10 bg-white/5 shadow-none backdrop-blur-xl md:rounded-2xl md:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
  >
    <header class="flex items-center gap-2 px-2 py-2 md:px-3 md:py-3">
      <div
        class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10"
      >
        <NuxtImg
          src="/trips/2025-04-asia/photos/IMG_2292.jpeg"
          :alt="post?.title"
          class="h-full w-full object-cover"
          height="80"
          width="80"
        />
      </div>

      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-semibold text-white">
          {{ post?.title }}
        </p>
        <p class="truncate text-xs text-white/60">
          {{ formatPostDate(post?.datePosted) }}
        </p>
      </div>

      <div
        class="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/70"
      >
        {{ post?.photos?.length ?? 0 }} photos
      </div>
    </header>

    <div v-if="post?.description" class="mt-1 px-3 text-sm text-slate-50">
      <div class="min-w-0 flex-1 text-slate-50/90">
        <p class="whitespace-pre-line text-xs">
          {{ post.description }}
        </p>
      </div>
    </div>

    <div class="relative">
      <div
        data-carousel="true"
        class="carousel-scrollbar relative z-0 flex cursor-grab select-none gap-1.5 overflow-x-scroll bg-white/5 px-2 py-2 active:cursor-grabbing md:px-3 md:py-3"
      >
        <div
          v-for="photo in post?.photos"
          :key="photo.slug"
          class="relative aspect-[3/4] h-48 shrink-0 overflow-hidden rounded-2xl border border-slate-50/10 shadow-lg"
        >
          <button
            type="button"
            class="block h-full w-full"
            @click="emit('photo-click', photo)"
          >
            <NuxtImg
              :src="photo.photoUrl"
              :alt="photo.title"
              class="h-full w-full object-cover"
              height="800"
              width="600"
            />
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
type TripPhoto = {
  slug: string;
  photoUrl: string;
  title?: string;
};

type TripPost = {
  title?: string;
  datePosted?: string;
  description?: string;
  photos?: TripPhoto[];
};

defineProps<{
  post: TripPost;
  formatPostDate: (date: string | undefined) => string;
}>();

const emit = defineEmits<{
  "photo-click": [photo: TripPhoto];
}>();
</script>

<style scoped>
.carousel-scrollbar {
  scrollbar-color: #334155 #0f172a;
  scrollbar-width: thin;
}

.carousel-scrollbar::-webkit-scrollbar {
  height: 8px;
}

.carousel-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.75);
  border-radius: 999px;
}

.carousel-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(51, 65, 85, 0.9);
  border-radius: 999px;
}
</style>
