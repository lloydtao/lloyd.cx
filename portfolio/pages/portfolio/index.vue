<template>
  <div class="container mx-auto px-5">
    <h1 class="text-4xl text-gray-100 uppercase font-black mt-5">Portfolio</h1>
    <p class="text-xl text-gray-200 mt-3">What I've been doing since 1999.</p>
    <div class="mt-5">
      <CardGrid :posts="posts" route="portfolio-slug" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('portfolio')
      .only([
        'slug',
        'title',
        'description',
        'series',
        'publishedAt',
        'published',
      ])
      .sortBy('publishedAt', 'desc')
      .fetch()
    return {
      posts,
    }
  },
}
</script>

<style></style>
