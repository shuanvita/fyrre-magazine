<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'h2',
  },
  title: {
    type: String,
    default: '',
  },
  customClass: {
    type: String,
    default: '',
  },
  isUppercase: {
    type: Boolean,
    default: false,
  },
})

const styles = {
  h2: 'text-[104px]/[1.1] font-semibold',
  h3: 'text-[32px]/[1.2] font-semibold',
}

const classes = computed(() => {
  const baseClasses = [styles[props.type as keyof typeof styles], props.customClass]

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
