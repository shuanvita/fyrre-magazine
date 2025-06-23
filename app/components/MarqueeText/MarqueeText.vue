<script setup lang="ts">
const props = defineProps({
  duration: {
    type: Number,
    default: 15,
    validator: (value: number) => value > 0,
  },
  repeat: {
    type: Number,
    default: 2,
    validator: (value: number) => value > 0,
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

// const animationDuration = computed(() => props.duration)
</script>

<template>
  <div class="bg-black p-5 text-[20px] text-white marquee-wrapper text-nowrap">
    <div
      class="marquee"
      :style="{ animationDuration: props.duration + 's' }"
      :class="{ reverse: props.reverse, paused: props.paused }"
    >
      <slot></slot>
      <!-- Дублируем контент для плавной прокрутки -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}

.marquee {
  display: flex;
  align-items: center;
  animation: marquee 15s linear infinite;

  /* Для коротких текстов дублируем контент */
  @for $i from 1 to props.repeat {
    &::after {
      content: attr(data-content);
    }
  }
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
