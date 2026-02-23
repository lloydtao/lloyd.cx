<template>
  <footer
    class="container mx-auto flex flex-col items-center px-2 py-8 sm:flex-row md:px-3"
  >
    <ul class="mx-auto mt-5 flex flex-grow">
      <li>
        <div class="py-1 text-sm text-gray-300">
          Lewis Lloyd &copy; {{ date }}
        </div>
      </li>
    </ul>
    <ul class="mx-auto mt-3 flex flex-none space-x-5">
      <li>
        <NuxtLink
          href="https://github.com/lloydtao"
          class="text-sm font-semibold text-gray-50 duration-100 hover:text-gray-400"
          external
        >
          GitHub
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="https://www.instagram.com/lloydtao/"
          class="text-sm font-semibold text-gray-50 duration-100 hover:text-gray-400"
          external
        >
          Instagram
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="https://www.linkedin.com/in/lloydtao/"
          class="text-sm font-semibold text-gray-50 duration-100 hover:text-gray-400"
          external
        >
          LinkedIn
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

// reactive current year
const date = ref<number>(new Date().getFullYear());
</script>
