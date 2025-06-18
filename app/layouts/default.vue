<template>
  <div>
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script setup lang="ts">
import { TheHeader } from '~/components/index.ts'
</script>
