<template>
  <div class="container mx-auto px-3 py-5">
    <div>
      <div>
        <h1 class="text-2xl font-semibold text-slate-50">Portfolio</h1>
      </div>
      <div class="mt-5">
        <h1 class="text-xl font-semibold text-slate-100">Experience</h1>
      </div>
      <div class="mt-3">
        <div
          class="flex items-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg transition hover:bg-white/20"
        >
          <div>
            <NuxtImg
              class="w-32"
              height="512"
              width="512"
              src="/portfolio/deliveroo/logo.jpg"
            />
          </div>
          <div class="w-full max-w-lg space-y-4">
            <ul class="flex flex-col space-y-4">
              <li>
                <div class="px-5 py-2">
                  <h3 class="font-semibold text-slate-100 md:text-lg">
                    Deliveroo
                  </h3>
                  <p class="text-sm text-slate-200 md:text-base">
                    Software Engineer II
                  </p>
                  <p class="mt-2 text-xs text-slate-300 md:text-sm">
                    July 2024 – Present
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Portfolio • lloyd.cx",
  ogTitle: "Portfolio",
  description: "Software Engineer II, Production Platforms at Deliveroo",
  ogDescription: "Software Engineer II, Production Platforms at Deliveroo",
  ogImage: "https://lloyd.cx/images/lloyd.jpg",
  twitterCard: "summary_large_image",
});
</script>
