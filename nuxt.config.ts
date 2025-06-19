// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  devtools: { enabled: true },

  pages: true, 

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  css: ['~/assets/css/base.css'],

  app: {
    head: {
      title: "Didico's Barber",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: "Didico's Barber - Agende seu horário e venha conhecer o melhor corte de cabelo da região." },
        { name: 'keywords', content: 'barbearia, corte de cabelo, barba, barbeiros profissionais' },
        { name: 'author', content: "Didico's Barber" },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo.png' },
        { rel: 'icon', type: 'image/jpeg', href: '/img/logo-redonda.jpg' },
        { rel: 'apple-touch-icon', href: '/img/logo-redonda.jpg' }
      ]
    }
  }
})
