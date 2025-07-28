<script setup lang="ts">
import type { IAppMarquee } from '../model/AppMarquee.type';
import { ref, onMounted, computed } from 'vue';

const props = withDefaults(defineProps<IAppMarquee>(), {
  title: '',
  duration: 10,
  repeat: 2,
  paused: false,
  reverse: false,
  gap: 24, // Добавляем новый пропс для отступа
});

const marqueeWrapper = ref<HTMLElement | null>(null);
const marqueeContent = ref<HTMLElement | null>(null);

const repeatedText = computed(() => {
  if (!marqueeWrapper.value || !marqueeContent.value || !props.text) {
    return '';
  }

  const containerWidth = marqueeWrapper.value.offsetWidth;
  const textWidth = marqueeContent.value.getBoundingClientRect().width;
  const repeatCount = Math.max(2, Math.ceil((containerWidth * 10) / textWidth));

  // Обертываем текст в div с отступами
  const wrappedText = Array(repeatCount)
    .fill(props.text)
    .map((text) => `<div class="text-block px-6">${text}</div>`);

  return wrappedText.join('');
});

onMounted(() => {
  if (marqueeContent.value && props.text) {
    marqueeContent.value.innerHTML = repeatedText.value;
  }
});
</script>

<template>
  <div
    ref="marqueeWrapper"
    :class="[
      'bg-black py-5 text-[20px] text-white overflow-hidden relative text-nowrap',
      { 'grid grid-cols-[auto_1fr] gap-6 pl-5': props.title },
    ]"
  >
    <div v-if="props.title" class="text-[22px] font-semibold uppercase relative z-10">
      {{ props.title }}
    </div>
    <div class="overflow-hidden">
      <div
        ref="marqueeContent"
        class="flex items-center overflow-hidden marquee relative z-0"
        :style="{ animationDuration: props.duration + 's' }"
        :class="{ reverse: props.reverse, paused: props.paused }"
      >
        <!-- Текст будет установлен через computed свойство -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  animation: marquee var(--duration, 15s) linear infinite;
  width: 200%;
  display: flex;
  white-space: nowrap;
  transform: translateX(0);
  font-size: 20px;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.reverse {
  animation-direction: reverse;
}

.paused {
  animation-play-state: paused;
}

.text-block {
  display: inline-block;
  white-space: nowrap;
}
</style>
