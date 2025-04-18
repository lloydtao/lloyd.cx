<template>
  <footer class="container mx-auto flex flex-col px-5 py-8 sm:flex-row">
    <ul class="mx-auto mt-5 flex flex-grow">
      <li>
        <div class="py-1 text-sm font-semibold text-gray-300">
          Lewis Lloyd &copy; {{ date }}
        </div>
      </li>
    </ul>
    <ul class="mx-auto mt-3 flex flex-none">
      <li>
        <a
          href="https://github.com/LloydTao/"
          class="block px-3 py-1 text-sm text-gray-300 hover:text-gray-400"
          >GitHub</a
        >
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/LloydTao/"
          class="block px-3 py-1 text-sm text-gray-300 hover:text-gray-400"
          >LinkedIn</a
        >
      </li>
      <li>
        <a
          href="https://www.instagram.com/lloydtao/"
          class="block px-3 py-1 text-sm text-gray-300 hover:text-gray-400"
          >Instagram</a
        >
      </li>
      <li>
        <a
          href="https://twitter.com/LloydTao/"
          class="block px-3 py-1 text-sm text-gray-300 hover:text-gray-500"
          >Twitter</a
        >
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

// reactive current year
const date = ref<number>(new Date().getFullYear());
</script>
