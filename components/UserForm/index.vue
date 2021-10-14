<template lang="pug" src="./index.pug"></template>

<script>
export default {
  name: "UserForm",
  data: () => ({
    color: "#000000",
    image: null,
    images: [
      {
        url: "https://assets.imgix.net/examples/butterfly.jpg",
        alt: "Butterfly"
      },
      {
        url: "https://assets.imgix.net/unsplash/bridge.jpg",
        alt: "Bridge"
      },
      {
        url: "https://assets.imgix.net/unsplash/pineneedles.jpg",
        alt: "pineneedles"
      }
    ],
    message: ""
  }),
  methods: {
    clearData() {
      (this.image = null), (this.message = ""), (this.color = "");
    },
    onSubmit(event) {
      console.log("hi");
      event.preventDefault();
      if (this.image && this.message && this.color) {
        const data = {
          image_src: this.images[this.image].url,
          image_alt: this.images[this.image].alt,
          message: this.message,
          color: this.color
        };
        this.$store.commit("MODAL_DATA", data);
        this.clearData();
      }
    }
  }
};
</script>

<style lang="sass" src="./index.sass"></style>
