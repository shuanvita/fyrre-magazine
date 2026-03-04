<script setup lang="ts">
import { AppLogo } from '@/shared/ui/logo'
import { SocialLinks } from '@/shared/ui/socialLinks'
import { NavigationMenu } from '@/widgets/header/ui/components/navigationMenu'
import { commonData } from '@/shared/data'
</script>

<template>
  <header class="flex items-center justify-between border-b pb-4">
    <AppLogo />
    <div class="flex items-center gap-6">
      <NavigationMenu :navList="commonData.header.navigation" />
      <span>&mdash;</span>
      <SocialLinks class="[&_a]:hover:text-indigo-700" :socials="commonData.socials" />
    </div>
  </header>
</template>
