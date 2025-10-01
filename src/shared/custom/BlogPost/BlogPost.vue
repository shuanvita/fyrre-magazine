<script setup lang="ts">
import type { IBlogPost } from './BlogPost.type'
// import { PostCategory } from '@/entities/PostCategory/index'

const props = defineProps<IBlogPost>()
</script>

<template>
  <article class="grid grid-cols-[auto_1fr] gap-8 pb-12 border-b-1">
    <NuxtImg class="max-w-[255px]" :src="props.image" :alt="props.title" loading="lazy" />
    <div class="grid grid-rows-[max-content] gap-3">
      <NuxtLink class="hover:text-blue-700" :to="props.href">
        <BaseHeading :title="props.title" type="h3" />
      </NuxtLink>
      <BaseText :text="props.description" />
      <div class="flex items-end justify-between">
        <div class="flex gap-6">
          <div v-for="(item, idx) in props.meta" :key="`post-metadata-${idx}`">
            <PostMetadata :title="item.title" :value="item.value" />
          </div>
        </div>
        <!-- <PostCategory :label="props.category" /> -->
      </div>
    </div>
  </article>
</template>
