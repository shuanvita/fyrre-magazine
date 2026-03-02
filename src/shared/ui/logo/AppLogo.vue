<script setup lang="ts">
import { VSvg } from 'shuanvita-ui-kit'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
  },
})
</script>

<template>
  <VSvg :name="props.name" :width="props.width" />
</template>
