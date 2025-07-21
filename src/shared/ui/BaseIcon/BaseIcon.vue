<script setup lang="ts">
import type { IBaseIcon } from './BaseIcon.type'

const props = withDefaults(defineProps<IBaseIcon>(), {
  name: '',
  size: '24',
})
</script>

<template>
  <svg
    :style="{
      width: `${props.size}px`,
      height: `${props.size}px`,
    }"
    role="img"
    aria-hidden="true"
  >
    <use :xlink:href="`/svg/${props.name}.svg`" />
  </svg>
</template>
