<template lang="pug" src="./index.pug"></template>

<script>
import html2canvas from "html2canvas";

export default {
  computed: {
    modalActive() {
      return this.$store.state.modalData;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("MODAL_DATA", null);
    }
  }
};
</script>

<style lang="sass" src="./index.sass"></style>
