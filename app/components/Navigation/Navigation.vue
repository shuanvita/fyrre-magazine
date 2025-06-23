<script setup lang="ts">
const navigationList = computed(() => [
  {
    to: '/magazine',
    text: 'Magazine',
  },
  {
    to: 'authors',
    text: 'Authors',
  },
  {
    to: '/podcast',
    text: 'Podcast',
  },
])
</script>

<template>
  <nav>
    <ul class="flex items-center gap-[25px]">
      <li v-for="(item, idx) in navigationList" :key="`nav-item-${idx}`">
        <NuxtLink class="text-[20px] hover:opacity-80" :to="item.to">{{ item.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
