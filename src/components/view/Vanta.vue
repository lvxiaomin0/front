<template>
  <div ref="vantaRef"></div>
</template>

<script>
import * as THREE from "three";
import BIRDS from "vanta/src/vanta.birds";
import Rings from "vanta/src/vanta.rings";
export default {
  name: "vanta",
  data() {
    return {};
  },
  mounted() {
    this.vantaEffect = Rings({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      THREE: THREE,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
  methods: {},
};
</script>

<style>
</style>