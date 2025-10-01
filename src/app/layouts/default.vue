<script setup lang="ts">
import { AppHeader } from '~/src/widgets/AppHeader/index'
import { AppFooter } from '~/src/widgets/AppFooter/index'
</script>

<template>
  <div class="pt-[40px] lg:pt-[62px]">
    <AppHeader />
    <main class="container">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
