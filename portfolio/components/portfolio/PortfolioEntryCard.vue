<template>
  <div>
    <div
      class="flex items-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg transition hover:bg-white/20"
    >
      <div>
        <NuxtImg class="w-32" height="512" width="512" :src="logoSrc" />
      </div>
      <div class="w-full max-w-lg space-y-4">
        <ul class="flex flex-col space-y-4">
          <li>
            <div class="px-5 py-2">
              <h3 class="font-semibold text-slate-100 md:text-lg">
                {{ title }}
              </h3>
              <p class="text-sm text-slate-200 md:text-base">
                {{ subtitle }}
              </p>
              <p class="mt-2 text-xs text-slate-300 md:text-sm">
                {{ dateRange }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  dateRange: string;
  logoSrc: string;
}>();
</script>
