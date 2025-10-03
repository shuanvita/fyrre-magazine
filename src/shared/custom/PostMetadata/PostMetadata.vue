<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="flex gap-2 text-[14px]/[1.6]">
    <span class="font-bold">{{ props.title }}</span>
    <span>{{ props.value }}</span>
  </div>
</template>
