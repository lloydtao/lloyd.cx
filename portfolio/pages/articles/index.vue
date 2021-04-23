<template>
  <div class="container mx-auto px-5">
    <h1 class="text-4xl text-gray-100 uppercase font-black mt-5">Articles</h1>
    <p class="text-xl text-gray-200 mt-3">
      My explorations into tech, software and engineering.
    </p>
    <div class="mt-5">
      <CardGrid :posts="posts" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('articles')
      .only(['slug', 'title', 'description'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      posts,
    }
  },
}
</script>

<style></style>
