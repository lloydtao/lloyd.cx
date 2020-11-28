<template>
  <div>
    <!-- Background -->
    <div class="absolute h-full bg-gradient-to-b from-gray-800 to-gray-900">
      <img
        class="h-full w-auto top-0 -mt-64 md:-mt-48 lg:-mt-16 xl:mt-0"
        src="~/assets/img/bg.svg"
        width="1920"
        height="1080"
        alt="Blue and purple background graphics"
      />
    </div>
    <!-- Content -->
    <div class="absolute w-full top-0 md:px-2">
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
