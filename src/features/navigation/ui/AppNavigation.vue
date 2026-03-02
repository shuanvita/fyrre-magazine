<script setup lang="ts">
import type { NavigationList } from '@/features/navigation/model/AppNavigation.types.ts'

const props = defineProps<NavigationList>()
</script>

<template>
  <nav>
    <ul>
      <li v-for="(item, index) in props.navList" :key="`navigation-item-${index}`">
        <RouterLink
          :to="item.to"
          class="inline-flex cursor-pointer items-center gap-1.5 duration-200"
        >
          {{ item.text }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
