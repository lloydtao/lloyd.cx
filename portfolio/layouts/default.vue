<template>
  <div>
    <!-- Background -->
    <img
      class="absolute w-full h-full top-0 bg-gradient-to-b from-gray-800 to-gray-900"
      src="bg.svg"
    />
    <!-- Content -->
    <div class="absolute w-full h-full top-0">
      <div class="h-full">
        <!-- Components -->
        <HeaderSlim />
        <Nuxt />
        <FooterSlim />
      </div>
    </div>
  </div>
</template>

<style></style>
