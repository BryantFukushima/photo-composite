<template lang="pug" src="./index.pug"></template>

<script>
export default {
  methods: {
    closeModal() {
      this.$store.commit('MODAL_DATA', null)
    }
  }
};
</script>

<style lang="sass" src="./index.sass"></style>
