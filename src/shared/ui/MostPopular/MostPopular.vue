<script setup lang="ts">
import type { IMostPopular } from './MostPopular.type'

const props = defineProps<IMostPopular>()
</script>

<template>
  <div>
    <div class="text-[16px] font-semibold uppercase mb-8">{{ props.title }}</div>
    <div class="grid gap-6">
      <div class="pb-6 border-b-1" v-for="(item, idx) in props.list" :key="`most-popular-${idx}`">
        <div class="flex gap-16">
          <div class="text-[24px]/[1.2] font-semibold">{{ item.number }}</div>
          <div>
            <div class="text-[24px]/[1.2] font-semibold mb-4">{{ item.title }}</div>
            <post-metadata :title="item.info.title" :value="item.info.value" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
