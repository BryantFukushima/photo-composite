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
      console.log(this.image);
      console.log(this.message);
      console.log(this.color);
    }
  }
};
</script>

<style lang="sass" src="./index.sass"></style>
