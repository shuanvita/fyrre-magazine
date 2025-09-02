<script setup lang="ts">
import { AppMarquee } from '@/entities/AppMarquee/index'
import MainPost from './components/MainPost.vue'
</script>

<template>
  <div class="mt-12">
    <ui-svg class="mb-12" name="home-title" width="1520" height="216" />
    <AppMarquee
      class="mb-18"
      title="News Ticker+++"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit +++"
      :gap="24"
      reverse
    />
    <MainPost />
  </div>
</template>
