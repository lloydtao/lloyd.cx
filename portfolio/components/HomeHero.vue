<template>
  <section class="relative isolate mx-auto max-w-2xl">
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
    />
    <div class="relative z-10 mx-auto flex flex-col items-center text-center">
      <NuxtImg
        class="h-48 w-48 overflow-hidden rounded-full bg-slate-200/10 shadow-xl ring-2 ring-white/15 sm:h-64 sm:w-64"
        src="/images/lloyd-sg.jpg"
        width="512"
        height="512"
        alt="Merlion Park, Singapore"
      />
      <h1
        class="mt-8 bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-4xl font-black uppercase text-transparent sm:text-5xl"
      >
        Lewis Lloyd
      </h1>
      <p
        class="mt-2 bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text text-transparent"
      >
        Software Engineer II, Messaging at Deliveroo
      </p>
      <p class="mt-5 text-lg leading-snug text-slate-200/90 sm:text-xl">
        <span
          class="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent"
        >
          Specialist in full-stack, cloud-native web apps and real-time data
          streaming.
        </span>
      </p>
    </div>
  </section>
</template>
