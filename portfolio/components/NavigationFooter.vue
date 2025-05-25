<template>
  <footer
    class="container mx-auto flex flex-col items-center px-3 py-8 sm:flex-row"
  >
    <ul class="mx-auto mt-5 flex flex-grow">
      <li>
        <div class="py-1 text-sm text-gray-300">
          Lewis Lloyd &copy; {{ date }}
        </div>
      </li>
    </ul>
    <ul class="mx-auto mt-3 flex flex-none">
      <li>
        <NuxtLink
          href="https://www.linkedin.com/in/LloydTao/"
          class="px-3 py-1 text-sm font-semibold text-gray-50 duration-100 hover:text-gray-400"
          external
        >
          LinkedIn
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          href="https://www.instagram.com/lloydtao/"
          class="px-3 py-1 text-sm font-semibold text-gray-50 duration-100 hover:text-gray-400"
          external
        >
          Instagram
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
