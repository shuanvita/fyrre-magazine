<script setup lang="ts">
import type { ArticleCardProps } from '@/entities/articleCard'

const props = defineProps<ArticleCardProps>()
</script>

<template>
  <article>
    <!-- hero: большой горизонтальный -->
    <div v-if="props.variant === 'hero'" class="grid grid-cols-2 gap-8">
      <h1 class="text-5xl font-bold uppercase">{{ props.title }}</h1>
      <div>
        <p class="text-base">{{ props.description }}</p>
        <div class="mt-4 flex items-center gap-6">
          <template v-for="item in props.meta" :key="item.name">
            <span class="font-bold">{{ item.name }}</span>
            <span>{{ item.value }}</span>
          </template>
          <span v-if="props.label" class="rounded-full border px-3 py-1 text-sm">
            {{ props.label }}
          </span>
        </div>
      </div>
      <img v-if="props.image" :src="props.image" class="col-span-2 w-full object-cover" />
    </div>

    <!-- list: горизонтальный компактный -->
    <div v-else-if="props.variant === 'list'" class="flex gap-6 border-b py-6">
      <img v-if="props.image" :src="props.image" class="h-32 w-32 object-cover" />
      <div class="flex flex-col gap-2">
        <h2 class="text-xl font-bold">{{ props.title }}</h2>
        <p class="text-sm">{{ props.description }}</p>
        <div class="mt-auto flex items-center gap-6">
          <template v-for="item in props.meta" :key="item.name">
            <span class="font-bold">{{ item.name }}</span>
            <span>{{ item.value }}</span>
          </template>
          <span v-if="props.label" class="rounded-full border px-3 py-1 text-sm">
            {{ props.label }}
          </span>
        </div>
      </div>
    </div>

    <!-- grid: вертикальная карточка -->
    <div v-else class="flex flex-col gap-4">
      <img v-if="props.image" :src="props.image" class="w-full object-cover" />
      <h2 class="text-xl font-bold">{{ props.title }}</h2>
      <p class="text-sm">{{ props.description }}</p>
      <div class="flex items-center gap-6">
        <template v-for="item in props.meta" :key="item.name">
          <span class="font-bold">{{ item.name }}</span>
          <span>{{ item.value }}</span>
        </template>
        <span v-if="props.label" class="ml-auto rounded-full border px-3 py-1 text-sm">
          {{ props.label }}
        </span>
      </div>
    </div>
  </article>
</template>
