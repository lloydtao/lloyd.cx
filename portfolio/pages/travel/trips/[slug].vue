<template>
  <div class="min-h-screen text-slate-50">
    <div class="mx-auto w-full max-w-xl">
      <div class="px-2">
        <TripHero :trip="trip" />
      </div>
      <div class="mt-1">
        <section class="mx-auto w-full">
          <div class="space-y-1 px-2">
            <TravelEmptyState v-if="!trip?.posts?.length" />

            <TravelPost
              v-for="post in trip.posts"
              v-else
              :key="post.slug"
              :post="post"
              @photo-click="onPhotoClick"
            />
          </div>
        </section>
      </div>
    </div>

    <TravelPhotoLightbox :photo="lightboxPhoto" @close="closeLightbox" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import TravelEmptyState from "~/components/travel/TravelEmptyState.vue";
import TravelPhotoLightbox from "~/components/travel/TravelPhotoLightbox.vue";
import TravelPost from "~/components/travel/TravelPost.vue";
import TripHero from "~/components/travel/TripHero.vue";
import type { TravelPhoto } from "~/types/travel-card-props";
import { formatTripDate } from "~/utils/travel-format";

const route = useRoute();

const { data: trip } = await useAsyncData(route.path, () => {
  return queryCollection("trips")
    .order("startDate", "DESC")
    .where("slug", "=", route.params.slug)
    .first();
});

const fallbackTitle = computed(() => {
  if (typeof route.params.slug === "string" && route.params.slug.length > 0) {
    return route.params.slug.replace(/-/g, " ");
  }
  return "Trip";
});

const tripTitle = computed(() => trip.value?.title ?? fallbackTitle.value);

const seoTitle = computed(() => {
  return `${tripTitle.value} (${formatTripDate(trip.value?.startDate, true)}) - lloyd.cx`;
});

const seoOgTitle = computed(() => {
  return `${tripTitle.value} (${formatTripDate(trip.value?.startDate, true)})`;
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

const lightboxPhoto = ref<TravelPhoto | null>(null);

const onPhotoClick = (photo: TravelPhoto) => {
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
