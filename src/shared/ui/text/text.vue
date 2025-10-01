<script setup lang="ts">
import type { IBaseText } from './text.type'

const props = withDefaults(defineProps<IBaseText>(), {
  text: '',
  size: 'default',
  customClass: '',
})

const sizes = {
  default: 'text-[16px]/[1.8]',
  large: 'text-[18px]/[1.8]',
  xlarge: 'text-[20px]/[1.8]',
  xxlarge: 'text-[22px]/[1.8]',
}

const classes = computed(() => {
  return [sizes[props.size], props.customClass]
})
</script>

<template>
  <p :class="classes"><slot /></p>
</template>
