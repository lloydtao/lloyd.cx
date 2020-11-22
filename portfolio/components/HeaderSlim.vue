<template>
  <nav
    class="w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-start justify-center">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-200 hover:text-gray-400 text-xl font-semibold py-1"
                >lloyd.cx</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-200 hover:text-gray-400 text-sm font-semibold py-1 px-3"
                >Portfolio</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="text-gray-200 hover:text-gray-400 text-sm font-semibold py-1 px-3"
                >Open Source</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="text-gray-200 hover:text-gray-400 text-sm font-semibold py-1 px-3"
                >Lectures</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
