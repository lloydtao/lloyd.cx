<template>
  <nav class="container mx-auto flex px-5 py-5 md:px-3">
    <ul class="flex flex-grow space-x-4">
      <li>
        <NuxtLink to="/" class="flex items-center space-x-3 md:mr-5">
          <NuxtImg
            class="w-8"
            src="/images/logo.png"
            width="32"
            height="32"
            alt="Pink boxes logo"
          />
          <span
            class="py-1 text-2xl font-semibold text-gray-50 duration-100 hover:text-gray-400"
            >lloyd.cx</span
          >
        </NuxtLink>
      </li>
    </ul>
    <ul class="flex items-center space-x-5">
      <li class="hidden sm:flex">
        <NuxtLink
          to="/"
          class="text px-3 py-1 font-semibold text-gray-50 duration-100 hover:text-gray-400"
          >Home</NuxtLink
        >
      </li>
      <li class="hidden sm:flex">
        <NuxtLink
          to="/travel/"
          class="text px-3 py-1 font-semibold text-gray-50 duration-100 hover:text-gray-400"
          >Travel</NuxtLink
        >
      </li>
      <li class="hidden sm:flex">
        <NuxtLink
          to="/portfolio/"
          class="text px-3 py-1 font-semibold text-gray-50 duration-100 hover:text-gray-400"
          >Portfolio</NuxtLink
        >
      </li>
    </ul>
    <ul class="flex sm:hidden">
      <li>
        <a
          href="#"
          class="absolute right-0 z-30 flex-none px-5 md:px-3"
          @click="showMenu = !showMenu"
          ><p
            class="rounded bg-gray-900 bg-opacity-10 px-2 py-2 font-semibold tracking-wide text-gray-200 hover:bg-opacity-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg></p
        ></a>
        <div
          class="absolute right-0 top-0 z-10 h-full w-full bg-black transition"
          :class="{
            'invisible opacity-0': !showMenu,
            'visible opacity-40': showMenu,
          }"
          @click="showMenu = !showMenu"
        />
        <div
          class="absolute right-0 z-20 mt-16 w-full transform px-5 transition"
          :class="{
            'pointer-events-none -translate-y-3 translate-x-2 scale-95 opacity-0':
              !showMenu,
            'pointer-events-auto translate-x-0 translate-y-0 scale-100 opacity-100':
              showMenu,
          }"
        >
          <ul
            class="flex w-full flex-col divide-y divide-slate-300 overflow-hidden rounded-lg bg-gray-100 shadow-md"
          >
            <li class="flex">
              <h3
                class="flex flex-1 bg-gray-200 px-8 py-3 font-semibold text-gray-900"
              >
                Navigation
              </h3>
            </li>
            <li class="flex border-t" @click="showMenu = !showMenu">
              <NuxtLink
                to="/"
                class="flex flex-1 px-8 py-5 text-lg font-semibold text-gray-800 duration-100 hover:bg-gray-300"
                >Home</NuxtLink
              >
            </li>
            <li class="flex" @click="showMenu = !showMenu">
              <NuxtLink
                to="/travel/"
                class="flex flex-1 px-8 py-5 text-lg font-semibold text-gray-800 duration-100 hover:bg-gray-300"
                >Travel</NuxtLink
              >
            </li>
            <li class="flex" @click="showMenu = !showMenu">
              <NuxtLink
                to="/portfolio/"
                class="flex flex-1 px-8 py-5 text-lg font-semibold text-gray-800 duration-100 hover:bg-gray-300"
                >Portfolio</NuxtLink
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showMenu = ref<boolean>(false);
</script>

<style></style>
