<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '24',
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
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
