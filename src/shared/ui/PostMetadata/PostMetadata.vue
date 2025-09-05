<script setup lang="ts">
import type { IPostMetaData } from './PostMetadata.type'

const props = withDefaults(defineProps<IPostMetaData>(), {
  title: '',
  value: '',
})
</script>

<template>
  <div class="flex gap-2 text-[14px]/[1.6]">
    <span class="font-bold">{{ props.title }}</span>
    <span>{{ props.value }}</span>
  </div>
</template>
