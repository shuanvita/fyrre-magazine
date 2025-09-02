<script setup lang="ts"></script>

<template>
  <article class="grid grid-cols-2 gap-12">
    <h2 class="text-[104px] font-semibold leading-[1.1] uppercase">Don’t close your eyes</h2>
    <div class="pt-[10px]">
      <p class="mb-15 text-[18px] leading-[1.8]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut.
        Porttitor leo a diam.
      </p>
      <div class="flex justify-between items-center">
        <div class="flex gap-6">
          <div class="flex gap-2 text-[14px] leading-[1.6]"><span class="font-bold">Text</span>Jakob Gronberg</div>
          <div class="flex gap-2 text-[14px] leading-[1.6]"><span class="font-bold">Date</span>16. March 2022</div>
          <div class="flex gap-2 text-[14px] leading-[1.6]"><span class="font-bold">Duration</span>1 Min</div>
        </div>
        <div class="px-3 py-2 text-[12px] uppercase border-1 rounded-full">Label</div>
      </div>
    </div>
    <NuxtImg class="col-span-2" src="/images/mainPost.png" alt="Don’t close your eyes" loading="lazy" />
  </article>
</template>
