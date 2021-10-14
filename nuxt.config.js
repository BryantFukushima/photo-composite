export default {
  target: "static",
  head: {
    title: "Photo Composite - Bryant Fukushima",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Bryant Fukushima's take home assignment for imgix. Create a Photo Composite."
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [
    "~/styles/static/reset.sass",
    "~/styles/static/static.sass",
    "~/styles/static/transitions.sass"
  ],
  styleResources: {
    sass: ["~/styles/base/*.sass", "~/styles/utilities/*.sass"]
  },
  plugins: [],
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/style-resources"],
  build: {}
};
