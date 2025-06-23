<script setup lang="ts">
import Navigation from './Navigation/Navigation.vue'
import Socials from './Socials/Socials.vue'
import Logo from './Logo/Logo.vue'
</script>

<template>
  <header class="container grid grid-cols-[auto_1fr] items-center pb-[15px] border-b-1 border-black">
    <Logo />
    <div class="flex gap-[25px] items-center justify-self-end">
      <Navigation />
      <span>&mdash;</span>
      <Socials />
    </div>
  </header>
</template>
