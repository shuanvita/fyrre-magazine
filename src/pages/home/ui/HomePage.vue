<script setup lang="ts">
import { AppMarquee } from '@/entities/AppMarquee/index'
import MainPost from './components/MainPost.vue'
import { BlogList } from '@/widgets/BlogList/index'
import AsidePanel from '@/shared/custom/AsidePanel/AsidePanel.vue'
</script>

<template>
  <div class="mt-12">
    <ui-svg class="mb-[47px]" name="home-title" width="1520" height="216" />
    <AppMarquee
      class="mb-19"
      title="News Ticker+++"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit +++"
      :gap="24"
      reverse
    />
    <MainPost class="mb-15" />
    <div class="grid grid-cols-[1fr_369px] gap-24">
      <BlogList />
      <AsidePanel />
    </div>
  </div>
</template>
