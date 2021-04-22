<template>
  <ul class="flex flex-wrap -mx-1">
    <Card
      v-for="post in posts"
      :key="post.title"
      :title="post.title"
      :description="post.description"
    />
  </ul>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
