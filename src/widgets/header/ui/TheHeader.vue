<script setup lang="ts">
import globalData from '../data/header.data.json'
</script>

<template>
  <header class="container grid grid-cols-[auto_1fr] items-center pb-[15px] border-b-1 border-black">
    <NuxtLink to="/">
      <img class="max-w-[210px]" src="@/shared/svg/filled/logo.svg" alt="" />
    </NuxtLink>
    <div class="flex gap-[25px] items-center justify-self-end">
      <nav>
        <ul class="flex items-center gap-[25px]">
          <li v-for="(item, idx) in globalData.header.navigation" :key="`nav-item-${idx}`">
            <NuxtLink class="text-[20px] hover:opacity-80" :to="item.href">{{ item.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
