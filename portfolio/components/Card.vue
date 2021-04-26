<template>
  <li class="w-full md:w-1/2 xl:w-1/3 mb-2 px-1">
    <NuxtLink :to="{ name: route, params: { slug: slug } }">
      <div
        class="bg-gray-900 bg-opacity-50 hover:bg-opacity-70 rounded px-5 py-4"
      >
        <h1 class="font-semibold text-white">{{ title }}</h1>
        <h2 class="text-sm text-gray-200">{{ series }}</h2>
        <p class="text-gray-100 mt-3">{{ description }}</p>
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
  },
}
</script>
