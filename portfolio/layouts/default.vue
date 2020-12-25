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
    <!-- Snow -->
    <Snowf
      :amount="64"
      :size="5"
      :speed="0.5"
      :wind="0.5"
      :opacity="0.8"
      :swing="0.5"
      :resize="true"
      color="#fff"
    />
    <!-- Content -->
    <div class="absolute w-full top-0 md:px-2">
      <HeaderSlim />
      <Nuxt />
      <FooterSlim />
    </div>
  </div>
</template>

<script>
import Snowf from 'vue-snowf'

export default {
  components: {
    Snowf,
  },
}
</script>

<style>
body {
  @apply bg-gray-900;
}
</style>
