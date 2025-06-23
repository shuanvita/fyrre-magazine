<script setup lang="ts">
import MarqueeText from '~/components/MarqueeText/MarqueeText.vue'

definePageMeta({
  path: '/',
})
</script>

<template>
  <div class="container pt-12">
    <img class="mb-12" src="~/assets/svg/main-title.svg" alt="Art & Life" />
    <MarqueeText duration="20" :repeat="5"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit +++ Lorem ipsum dolor sit amet, consectetur adipiscing
      elit +++ Lorem ipsum dolor sit amet, consectetur adipiscing elit +++</MarqueeText
    >
  </div>
</template>
