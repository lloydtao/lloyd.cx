<template>
  <div class="bg-gray-900">
    <div class="absolute h-full bg-gradient-to-b from-gray-800 to-gray-900">
      <NuxtImg
        class="top-0 -mt-64 h-full w-auto md:-mt-48 lg:-mt-16 xl:mt-0"
        src="/images/bg.svg"
        width="1920"
        height="1080"
        alt="Blue and purple background graphics"
      />
    </div>
    <div class="absolute top-0 h-full w-full md:px-2">
      <NavigationBar />
      <slot />
      <NavigationFooter />
    </div>
  </div>
</template>
