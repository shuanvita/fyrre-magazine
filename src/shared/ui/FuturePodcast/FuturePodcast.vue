<script setup lang="ts">
import type { IFuturePodcast } from './FuturePodcast.type'

const props = defineProps<IFuturePodcast>()
</script>

<template>
  <div>
    <div class="text-[16px] font-semibold uppercase mb-2">{{ props.title }}</div>
    <div class="text-[48px]/[1.2] font-semibold mb-8">{{ props.date }}</div>
    <NuxtImg class="mb-4" :src="props.image" :alt="props.title" loading="lazy" />
    <NuxtLink
      class="h-[50px] inline-flex items-center justify-center py-1 px-6 bg-black text-white"
      :to="props.button?.href"
      >{{ props.button?.text }}</NuxtLink
    >
  </div>
</template>
