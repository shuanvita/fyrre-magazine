// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  alias: {
    '@': '../src',
    '@entities': '../src/entities',
    '@shared': '../src/shared',
  },
  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts',
  },
  components: {
    dirs: [
      {
        path: 'src/shared/ui',
        pattern: '**/*',
        prefix: 'ui',
      },
    ],
  },
  css: ['../src/app/fonts/fonts.css', '../src/app/styles/global.css'],
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/image'],
})
