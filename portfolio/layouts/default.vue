<template>
  <div>
    <!-- Background -->
    <div class="absolute h-full bg-gradient-to-b from-gray-800 to-gray-900">
      <img
        class="h-full w-auto top-0 -mt-48 md:-mt-32 lg:-mt-8 xl:mt-0"
        src="~/assets/img/bg.svg"
      />
    </div>
    <!-- Content -->
    <div class="absolute w-full top-0">
      <HeaderSlim />
      <Nuxt />
      <FooterSlim />
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-900;
}
</style>
