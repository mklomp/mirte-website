// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/mirte-website/'
  },

  components: true,
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css', '@/assets/scss/main.scss'],
  plugins: ['@/plugins/bootstrap.client.js'],
  modules: ['@nuxtjs/i18n'],

  i18n: {
    vueI18n: './i18n.config.ts'
  },

  ssr: true,

  nitro: {
    preset: 'static',
  },

  compatibilityDate: '2025-06-26',
})