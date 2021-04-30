<template>
  <div class="container mx-auto px-5">
    <h1 class="text-4xl text-gray-100 font-black mt-5">
      {{ post.title }}
    </h1>
    <p class="text-xl text-gray-200 mt-3">
      {{ formatDate(post.publishedAt) }} · {{ post.series }}
    </p>
    <p class="text-xl text-gray-200 mt-3">
      {{ post.description }}
    </p>
    <div class="bg-gray-100 rounded px-5 py-5 md:px-8 md:py-8 mt-8 mx-auto">
      <NuxtContent
        class="prose prose-sm md:prose-lg mx-auto"
        :document="post"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
