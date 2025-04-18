<template>
  <Post :post="post" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('portfolio', params.slug).fetch()

    return { post }
  },
}
</script>
