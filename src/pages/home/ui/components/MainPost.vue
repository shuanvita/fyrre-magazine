<script setup lang="ts">
import { homeData } from '@/shared/data/index'
import { PostCategory } from '@/entities/PostCategory/index'

const { mainPost } = homeData
</script>

<template>
  <article class="grid grid-cols-2 gap-12">
    <ui-heading :title="mainPost.title" is-uppercase />
    <div class="pt-[10px]">
      <ui-text class="mb-[63px]" size="large" :text="mainPost.description" />
      <div class="flex justify-between items-center">
        <div class="flex gap-6">
          <div v-for="(item, idx) in mainPost.additionalInfo" :key="`post-metadata-${idx}`">
            <PostMetadata :title="item.title" :value="item.value" />
          </div>
        </div>
        <PostCategory :label="mainPost.category" />
      </div>
    </div>
    <NuxtImg class="col-span-2" :src="mainPost.image.src" :alt="mainPost.image.alt" loading="lazy" />
  </article>
</template>
