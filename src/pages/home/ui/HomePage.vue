<script setup lang="ts">
import { VSvg } from '@/shared/ui/vSvg/index'
import { MarqueeBanner } from '@/shared/ui/marqueeBanner'
import { ArticleCard } from '@/entities/articleCard'
</script>

<template>
  <VSvg class="my-12" name="home-title" />
  <MarqueeBanner
    title="News Ticker+++"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit +++"
  />
  <ArticleCard title="Don’t close your eyes" />
</template>
