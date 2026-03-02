<script setup lang="ts">
import type { NavigationList } from '@/features/navigation/model/AppNavigation.types.ts'

const props = defineProps<NavigationList>()
</script>

<template>
  <nav>
    <ul class="flex gap-3">
      <li v-for="(item, index) in props.navList" :key="`navigation-item-${index}`">
        <RouterLink :to="item.to">
          {{ item.text }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
