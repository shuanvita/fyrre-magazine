<script setup lang="ts">
import { computed } from 'vue'
import type { MarqueeBanner } from '@/shared/ui/marqueeBanner/MarqueeBanner.types.ts'

const props = defineProps<MarqueeBanner>()

const REPEAT_COUNT = 4
const animationStyle = computed(() => ({ animationDuration: `${props.duration ?? 10}s` }))
</script>

<template>
  <div class="flex items-center bg-black p-5 text-white">
    <div v-if="props.title" class="shrink-0 pr-6 text-[22px] font-semibold uppercase">
      {{ props.title }}
    </div>
    <div class="overflow-hidden">
      <div class="animate-marquee flex shrink-0 whitespace-nowrap" :style="animationStyle">
        <span v-for="i in REPEAT_COUNT" :key="i" class="pr-6 text-[20px]">
          {{ props.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-25%);
  }
}

.animate-marquee {
  animation: marquee linear infinite;
  width: max-content;
}
</style>
