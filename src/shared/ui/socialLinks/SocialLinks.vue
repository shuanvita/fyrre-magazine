<script setup lang="ts">
import { VLink, VSvg } from 'shuanvita-ui-kit'
import type { SocialLinkList } from '@/shared/ui/socialLinks/SocialLinks.types.ts'

const props = defineProps<SocialLinkList>()
</script>

<template>
  <div class="flex items-center gap-3">
    <VLink v-for="(item, index) in props.socials" :key="`social-item-${index}`" :href="item.href">
      <VSvg :name="item.icon" :size="20" />
    </VLink>
  </div>
</template>
