<script setup lang="ts">
import { VLink } from 'shuanvita-ui-kit'
import type { NavigationList } from '@/widgets/header/ui/components/navigationMenu/NavigationMenu.types'

const props = defineProps<NavigationList>()
</script>

<template>
  <nav>
    <ul class="flex items-center gap-6">
      <li v-for="(item, index) in props.navList" :key="`navigation-item-${index}`">
        <VLink
          active-class="text-indigo-700"
          class="text-[20px] hover:text-indigo-700"
          :to="item.to"
        >
          {{ item.text }}
        </VLink>
      </li>
    </ul>
  </nav>
</template>
