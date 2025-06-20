// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: 'app/',
  future: {
    compatibilityVersion: 4,
  },
  css: ['./app/assets/fonts/fonts.css', './app/assets/css/global.css'],
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
})
