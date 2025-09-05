<script setup lang="ts">
import type { IBaseHeading } from './BaseHeading.type'

const props = withDefaults(defineProps<IBaseHeading>(), {
  type: 'h2',
  title: '',
  customClass: '',
  isUppercase: false,
})

const styles = {
  h2: 'text-[104px]/[1.1] font-semibold',
  h3: 'text-[32px]/[1.2] font-semibold',
}

const classes = computed(() => {
  const baseClasses = [styles[props.type], props.customClass]

  if (props.isUppercase) {
    baseClasses.push('uppercase')
  }

  return baseClasses
})
</script>

<template>
  <component :is="props.type" :class="[classes, props.customClass]">
    {{ props.title }}
  </component>
</template>
