<template>
  <div>
    <!-- Backgrounds -->
    <section class="absolute w-full h-full">
      <div class="h-full bg-gradient-to-b from-gray-800 to-gray-900" />
    </section>
    <section class="absolute w-full h-full">
      <div
        class="h-full"
        :style="{}"
        style="
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url('bg.svg');
        "
      />
    </section>
    <!-- Components -->
    <HeaderSlim />
    <Nuxt />
    <FooterSlim />
  </div>
</template>

<style></style>
