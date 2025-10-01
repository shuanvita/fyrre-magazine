<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: 'logo',
  },
  href: {
    type: String,
    default: '/',
  },
  width: {
    type: String,
    default: '210',
  },
  height: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <NuxtLink :to="props.href">
    <ui-svg :name="props.name" :width="props.width" :height="props.height" />
  </NuxtLink>
</template>
