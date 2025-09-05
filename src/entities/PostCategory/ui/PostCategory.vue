<script setup lang="ts">
import type { IPostCategory } from '../index'

const props = withDefaults(defineProps<IPostCategory>(), {
  isLabel: true,
  label: '',
})
</script>

<template>
  <div v-if="props.isLabel" class="px-3 py-2 text-[12px] uppercase border-1 rounded-full max-h-[32px]">
    {{ props.label }}
  </div>
  <button
    v-else
    class="cursor-pointer hover:border-transparent hover:transition-all duration-200 px-3 max-h-[32px] py-2 text-[12px] uppercase border-1 rounded-full hover:bg-black hover:text-white"
  >
    {{ props.label }}
  </button>
</template>
