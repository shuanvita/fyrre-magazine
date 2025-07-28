<script setup lang="ts">
import { TheHeader } from '@/widgets/header/index';
import { TheFooter } from '@/widgets/footer/index';
</script>

<template>
  <div class="pt-[40px] lg:pt-[62px]">
    <TheHeader />
    <main class="container">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>
