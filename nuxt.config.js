export default {
  target: "static",
  head: {
    title: "testsite",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [
    "@/styles/base/reset.sass",
    "@/styles/base/typography.sass",
    "@/styles/base/static.sass"
  ],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [],
  build: {}
};
