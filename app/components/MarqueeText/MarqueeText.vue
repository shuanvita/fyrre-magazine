<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  duration: {
    type: Number,
    default: 15,
  },
  repeat: {
    type: Number,
    default: 2,
  },
  paused: {
    type: Boolean,
    default: false,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    :class="[
      'bg-black py-5 text-[20px] text-white overflow-hidden relative text-nowrap',
      { 'grid grid-cols-[auto_1fr] gap-6 pl-5': props.title },
    ]"
  >
    <div v-if="title" class="text-[22px] font-semibold uppercase relative z-10">{{ props.title }}</div>
    <div class="overflow-hidden">
      <div
        class="flex items-center overflow-hidden marquee relative z-0"
        :style="{ animationDuration: props.duration + 's' }"
        :class="{ reverse: props.reverse, paused: props.paused }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  animation: marquee 15s linear infinite;
  width: 100%;
  display: flex;
  white-space: nowrap;

  /* Для коротких текстов дублируем контент */
  /* @for $i from 1 to props.repeat {
    &::after {
      content: attr(data-content);
    }
  } */
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.reverse {
  animation-direction: reverse;
}

.paused {
  animation-play-state: paused;
}
</style>
