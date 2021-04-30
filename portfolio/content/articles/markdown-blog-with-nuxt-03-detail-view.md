---
slug: 'markdown-blog-with-nuxt-03-detail-view'
title: '3. Detail view'
series: 'Markdown Blog with Nuxt'
description: '-'
publishedAt: "2020-04-19T09:00:00.000Z"
cover_image: ''
canonical_url: ''
tags: 'vue, nuxt, javascript, markdown'
published: false
---

We need to generate a unique, dedicated page for each blog post. 

I refer to this as the **detail view**.

### Dynamic pages

Nuxt provides this through a feature called [Dynamic Pages](https://nuxtjs.org/examples/routing-dynamic-pages/), where parameters are taken from the route. 

For example, you could define a dynamic users page at `users/_id.vue`.

An array of values must be passed to Nuxt for static site generation, through Content handles this for us by looking in the `content/` directory for files.

### Slugs 

This is the unique web-friendly identifier for the post. 

It's good to stick to alphanumeric characters and dashes. We'll add this to each post now.

![Dummy blog post with slug in front matter](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/agfoc02bktbexgi6olik.png)

Next, the page itself. We're going to create `pages/articles/_slug.vue`.

This is simpler than our list view, requiring just a few lines of JavaScript in order to pull the post's content.

```vue
<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('articles', params.slug).fetch()

    return { post }
  },
}
</script>
```

Now that we have `{{ post }}` as a data property, we can display its contents with some simple mark-up.

![Detail view with title, description and content](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5zmduebq8hy3npsv8m5x.png)

```vue
<template>
  <div class="container mx-auto px-5">
    <h1 class="text-4xl text-gray-100 font-black mt-5">
      {{ post.title }}
    </h1>
    <p class="text-xl text-gray-200 mt-3">
      {{ post.description }}
    </p>
    <div
      class="bg-gray-100 rounded px-5 py-5 md:px-8 md:py-8 mt-8 mx-auto"
    >
      <NuxtContent :document="post" />
    </div>
  </div>
</template>

```

Finally, I'll touch up the styles to make it suit my website.

Using [Tailwind Typography](https://www.npmjs.com/package/@tailwindcss/typography), we can automatically add prose styles to the post.

![Detail view with Tailwind prose styles](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m4sm0mb2748g896guz9n.png)

```vue
<NuxtContent class="prose prose-sm md:prose-lg" :document="post" />
```

### Source code

I factored this into a page and a component, in order to separate the business and presentation logic.

Here's the code in full:

```vue
<!-- components/Post.vue -->

<template>
  <div class="container mx-auto px-5">
    <h1 class="text-4xl text-gray-100 font-black mt-5">
      {{ post.title }}
    </h1>
    <p class="text-xl text-gray-200 mt-3">
      {{ post.description }}
    </p>
    <div
      class="max-w-4xl bg-gray-100 rounded px-5 py-5 md:px-8 md:py-8 mt-8 mx-auto"
    >
      <NuxtContent class="prose prose-sm md:prose-lg" :document="post" />
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
}
</script>
```

```vue
<!-- pages/articles/_slug.vue -->

<template>
  <Post :post="post" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('articles', params.slug).fetch()

    return { post }
  },
}
</script>
```
