---
slug: 'markdown-blog-with-nuxt-04-linking-to-posts'
title: '4. Linking to posts'
series: 'Building a Markdown Blog with Nuxt'
description: '-'
publishedAt: "2020-04-26T09:00:00.000Z"
cover_image: ''
canonical_url: ''
tags: 'vue, nuxt, javascript, markdown'
published: 'true'
---

As a final step, we need to link the cards in the list view to the respective posts.

This involves creating hyperlinks based on those **slugs** we just added.

### Cards

We're going to make each card be a clickable link to its post.

Typically, we would use an `<a>` tag here, but Nuxt has the `<NuxtLink>` component for optimising navigation for internal links.

It's just a small performance tweak. In short, it uses the client's cache instead of the hitting the hosting provider again. You can read more about this [here](https://nuxtjs.org/docs/2.x/concepts/static-site-generation/#step-3-browser-to-browser).

```vue
<!-- components/Card.vue -->

<template>
  <li class="w-full md:w-1/2 xl:w-1/3 mb-2 px-1">
    <NuxtLink :to="{ name: 'articles-slug', params: { slug: slug } }">
      <div
        class="bg-gray-900 bg-opacity-50 hover:bg-opacity-70 rounded px-5 py-4"
      >
        <h1 class="font-semibold text-white">{{ title }}</h1>
        <p class="text-gray-100 mt-3">{{ description }}</p>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    slug: { type: String, default: 'slug' },
    title: { type: String, default: 'Title' },
    description: { type: String, default: 'Description' },
  },
}
</script>
```

### Card grid

The card grid needs to pass the `slug` to the card. Everything else stays the same.

```vue
<!-- components/CardGrid.vue -->

<template>
  <ul class="flex flex-wrap -mx-1">
    <Card
      v-for="post in posts"
      :key="post.slug"
      :slug="post.slug"
      :title="post.title"
      :description="post.description"
    />
  </ul>
</template>

<script>
...
</script>
```

### List view

Finally, the list view needs to pull each post's `slug`, alongside its `title` and `description`.

Everything else stays the same.

```vue
<!-- pages/articles/index.vue -->

<template>
...
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
```

We should now see each cards linking to its respective article.

![List view with clickable, hyperlinked card](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7biwk2qh21nj0j2g5cdk.png)
Perfect!
