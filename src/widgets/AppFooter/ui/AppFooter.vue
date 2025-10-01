<script setup lang="ts">
import { ProjectLogo } from '@/entities/ProjectLogo/index'
import { AppMarquee } from '@/entities/AppMarquee/index'
import { PostCategory } from '@/entities/PostCategory/index'
</script>

<template>
  <footer class="bg-black lg:mt-[192px]">
    <div class="container">
      <ProjectLogo class="text-white" />
      <AppMarquee />
      <PostCategory label="All rights reserved" />
    </div>
  </footer>
</template>
