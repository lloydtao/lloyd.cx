<template>
  <nav class="flex container mx-auto px-5 py-5">
    <ul class="flex flex-grow space-x-4">
      <li>
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 text-gray-700 md:mr-5"
        >
          <img
            class="w-8"
            src="~/assets/img/logo.png?webp"
            width="32"
            height="32"
            alt="Pink boxes logo"
          />
          <span
            class="text-gray-200 hover:text-gray-300 text-2xl font-semibold py-1"
            >lloyd.cx</span
          >
        </NuxtLink>
      </li>
    </ul>
    <ul class="flex items-center space-x-5">
      <li class="hidden sm:flex">
        <NuxtLink
          to="/"
          class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
          >Home</NuxtLink
        >
      </li>
      <li class="hidden sm:flex">
        <NuxtLink
          to="/portfolio"
          class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
          >Portfolio</NuxtLink
        >
      </li>
      <li class="hidden sm:flex">
        <NuxtLink
          to="/articles"
          class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
          >Articles</NuxtLink
        >
      </li>
    </ul>
    <ul class="flex sm:hidden">
      <li>
        <a
          href="#"
          class="flex-none absolute right-0 px-5 z-30"
          @click="showMenu = !showMenu"
          ><p
            class="text-gray-200 font-semibold tracking-wide hover:bg-gray-900 hover:bg-opacity-30 rounded px-2 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg></p
        ></a>
        <div
          class="absolute top-0 right-0 z-10 h-screen w-full bg-black transition"
          :class="{
            'invisible opacity-0': !showMenu,
            'visible opacity-40': showMenu,
          }"
          @click="showMenu = !showMenu"
        ></div>
        <div
          class="absolute right-0 z-20 w-full px-5 mt-16 transition transform"
          :class="{
            'pointer-events-none opacity-0 -translate-y-3 translate-x-2 scale-95': !showMenu,
            'pointer-events-auto opacity-100 translate-y-0 translate-x-0 scale-100': showMenu,
          }"
        >
          <ul
            class="flex flex-col bg-gray-100 w-full rounded shadow-md overflow-hidden"
          >
            <li class="flex">
              <h3 class="flex flex-1 text-gray-600 font-semibold px-5 py-4">
                Navigation
              </h3>
            </li>
            <li class="flex border-t">
              <NuxtLink
                to="/"
                class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                >Home</NuxtLink
              >
            </li>
            <li class="flex">
              <NuxtLink
                to="/portfolio"
                class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                >Portfolio</NuxtLink
              >
            </li>
            <li class="flex">
              <NuxtLink
                to="/articles"
                class="flex flex-1 text-lg text-gray-700 hover:bg-gray-200 font-semibold px-8 py-4"
                >Articles</NuxtLink
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

<style></style>
