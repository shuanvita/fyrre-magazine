<script setup lang="ts">
import type { IBaseSvg } from './svg.type'

const props = withDefaults(defineProps<IBaseSvg>(), {
  name: '',
  size: '24',
  width: '',
  height: '',
})

const styles = computed(() => ({
  width: props.width || props.size,
  height: props.height || props.size,
}))
</script>

<template>
  <svg :style="styles" role="img" aria-hidden="true">
    <use :xlink:href="`/svg/${props.name}.svg`" />
  </svg>
</template>
