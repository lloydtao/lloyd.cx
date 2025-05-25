---
slug: 'markdown-blog-with-nuxt-02-list-view'
title: '2. List view'
series: 'Markdown Blog with Nuxt'
description: '-'
publishedAt: "2020-04-12T09:00:00.000Z"
cover_image: ''
canonical_url: ''
tags: 'vue, nuxt, javascript, markdown'
published: false
---

Before we get started, let's populate the blog with some dummy posts.

## Content

The text content of our blog posts must live somewhere.

We'll be leveraging the [Nuxt Content](https://content.nuxtjs.org/) module for this feature:

> *Write in a content/ directory and fetch your Markdown files through an API, acting as a Git-based Headless CMS.*

A bonus to this is that we can avoid depending on third-party services. Our blog posts live within the source code.

We'll create three dummy posts inside the `content/articles/` directory.

![Dummy blog post with placeholder text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f299uo7qekstatbf7fma.png)

## List view

The list view is an index page, which will display a link to each blog post.

### Card

We'll start with the individual post card. It's a simple box with a title and description.

These snippets are using [Tailwind](https://tailwindcss.com/), a brilliant utility-first CSS framework.

![Single card with title and description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8p16izzw0ktzpqbq2o6j.png)

```vue
<li class="mb-2 px-1">
  <div class="bg-gray-900 px-5 py-4">
    <p class="font-semibold text-white">Post title</p>
    <p class="text-gray-100 mt-3">This is the post's description.</p>
  </div>
</li>
```

### Card grid

In order to display multiple posts on the screen, we'll arrange these cards into a grid. 

Using `flex-wrap` and then wrapping the grid in a `-mx-1`, we'll get a neatly-spaced grid of cards that overflows to the next row once it gets too narrow.

![Grid of three blog post cards](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d0enckfg18xnt11t6d6a.png)

```vue
<ul class="flex flex-wrap -mx-1">
  <li class="mb-2 px-1">
    <div class="bg-gray-900 px-5 py-4">
      <p class="font-semibold text-white">Post title</p>
      <p class="text-gray-100 mt-3">This is the post's description.</p>
    </div>
  </li>
  <li class="mb-2 px-1">
    <div class="bg-gray-900 px-5 py-4">
      <p class="font-semibold text-white">Post title</p>
      <p class="text-gray-100 mt-3">This is the post's description.</p>
    </div>
  </li>
  <li class="mb-2 px-1">
    <div class="bg-gray-900 px-5 py-4">
      <p class="font-semibold text-white">Post title</p>
      <p class="text-gray-100 mt-3">This is the post's description.</p>
    </div>
  </li>
</ul>
```

We'll quickly tweak the cards' widths, so that they fill the page.

Using Tailwind's breakpoints, we can allow more cards per-row as the browser's width gets larger.

![Grid of placeholder cards with fixed widths](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0l4vy4an8yjf4ihjc1pn.png)

```vue
<li class="w-full md:w-1/2 xl:w-1/3 mb-2 px-1">
  <div class="bg-gray-900 px-5 py-4">
    <p class="font-semibold text-white">Post title</p>
    <p class="text-gray-100 mt-3">This is the post's description.</p>
  </div>
</li>
```

### Displaying content

We now need to make these cards reflect our content.

We'll grab our articles with the `$content` instance, making the list of them accessible as a data property.

![Grid of cards with content from dummy posts](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/27ajo0u8eiig7amh7d20.png)

```vue
<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
    }
  },
}
</script>
```

```vue
<ul class="flex flex-wrap -mx-1">
  <li
    v-for="article of articles"
    :key="article.title"
    class="w-full md:w-1/2 xl:w-1/3 mb-2 px-1"
  >
    <div class="bg-gray-900 bg-opacity-50 px-5 py-4">
      <p class="font-semibold text-white">{{ article.title }}</p>
      <p class="text-gray-100 mt-3">{{ article.description }}</p>
    </div>
  </li>
</ul>
```

I've inserted this component into my site, and added `bg-opacity-50` for some neat transparency.

![Grid of clickable, linked cards](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5kl9zob3hwi4obh2o609.png)

### Source code

Finally, I refactored this into modular components.

Here's the code in full:

```vue
<!-- components/Card.vue -->

<template>
  <li class="w-full md:w-1/2 xl:w-1/3 mb-2 px-1">
    <div
      class="bg-gray-900 bg-opacity-50 hover:bg-opacity-70 rounded px-5 py-4"
    >
      <h1 class="font-semibold text-white">{{ title }}</h1>
      <p class="text-gray-100 mt-3">{{ description }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Title' },
    description: { type: String, default: 'Description' },
  },
}
</script>
```

```vue
<!-- components/CardGrid.vue -->

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
```

```vue
<!-- pages/articles/index.vue -->

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
      .only(['title', 'description'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      posts,
    }
  },
}
</script>
```
