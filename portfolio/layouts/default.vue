<template>
  <div>
    <div
      class="absolute h-full w-full bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <NuxtImg
        class="top-0 mx-auto h-64 w-full"
        src="/images/bg.svg"
        width="1920"
        height="1080"
        alt="Blue and purple background graphics"
      />
    </div>
    <div class="absolute top-0 h-full w-full">
      <NavigationBar />
      <slot />
      <NavigationFooter />
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-900;
}
</style>
