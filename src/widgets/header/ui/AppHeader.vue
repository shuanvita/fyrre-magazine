<script setup lang="ts">
import { AppLogo } from '@/shared/ui/logo'
import { commonData } from '@/shared/data'
import { AppNavigation } from '@/features/navigation'
import { SocialLinks } from '@/shared/ui/socialLinks'
</script>

<template>
  <header class="flex justify-between items-center pb-4 border-b">
    <AppLogo v-bind="commonData.header.logo" />
    <div class="flex gap-6 items-center">
      <AppNavigation :navList="commonData.header.navigation" />
      <span>&mdash;</span>
      <SocialLinks :socials="commonData.socials" />
    </div>
  </header>
</template>
