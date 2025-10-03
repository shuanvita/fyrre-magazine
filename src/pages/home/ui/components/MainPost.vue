<script setup lang="ts">
import { homeData } from '@/shared/data/index'
import { PostCategory } from '@/entities/PostCategory/index'
import PostMetadata from '@/shared/custom/PostMetadata/PostMetadata.vue'

const { mainPost } = homeData
</script>

<template>
  <article class="grid grid-cols-2 gap-12">
    <ui-heading type="h2" :title="mainPost.title" is-uppercase />
    <div class="pt-[10px]">
      <ui-text class="mb-[63px]" size="large">{{ mainPost.description }}</ui-text>
      <div class="flex justify-between items-center">
        <div class="flex gap-6">
          <PostMetadata
            v-for="(item, idx) in mainPost.additionalInfo"
            :key="`post-metadata-${idx}`"
            :title="item.title"
            :value="item.value"
          />
        </div>
        <PostCategory :label="mainPost.category" />
      </div>
    </div>
    <NuxtImg class="col-span-2" :src="mainPost.image.src" :alt="mainPost.image.alt" loading="lazy" />
  </article>
</template>
