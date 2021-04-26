<template>
  <ul class="flex flex-wrap -mx-1">
    <Card
      v-for="post in posts"
      :key="post.slug"
      :route="route"
      :slug="post.slug"
      :title="post.title"
      :series="post.series"
      :description="post.description"
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
