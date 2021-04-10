<template>
  <nav
    class="w-full flex flex-wrap items-center justify-between px-2 pt-3 mb-1 md:mb-4 navbar-expand-lg"
  >
    <div class="container mx-auto">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mt-2">
          <ul class="flex flex-wrap list-none md:justify-start justify-center">
            <li class="flex items-center space-x-3">
              <img
                class="w-8"
                src="~/assets/img/logo.png?webp"
                width="32"
                height="32"
                alt="Pink boxes logo"
              />
              <NuxtLink
                to="/"
                class="text-gray-200 hover:text-gray-400 text-2xl font-semibold py-1"
                >lloyd.cx</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="w-full md:w-8/12 mt-2">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/portfolio"
                class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
                >Portfolio</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/articles"
                class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
                >Articles</NuxtLink
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
