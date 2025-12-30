<template>
  <div class="container mx-auto max-w-6xl sm:py-5">
    <div class="text-slate-50">
      <header
        class="relative h-64 bg-cover bg-center"
        :style="'background-image: url(&quot;' + trip?.coverPhoto + '&quot;);'"
      >
        <div class="absolute inset-0 bg-black/50"></div>
        <div
          class="relative mx-auto flex h-full items-center justify-between px-5"
        >
          <div>
            <h1 class="text-4xl font-bold">{{ trip?.title }}</h1>
            <div class="mt-2 flex space-x-1 text-sm">
              <span
                class="rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-[10px]"
              >
                {{ formatStartDate(trip?.startDate) }} -
                {{ formatEndDate(trip?.endDate) }}
              </span>
              <span
                class="flex items-center space-x-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm drop-shadow-sm backdrop-blur-[10px]"
              >
                <Twemoji
                  v-for="(emoji, i) in trip?.countries.map(getFlagEmoji)"
                  :key="i"
                  :emoji="emoji"
                />
              </span>
            </div>
          </div>
        </div>
      </header>

      <main class="mx-auto -mt-16 max-w-6xl pb-12">
        <div class="px-5">
          <!-- Trip summary -->
          <section
            class="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <!-- subtle glow -->
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
              aria-hidden="true"
            />

            <div class="relative">
              <p class="text-base leading-relaxed text-white/90">
                {{ trip?.description }}
              </p>

              <!-- Tags -->
              <div
                v-if="trip?.tags?.length"
                class="mt-5 flex flex-wrap gap-2"
                aria-label="Trip tags"
              >
                <span
                  v-for="(tag, i) in trip.tags"
                  :key="`${tag}-${i}`"
                  class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-xl transition hover:bg-white/10"
                >
                  #{{ tag }}
                </span>
              </div>

              <!-- Stats -->
              <div class="mt-7 flex flex-wrap gap-6">
                <div
                  class="min-w-[120px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-xl"
                >
                  <div class="text-3xl font-semibold tracking-tight text-white">
                    {{ trip?.posts?.length ?? 0 }}
                  </div>
                  <div
                    class="mt-0.5 text-xs uppercase tracking-wider text-white/60"
                  >
                    Posts
                  </div>
                </div>
                <!-- Add more stat blocks later if you want (photos, likes, etc.) -->
              </div>
            </div>
          </section>
        </div>

        <!-- Posts -->
        <section class="mt-8">
          <div class="mb-3 flex items-end justify-between px-5">
            <h2 class="text-2xl font-semibold tracking-tight text-white">
              Posts
            </h2>
          </div>

          <div
            v-if="!trip.posts?.length"
            class="mx-1 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70 backdrop-blur-xl"
          >
            No posts yet.
          </div>

          <!-- List -->
          <div v-else class="space-y-8 sm:px-5">
            <details
              v-for="post in trip.posts"
              :key="post.slug"
              class="hover:bg-white/7 group overflow-hidden border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.30)] backdrop-blur-xl transition hover:border-white/20 sm:rounded-2xl"
            >
              <summary
                class="cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden"
              >
                <!-- Header -->
                <div class="px-5 py-5">
                  <div class="flex items-start justify-between gap-4">
                    <div class="min-w-0">
                      <h3
                        class="truncate text-xl font-semibold tracking-tight text-white"
                      >
                        {{ post?.title }}
                      </h3>
                      <p class="mt-1 text-sm leading-relaxed text-white/70">
                        {{ post?.description }}
                      </p>
                    </div>

                    <div class="flex shrink-0 items-center gap-3">
                      <div
                        class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-white/70 backdrop-blur-xl"
                      >
                        <div class="text-base font-semibold text-white">
                          {{ post?.photos?.length ?? 0 }}
                        </div>
                        photos
                      </div>

                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-5 w-5 text-white/70 transition-transform duration-200 group-open:rotate-180"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="border-t border-white/10" />

                <!-- PREVIEW ROW (visible when closed) -->
                <div class="relative group-open:hidden">
                  <div class="max-h-32 overflow-hidden">
                    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                      <PhotoCard
                        v-for="photo in post.photos"
                        :key="photo.slug"
                        v-bind="photo"
                        class="transition group-hover:opacity-95"
                      />
                    </div>
                  </div>

                  <div
                    class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </summary>

              <!-- FULL CONTENT (only visible when open) -->
              <div class="hidden border-white/10 group-open:block">
                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  <PhotoCard
                    v-for="photo in post.photos"
                    :key="photo.slug"
                    v-bind="photo"
                    class="transition group-hover:opacity-95"
                  />
                </div>
              </div>
            </details>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import PhotoCard from "~/components/PhotoCard.vue";

const route = useRoute();

const { data: trip } = await useAsyncData(route.path, () => {
  return queryCollection("trips")
    .order("startDate", "DESC")
    .where("slug", "=", route.params.slug)
    .first();
});

const formatStartDate = (date: string | undefined) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
  };
  if (date) {
    return new Date(date).toLocaleDateString("en", options);
  }
  return "-";
};

const formatEndDate = (date: string | undefined) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  if (date) {
    return new Date(date).toLocaleDateString("en", options);
  }
  return "-";
};

const getFlagEmoji = (countryCode: string) => {
  const OFFSET = 0x1f1e6 - "A".charCodeAt(0);

  return Array.from(countryCode.toUpperCase())
    .map((char) => String.fromCodePoint(OFFSET + char.charCodeAt(0)))
    .join("");
};

useSeoMeta({
  title:
    trip?.value?.title +
    " (" +
    formatEndDate(trip?.value?.startDate) +
    ") • lloyd.cx",
  ogTitle:
    trip?.value?.title + " (" + formatEndDate(trip?.value?.startDate) + ")",
  description: trip?.value?.description,
  ogDescription: trip?.value?.description,
  ogImage: "https://lloyd.cx/" + trip?.value?.coverPhoto,
  twitterCard: "summary_large_image",
});
</script>
