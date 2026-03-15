<template>
  <div class="min-h-screen text-slate-50">
    <div class="mx-auto w-full space-y-5">
      <div class="px-3 md:px-5">
        <section
          class="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:mt-3"
        >
          <NuxtImg
            v-if="trip?.coverPhoto"
            :src="trip.coverPhoto"
            :alt="trip?.title"
            class="absolute inset-0 h-full w-full object-cover opacity-40"
            height="600"
            width="1200"
          />
          <div
            class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/70"
          />

          <div class="relative px-5 py-4">
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span
                class="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-white/80 backdrop-blur-xl"
              >
                {{ formatDateRange(trip?.startDate, trip?.endDate) }}
              </span>
              <span
                class="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-white/80 backdrop-blur-xl"
              >
                <Twemoji
                  v-for="(emoji, i) in trip?.countries.map(getFlagEmoji)"
                  :key="i"
                  :emoji="emoji"
                />
              </span>
            </div>

            <h1 class="mt-2 text-3xl font-semibold tracking-tight text-white">
              {{ trip?.title }}
            </h1>
            <p class="mt-1.5 max-w-prose text-sm text-white/70">
              {{ trip?.description }}
            </p>
          </div>
        </section>
      </div>
      <div class="px-0 md:px-3">
        <section class="mx-auto w-full md:max-w-xl md:space-y-5">
          <div
            v-if="!trip?.posts?.length"
            class="rounded-2xl border-b border-t border-white/10 bg-white/5 p-4 text-white/70 backdrop-blur-xl"
          >
            No posts yet.
          </div>

          <TravelPost
            v-for="post in trip.posts"
            v-else
            :key="post.slug"
            :post="post"
            :format-post-date="formatPostDate"
            class="border-slate-50/20"
            @photo-click="onPhotoClick"
          />
        </section>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="lightboxPhoto"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        @click.self="closeLightbox"
      >
        <div class="relative max-h-[90vh] max-w-[90vw]">
          <img
            :src="lightboxPhoto.photoUrl"
            :alt="lightboxPhoto.title"
            class="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-2xl object-contain"
            loading="eager"
          />
        </div>
        <button
          type="button"
          class="fixed right-4 top-4 z-10 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-sm text-white/80 transition hover:text-white"
          @click="closeLightbox"
        >
          Close
        </button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const route = useRoute();

const { data: trip } = await useAsyncData(route.path, () => {
  return queryCollection("trips")
    .order("startDate", "DESC")
    .where("slug", "=", route.params.slug)
    .first();
});

const formatDate = (date: string | undefined, withYear = true) => {
  if (!date) {
    return "-";
  }
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: withYear ? "numeric" : undefined,
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

const formatDateRange = (start?: string, end?: string) => {
  if (!start && !end) {
    return "-";
  }
  if (start && !end) {
    return formatDate(start, true);
  }
  if (!start && end) {
    return formatDate(end, true);
  }

  const startDate = new Date(start as string);
  const endDate = new Date(end as string);

  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  const sameMonth = sameYear && startDate.getMonth() === endDate.getMonth();

  if (sameMonth) {
    const month = startDate.toLocaleDateString("en-US", { month: "short" });
    const year = startDate.getFullYear();
    return `${month} ${startDate.getDate()}–${endDate.getDate()}, ${year}`;
  }

  if (sameYear) {
    const startLabel = formatDate(start, false);
    const endLabel = formatDate(end, false);
    return `${startLabel}–${endLabel}, ${startDate.getFullYear()}`;
  }

  return `${formatDate(start, true)}–${formatDate(end, true)}`;
};

const formatPostDate = (date: string | undefined) => {
  if (!date) {
    return "-";
  }
  return formatDate(date, true);
};

const getFlagEmoji = (countryCode: string) => {
  const OFFSET = 0x1f1e6 - "A".charCodeAt(0);

  return Array.from(countryCode.toUpperCase())
    .map((char) => String.fromCodePoint(OFFSET + char.charCodeAt(0)))
    .join("");
};

const fallbackTitle = computed(() => {
  if (typeof route.params.slug === "string" && route.params.slug.length > 0) {
    return route.params.slug.replace(/-/g, " ");
  }
  return "Trip";
});

const tripTitle = computed(() => trip.value?.title ?? fallbackTitle.value);

const seoTitle = computed(() => {
  return `${tripTitle.value} (${formatDate(trip.value?.startDate, true)}) - lloyd.cx`;
});

const seoOgTitle = computed(() => {
  return `${tripTitle.value} (${formatDate(trip.value?.startDate, true)})`;
});

const seoDescription = computed(() => trip.value?.description ?? "");
const seoImage = computed(() =>
  trip.value?.coverPhoto ? `https://lloyd.cx/${trip.value.coverPhoto}` : "",
);

useSeoMeta({
  title: seoTitle,
  ogTitle: seoOgTitle,
  description: seoDescription,
  ogDescription: seoDescription,
  ogImage: seoImage,
  twitterCard: "summary_large_image",
});

type LightboxPhoto = {
  photoUrl: string;
  title?: string;
};

const lightboxPhoto = ref<LightboxPhoto | null>(null);

const onPhotoClick = (photo: LightboxPhoto) => {
  lightboxPhoto.value = photo;
};

const closeLightbox = () => {
  lightboxPhoto.value = null;
};

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeyDown);
});
</script>
