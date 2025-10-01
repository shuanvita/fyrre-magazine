<script setup lang="ts">
import { globalData } from '@/shared/data/index'
import { ProjectLogo } from '@/entities/ProjectLogo/index'
</script>

<template>
  <header class="container grid grid-cols-[auto_1fr] items-center pb-[15px] border-b-1 border-black">
    <ProjectLogo class="hover:opacity-70" />
    <div class="flex gap-[25px] items-center justify-self-end">
      <nav>
        <ul class="flex items-center gap-[25px]">
          <li v-for="(item, idx) in globalData.header.navigation" :key="`nav-item-${idx}`">
            <NuxtLink class="text-[20px] hover:text-blue-700" :to="item.href">{{ item.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <span>&mdash;</span>
      <div class="flex items-center gap-3">
        <NuxtLink
          v-for="(item, idx) in globalData.header.social"
          :key="`social-item-${idx}`"
          class="hover:text-blue-700"
          :to="item.href"
        >
          <ui-svg :name="item.icon" size="20" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
