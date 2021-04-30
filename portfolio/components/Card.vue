<template>
  <li class="w-full md:w-1/2 xl:w-1/3 mb-2 px-1">
    <NuxtLink :to="{ name: route, params: { slug: slug } }">
      <div
        class="h-full bg-gray-900 bg-opacity-50 hover:bg-opacity-70 rounded px-5 py-4"
      >
        <h1 class="font-semibold text-white">{{ title }}</h1>
        <h2 class="text-sm text-gray-300">
          {{ formatDate(publishedAt) }} · {{ series }}
        </h2>
        <img
          :src="coverImage"
          class="w-full object-cover mt-3"
          style="max-height: 320px"
        />
        <p class="text-gray-100 mt-5 overflow-hidden">
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    route: { type: String, default: 'page-slug' },
    slug: { type: String, default: 'slug' },
    title: { type: String, default: 'Title' },
    series: { type: String, default: 'Series' },
    description: { type: String, default: 'Description' },
    coverImage: { type: String, default: 'h' },
    publishedAt: { type: String, default: '2000-01-01T00:00:00.000Z' },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
