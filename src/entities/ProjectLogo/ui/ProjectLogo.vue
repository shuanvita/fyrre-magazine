<script setup lang="ts">
import type { IProjectLogo } from '../index'

const props = withDefaults(defineProps<IProjectLogo>(), {
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
