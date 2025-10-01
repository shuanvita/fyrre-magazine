<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  href: {
    type: String,
    default: '',
  },
  iconLeft: {
    type: Boolean,
    default: false,
  },
  iconRight: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);
</script>

<template>
  <nuxt-link
    v-if="props.href"
    class="flex hover:text-black/80 items-center gap-2 text-[16px] font-semibold uppercase"
    :to="props.href"
    @click="emit('click')"
  >
    <ui-svg v-if="props.iconLeft" name="arrow-left" size="16" />
    <slot />
    <ui-svg v-if="props.iconRight" name="arrow-right" size="16" />
  </nuxt-link>
  <button
    v-else
    class="bg-black text-[14px] hover:bg-black/80 uppercase font-medium cursor-pointer h-[50px] text-white py-1 px-6"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
