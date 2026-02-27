<script setup lang="ts">
import AppHeader from '@/widgets/header'
</script>

<template>
  <div class="container pt-16">
    <AppHeader />
    <RouterView />
    <footer>Footer</footer>
  </div>
</template>
