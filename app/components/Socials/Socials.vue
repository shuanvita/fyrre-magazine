<script setup lang="ts">
// const socialList = computed(() => [
//   {
//     to: '/magazine',
//     icon: '~/assets/svg/instagram.svg',
//   },
//   {
//     to: '/authors',
//     icon: '~/assets/svg/twitter.svg',
//   },
//   {
//     to: '/authors',
//     icon: '~/assets/svg/youtube.svg',
//   },
//   {
//     to: 'authors',
//     icon: '~/assets/svg/rss.svg',
//   },
// ])
</script>

<template>
  <ul class="flex items-center gap-3">
    <li>
      <NuxtLink class="hover:opacity-80" to="/magazine">
        <img class="max-w-[20px]" src="~/assets/svg/instagram.svg" alt="Instagram" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="hover:opacity-80" to="/magazine">
        <img class="max-w-[20px]" src="~/assets/svg/twitter.svg" alt="Twitter" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="hover:opacity-80" to="/magazine">
        <img class="max-w-[20px]" src="~/assets/svg/youtube.svg" alt="Youtube" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink class="hover:opacity-80" to="/magazine">
        <img class="max-w-[20px]" src="~/assets/svg/rss.svg" alt="RSS" />
      </NuxtLink>
    </li>
  </ul>
</template>
