<script setup lang="ts">
import type { SocialLinkList } from '@/shared/ui/socialLinks/SocialLinks.types.ts'
import { VLink } from '@/shared/ui/vLink/index'
import { VSvg } from '@/shared/ui/vSvg/index'

const props = defineProps<SocialLinkList>()
</script>

<template>
  <div class="flex items-center gap-3">
    <VLink v-for="(item, index) in props.socials" :key="`social-item-${index}`" :href="item.href">
      <VSvg :name="item.icon" :size="20" />
    </VLink>
  </div>
</template>
