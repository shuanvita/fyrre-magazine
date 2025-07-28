<script setup lang="ts">
import { TheLogo } from '@/entities/TheLogo/index';
import { AppMarquee } from '@/entities/AppMarquee/index';
</script>

<template>
  <footer class="bg-black lg:mt-[192px]">
    <div class="container">
      <TheLogo class="text-white" />
      <AppMarquee />
    </div>
  </footer>
</template>
