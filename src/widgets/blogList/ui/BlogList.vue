<script setup lang="ts">
import { blogListData } from '@/shared/data/blogList.data'
import BlogPost from '@/entities/BlogPost/ui/BlogPost.vue'
</script>

<template>
  <div class="grid gap-12">
    <BlogPost v-for="(post, idx) in blogListData" :key="`blog-post-${idx}`" v-bind="post" />
  </div>
</template>
