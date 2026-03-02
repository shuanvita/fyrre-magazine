<script setup lang="ts">
import { AppLogo } from '@/shared/ui/logo'
import { commonData } from '@/shared/data'
import { AppNavigation } from '@/features/navigation'
</script>

<template>
  <header>
    <AppLogo v-bind="commonData.header.logo" />
    <div>
      <AppNavigation :navList="commonData.header.navigation" />
    </div>
  </header>
</template>
