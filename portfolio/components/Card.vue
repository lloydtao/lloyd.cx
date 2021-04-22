<template>
  <li class="w-full md:w-1/2 xl:w-1/3 mb-2 px-1">
    <div class="bg-gray-900 bg-opacity-50 px-5 py-4">
      <p class="font-semibold text-white">{{ title }}</p>
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
