<script setup lang="ts">
import type { ILogo } from '../index'

const props = withDefaults(defineProps<ILogo>(), {
  name: 'logo',
  href: '/',
  width: '210',
  height: '',
})
</script>

<template>
  <NuxtLink :to="props.href">
    <BaseSvg :name="props.name" :width="props.width" :height="props.height" />
  </NuxtLink>
</template>
