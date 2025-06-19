<template>
  <header class="container grid grid-cols-[auto_1fr] pb-4 border-b-1 border-black">
    <NuxtLink to="/">
      <img class="max-w-[210px]" src="~/assets/svg/logo.svg" alt="" />
    </NuxtLink>
    <div class="flex gap-6 items-center justify-self-end">
      <nav>
        <ul class="flex items-center gap-6">
          <li>
            <NuxtLink to="/magazine">Magazine</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/authors">Authors</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/podcast">Podcast</NuxtLink>
          </li>
        </ul>
      </nav>
      <div>
        <ul class="flex items-center gap-3">
          <li>
            <NuxtLink to="/magazine">
              <img class="max-w-[20px]" src="~/assets/svg/instagram.svg" alt="Instagram" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/magazine">
              <img class="max-w-[20px]" src="~/assets/svg/twitter.svg" alt="Twitter" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/magazine">
              <img class="max-w-[20px]" src="~/assets/svg/youtube.svg" alt="Youtube" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/magazine">
              <img class="max-w-[20px]" src="~/assets/svg/rss.svg" alt="RSS" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
