<script setup lang="ts">
import { commonData } from '@/shared/data'
import { AppNavigation } from '@/features/navigation'
</script>

<template>
  <footer>
    <div>Footer</div>
    <AppNavigation :navList="commonData.header.navigation" />
  </footer>
</template>
