<template>
  <ul class="flex flex-wrap -mx-1">
    <Card
      v-for="post in posts"
      v-show="post.published"
      :key="post.slug"
      :route="route"
      :slug="post.slug"
      :title="post.title"
      :series="post.series"
      :description="post.description"
      :published-at="post.publishedAt"
    />
  </ul>
</template>

<script>
export default {
  props: {
    route: { type: String, default: 'page-slug' },
    posts: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
