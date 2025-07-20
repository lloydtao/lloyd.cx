<template>
  <NuxtLink id="travel-card" to="/travel/">
    <div
      class="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-50/30 bg-gradient-to-br from-slate-500/70 via-slate-500/30 to-slate-900/50 shadow-lg"
    >
      <div
        class="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-slate-900/20 opacity-0 transition duration-100 group-hover:opacity-100 group-hover:shadow-[0_0_25px_4px_rgba(255,255,255,0.6)]"
      ></div>
      <div
        class="flex h-full w-full flex-col items-center justify-center bg-slate-900/10 px-3 py-2 backdrop-blur-sm md:px-5 md:py-3"
      >
        <div class="text-slate-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="mt-1">
          <h3 class="font-semibold text-slate-50 drop-shadow-sm">View all</h3>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
