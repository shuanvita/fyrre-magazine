<script setup lang="ts">
import type { IAppMarquee } from '../model/AppMarquee.type';

const props = withDefaults(defineProps<IAppMarquee>(), {
  title: '',
});
</script>

<template>
  <div
    :class="[
      'bg-black py-5 text-[20px] text-white overflow-hidden relative text-nowrap',
      { 'grid grid-cols-[auto_1fr] gap-6 pl-5': props.title },
    ]"
  >
    <div v-if="props.title" class="text-[22px] font-semibold uppercase relative z-10">
      {{ props.title }}
    </div>
    <div>dfsdfsdfsdf</div>
  </div>
</template>
