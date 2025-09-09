<script setup lang="ts">
import { homeData } from '~/src/shared/data'
</script>

<template>
  <aside class="space-y-16">
    <FuturePodcast v-bind="homeData.futurePodcast" />
    <MostPopular v-bind="homeData.mostPopular" />
  </aside>
</template>
