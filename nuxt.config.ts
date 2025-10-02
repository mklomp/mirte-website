// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/mirte-website/',
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css', '@/assets/scss/main.scss'],
  plugins: ['@/plugins/bootstrap.client.js'],
  modules: ['@nuxtjs/i18n'],

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'nl', iso: 'nl-NL', name: 'Nederlands' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
    vueI18n: './i18n.config.ts'
  },

  ssr: true,

  vite: {
    plugins: [
      require('vite-svg-loader')()
    ]
  },

  nitro: {
    preset: 'static',
  },

  compatibilityDate: '2025-08-14',
})