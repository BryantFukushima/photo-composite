<template lang="pug" src="./index.pug"></template>

<script>
export default {
  name: "UserForm",
  data: () => ({
    color: "#0088d2",
    errors: false,
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
    resetData() {
      this.image = null;
      this.message = "";
      this.color = "#0088d2";
      this.errors = false;
    },
    onSubmit(event) {
      event.preventDefault();
      if (this.image) {
        const data = {
          image_src: this.images[this.image - 1].url,
          image_alt: this.images[this.image - 1].alt,
          message: this.message,
          color: this.color
        };
        this.$store.commit("MODAL_DATA", data);
        this.resetData();
      } else {
        this.errors = true;
      }
    }
  }
};
</script>

<style lang="sass" src="./index.sass"></style>
