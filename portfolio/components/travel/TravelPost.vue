<template>
  <article
    class="relative isolate z-0 overflow-hidden rounded-[28px] border border-white/15 bg-slate-950/90 shadow-2xl backdrop-blur-2xl"
  >
    <div
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] [clip-path:inset(0_round_28px)]"
    >
      <div
        class="absolute -inset-40 bg-[radial-gradient(circle_at_10%_50%,rgba(0,200,200,0.5),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(135,80,255,0.4),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(30,120,255,0.3),transparent_30%)] blur-2xl"
      />
    </div>
    <div
      class="pointer-events-none absolute inset-0 z-0 rounded-[inherit] bg-gradient-to-br from-white/15 via-white/[0.03] to-white/10"
    />

    <div class="relative z-10">
      <header class="flex items-center gap-2 px-3 py-3">
        <div
          class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10"
        >
          <NuxtImg
            src="/images/lloyd-sg.jpg"
            :alt="post?.title"
            class="h-full w-full object-cover"
            height="80"
            width="80"
          />
        </div>

        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-white">Lewis Lloyd</p>
          <p class="truncate text-xs text-white/60">
            {{ formatTravelPostDate(post?.datePosted) }}
          </p>
        </div>

        <div
          class="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/70"
        >
          {{ post?.photos?.length ?? 0 }} photos
        </div>
      </header>
      <div v-if="post?.description" class="px-3 text-sm text-slate-50">
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-slate-50/90">
            {{ post?.title }}
          </p>
        </div>
        <div class="mt-1">
          <p
            v-if="!expandedDescription"
            class="whitespace-pre-line text-sm leading-4 text-slate-200/90"
          >
            <span>{{ collapsedDescriptionVisible }}</span>
            <span
              v-if="collapsedDescriptionFadeWithEllipsis"
              class="description-fade-tail"
            >
              {{ collapsedDescriptionFadeWithEllipsis }}
            </span>
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
            <p class="whitespace-pre-line text-sm leading-4 text-slate-200/90">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="relative mt-3 pb-3">
        <div
          data-carousel="true"
          class="carousel-scrollbar relative z-0 flex cursor-grab select-none gap-1 overflow-x-scroll px-2 active:cursor-grabbing"
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
                :modifiers="{ rotate: null }"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="mx-3 border-t border-slate-50/10"></div>
      <div class="py-1">
        <div class="flex items-center space-x-1">
          <button
            class="mx-auto rounded-full px-3 py-2 text-slate-500 duration-100 hover:bg-slate-200/10 hover:text-slate-50"
          >
            <div class="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4"
              >
                <path
                  d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z"
                />
                <path
                  d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"
                />
              </svg>
              <p class="text-sm">Share</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { TravelPhoto, TravelPost } from "~/types/travel-card-props";
import { formatTravelPostDate } from "~/utils/travel-format";

const { post } = defineProps<{
  post: TravelPost;
}>();

const emit = defineEmits<{
  "photo-click": [photo: TravelPhoto];
}>();

const expandedDescription = ref(false);
const DESCRIPTION_PREVIEW_LENGTH = 105;
const DESCRIPTION_FADE_WORDS = 8;

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

const collapsedDescriptionWords = computed(() =>
  collapsedDescription.value.split(" ").filter(Boolean),
);

const collapsedDescriptionVisible = computed(() => {
  if (!isTruncated.value) {
    return collapsedDescription.value;
  }

  const fadeStartIndex = Math.max(
    collapsedDescriptionWords.value.length - DESCRIPTION_FADE_WORDS,
    0,
  );

  return collapsedDescriptionWords.value.slice(0, fadeStartIndex).join(" ");
});

const collapsedDescriptionFade = computed(() => {
  if (!isTruncated.value) {
    return "";
  }

  const fadeStartIndex = Math.max(
    collapsedDescriptionWords.value.length - DESCRIPTION_FADE_WORDS,
    0,
  );
  const fadeWords = collapsedDescriptionWords.value
    .slice(fadeStartIndex)
    .join(" ");

  return fadeWords ? ` ${fadeWords}` : "";
});

const collapsedDescriptionFadeWithEllipsis = computed(() => {
  if (!isTruncated.value) {
    return "";
  }

  return `${collapsedDescriptionFade.value}\u2026 `;
});
</script>

<style scoped>
.description-fade-tail {
  color: transparent;
  background: linear-gradient(
    90deg,
    rgba(226, 232, 240, 0.9) 0%,
    rgba(226, 232, 240, 0.82) 30%,
    rgba(226, 232, 240, 0.62) 65%,
    rgba(226, 232, 240, 0.5) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
}

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
