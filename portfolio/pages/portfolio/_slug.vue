<template>
  <div class="container mx-auto px-5">
    <h1 class="text-4xl text-gray-100 font-black mt-5">
      {{ post.title }}
    </h1>
    <p class="text-xl text-gray-200 mt-3">
      {{ post.description }}
    </p>
    <div class="max-w-4xl bg-gray-100 rounded px-8 py-8 mt-8 mx-auto">
      <NuxtContent class="prose prose-sm md:prose-lg" :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('portfolio', params.slug).fetch()

    return { post }
  },
}
</script>
