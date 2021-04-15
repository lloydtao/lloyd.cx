<template>
  <footer class="flex flex-col sm:flex-row container mx-auto px-5 py-5 mt-3">
    <ul class="flex flex-grow mx-auto mt-5">
      <li>
        <div class="text-gray-300 text-sm font-semibold py-1">
          Lewis Lloyd &copy; {{ date }}
        </div>
      </li>
    </ul>
    <ul class="flex flex-none mx-auto mt-3">
      <li>
        <a
          href="https://github.com/LloydTao/"
          class="text-gray-300 hover:text-gray-400 text-sm block py-1 px-3"
          >GitHub</a
        >
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/LloydTao/"
          class="text-gray-300 hover:text-gray-400 text-sm block py-1 px-3"
          >LinkedIn</a
        >
      </li>
      <li>
        <a
          href="https://www.instagram.com/lloydtao/"
          class="text-gray-300 hover:text-gray-400 text-sm block py-1 px-3"
          >Instagram</a
        >
      </li>
      <li>
        <a
          href="https://twitter.com/LloydTao/"
          class="text-gray-300 hover:text-gray-500 text-sm block py-1 px-3"
          >Twitter</a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>

<style></style>
