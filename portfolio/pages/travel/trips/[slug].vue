<template>
  <div class="min-h-screen text-slate-50">
    <div class="mx-auto w-full space-y-4">
      <div class="px-2 md:px-3">
      <section
        class="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl mt-3"
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
          <div class="flex flex-wrap items-center gap-1.5 text-xs">
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

      <section class="mx-auto w-full md:max-w-3xl space-y-4">
        <div
          v-if="!trip?.posts?.length"
          class="rounded-2xl border-t border-b border-white/10 bg-white/5 p-4 text-white/70 backdrop-blur-xl"
        >
          No posts yet.
        </div>

        <article
          v-for="post in trip.posts"
          v-else
          :key="post.slug"
          class="overflow-hidden border-t border-b border-white/10 bg-white/5 shadow-none backdrop-blur-xl md:rounded-2xl md:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        >
          <header class="flex items-center gap-2 p-3">
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

          <div class="relative">
            <div
              data-carousel="true"
              class="carousel-scrollbar relative z-0 flex cursor-grab select-none gap-1.5 overflow-x-scroll bg-white/5 px-2 py-2 active:cursor-grabbing"
            >
              <div
                v-for="photo in post?.photos"
                :key="photo.slug"
                class="relative aspect-[4/5] h-52 shrink-0 overflow-hidden rounded-lg"
              >
                <button
                  type="button"
                  class="block h-full w-full"
                  @click="onPhotoClick(photo, $event)"
                >
                  <NuxtImg
                    :src="photo.photoUrl"
                    :alt="photo.title"
                    class="h-full w-full object-cover"
                    height="400"
                    width="300"
                  />
                </button>
              </div>
            </div>

            <div
              class="pointer-events-none absolute bottom-3 right-0 top-0 z-10 w-6 bg-gradient-to-l from-slate-950/80 via-slate-950/40 to-transparent transition-opacity"
            />
          </div>

          <div
            v-if="post?.description"
            class="border-t border-white/10 px-2 md:px-3 py-2 text-sm text-white/65"
          >
            {{ post.description }}
          </div>
        </article>
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
          <NuxtImg
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
