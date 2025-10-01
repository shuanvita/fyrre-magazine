<script setup lang="ts">
import { homeData } from '~/src/shared/data';
</script>

<template>
  <aside class="space-y-16">
    <FuturePodcast v-bind="homeData.futurePodcast" />
    <MostPopular v-bind="homeData.mostPopular" />
    <ui-action>Button</ui-action>
    <ui-action icon-right href="#">Link</ui-action>
  </aside>
</template>
