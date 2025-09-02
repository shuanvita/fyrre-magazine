<script setup lang="ts">
import { homeData } from '@/shared/data/index'
import { PostCategory } from '@/entities/PostCategory/index'

const { mainPost } = homeData
</script>

<template>
  <article class="grid grid-cols-2 gap-12">
    <h2 class="text-[104px] font-semibold leading-[1.1] uppercase">{{ mainPost.title }}</h2>
    <div class="pt-[10px]">
      <p class="mb-15 text-[18px] leading-[1.8]">
        {{ mainPost.description }}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex gap-6">
          <div
            v-for="(item, idx) in mainPost.additionalInfo"
            :key="`additional-info-${idx}`"
            class="flex gap-2 text-[14px] leading-[1.6]"
          >
            <span class="font-bold">{{ item.title }}</span
            >{{ item.value }}
          </div>
        </div>
        <ui-ContentMeta />
        <PostCategory :label="mainPost.category" />
      </div>
    </div>
    <NuxtImg class="col-span-2" :src="mainPost.image.src" :alt="mainPost.image.alt" loading="lazy" />
  </article>
</template>
