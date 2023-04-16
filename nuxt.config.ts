// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  css: [
    "~/node_modules/@spectrum-css/vars/dist/spectrum-global.css",
    "~/node_modules/@spectrum-css/vars/dist/spectrum-medium.css",
    "~/node_modules/@spectrum-css/vars/dist/spectrum-light.css",
    "~/node_modules/@spectrum-css/page/dist/index-vars.css",
    "~/node_modules/@spectrum-css/button/dist/index-vars.css",
    '~/styles/main.scss'
  ],
  
})
