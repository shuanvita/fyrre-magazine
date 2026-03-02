<script setup lang="ts">
import { VLink } from 'shuanvita-ui-kit'
import type { NavigationList } from '@/features/navigation/model/AppNavigation.types.ts'

const props = defineProps<NavigationList>()
</script>

<template>
  <nav>
    <ul>
      <li v-for="(item, index) in props.navList" :key="`navigation-item-${index}`">
        <VLink :to="item.to">{{item.text}}</VLink>
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
