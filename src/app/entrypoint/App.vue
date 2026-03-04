<script setup lang="ts">
import AppHeader from '@/widgets/header'
import { AppFooter } from '@/widgets/footer'
</script>

<template>
  <div class="container pt-16">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
