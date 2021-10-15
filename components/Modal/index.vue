<template lang="pug" src="./index.pug"></template>

<script>
import html2canvas from "html2canvas";

export default {
  computed: {
    modalActive() {
      return this.$store.state.modalData;
    }
  },
  watch: {
    modalActive(newState, oldState) {
      if (newState) {
        this.$nextTick(() => {
          html2canvas(this.$refs.comp, {
            allowTaint: true,
            letterRendering: true
          }).then(canvas => {
            const downloadBtn = this.$refs.download;
            const canvasElem = this.$refs.canvas;
            canvasElem.appendChild(canvas);
            downloadBtn.download = "composite.jpg";
            downloadBtn.href = canvasElem.children[0].toDataURL("image/jpg");
          });
        });
      }
    }
  },
  mounted() {
    console.log("modal");
  },
  methods: {
    closeModal() {
      this.$store.commit("MODAL_DATA", null);
    }
  }
};
</script>

<style lang="sass" src="./index.sass"></style>
