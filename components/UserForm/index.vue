<template lang="pug" src="./index.pug"></template>

<script>
export default {
  name: "UserForm",
  data: () => ({
    color: "#000000",
    activeImage: null,
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
    onSubmit(event) {
      event.preventDefault();
      if (this.image && this.message && this.color) { 
        const data = {
          image: this.images[this.image].url,
          message: this.message,
          color: this.color
        };
        this.$store.commit('MODAL_DATA', data);
      }
    }
  }
};
</script>

<style lang="sass" src="./index.sass"></style>
