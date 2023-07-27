// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity', "@nuxthq/ui"],
  app: { pageTransition: { name: "page", mode: "out-in" } },
  sanity: {
    projectId: "8tw4ikh4",
    dataset: "production",
    apiVersion: "2021-10-21",
  }
})
