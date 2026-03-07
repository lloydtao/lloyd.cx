<template>
  <article
    class="relative isolate z-0 overflow-hidden border-b border-t border-white/10 bg-white/5 pb-3 shadow-none backdrop-blur-xl md:rounded-2xl md:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
  >
    <div class="pointer-events-none absolute inset-0 -z-[5]">
      <NuxtImg
        class="mx-auto h-64 w-full object-cover opacity-55"
        src="/images/bg-travel.svg"
        width="1920"
        height="1080"
        alt="Teal and indigo background glow graphics"
      />
    </div>
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gray-800/90 to-gray-900/90"
    />

    <div>
      <header class="flex items-center gap-2 px-3 py-3 md:px-5">
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
          <p class="truncate text-sm font-semibold text-white">Lewis Lloyd</p>
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

      <div class="relative">
        <div
          data-carousel="true"
          class="carousel-scrollbar relative z-0 flex cursor-grab select-none gap-1 overflow-x-scroll px-1 active:cursor-grabbing md:px-2"
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

      <div
        v-if="post?.description"
        class="mt-3 px-3 text-sm text-slate-50 md:px-5"
      >
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-white">
            {{ post?.title }}
          </p>
          <p class="truncate text-xs text-white/60">
            {{ formatPostDate(post?.datePosted) }}
          </p>
        </div>
        <div class="mt-2">
          <p
            v-if="!expandedDescription"
            class="text-sm leading-4 text-slate-50/90"
          >
            <span>{{ collapsedDescription }}</span
            ><span v-if="isTruncated">&hellip;&nbsp;</span>
            <button
              v-if="isTruncated"
              type="button"
              class="inline font-medium text-slate-200/80 transition hover:text-slate-50"
              @click="expandedDescription = true"
            >
              See more
            </button>
          </p>

          <div v-else>
            <p class="whitespace-pre-line text-sm leading-4 text-slate-50/90">
              {{ post.description }}
            </p>
            <button
              type="button"
              class="mt-1 block w-full text-right text-sm font-medium text-slate-200/80 transition hover:text-slate-50"
              @click="expandedDescription = false"
            >
              See less
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

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

const { post, formatPostDate } = defineProps<{
  post: TripPost;
  formatPostDate: (date: string | undefined) => string;
}>();

const emit = defineEmits<{
  "photo-click": [photo: TripPhoto];
}>();

const expandedDescription = ref(false);
const DESCRIPTION_PREVIEW_LENGTH = 120;

const normalizedDescription = computed(() =>
  (post?.description ?? "").replace(/\s+/g, " ").trim(),
);

const isTruncated = computed(
  () => normalizedDescription.value.length > DESCRIPTION_PREVIEW_LENGTH,
);

const collapsedDescription = computed(() => {
  if (!isTruncated.value) {
    return normalizedDescription.value;
  }

  const preview = normalizedDescription.value.slice(
    0,
    DESCRIPTION_PREVIEW_LENGTH,
  );
  const lastSpaceIndex = preview.lastIndexOf(" ");
  return (
    lastSpaceIndex > 0 ? preview.slice(0, lastSpaceIndex) : preview
  ).trim();
});
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
