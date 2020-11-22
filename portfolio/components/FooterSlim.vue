<template>
  <footer class="absolute w-full bottom-0 pb-6">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-start justify-center">
            <li>
              <a class="text-gray-300 text-sm font-semibold py-1"
                >Lewis Lloyd &copy; {{ date }}</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <a
                href="https://github.com/LloydTao/"
                class="text-gray-300 hover:text-gray-500 text-sm block py-1 px-3"
                >GitHub</a
              >
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/LloydTao/"
                class="text-gray-300 hover:text-gray-300 text-sm block py-1 px-3"
                >LinkedIn</a
              >
            </li>
            <li>
              <a
                href="https://www.instagram.com/lloydtao/"
                class="text-gray-300 hover:text-gray-500 text-sm block py-1 px-3"
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
        </div>
      </div>
    </div>
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
