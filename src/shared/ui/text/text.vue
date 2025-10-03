<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'default',
  },
  customClass: {
    type: String,
    default: '',
  },
})

const sizes = {
  default: 'text-[16px]/[1.8]',
  large: 'text-[18px]/[1.8]',
  xlarge: 'text-[20px]/[1.8]',
  xxlarge: 'text-[22px]/[1.8]',
}

const classes = computed(() => {
  return [sizes[props.size as keyof typeof sizes], props.customClass]
})
</script>

<template>
  <p :class="classes"><slot /></p>
</template>
