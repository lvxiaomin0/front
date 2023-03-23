<template>
    <div >
      <Second></Second>
      <Tiles></Tiles>
      <SecondTitle></SecondTitle>
      <Footer></Footer>
    </div>
</template>

<script>
// import * as THREE from "three";
// import Rings from "vanta/src/vanta.rings";
// import Halo from "vanta/src/vanta.halo";
// import Clouds from "vanta/src/vanta.clouds";

import Top from "./Top.vue";
import Second from "./Second.vue";
import SecondTitle from "./SecondTitle.vue";
import Login from "../login/Login.vue";
import Tiles from "./Tiles.vue";
import Footer from "./Footer.vue";
import Vanta from "../view/Vanta.vue";

export default {
  name: "home",
  components: {
    Top,
    Second,
    SecondTitle,
    Login,
    Tiles,
    Footer,
    Vanta,
  },
  data() {
    return {
      
    }
  },
  mounted() {
    // this.vantaEffect = Clouds({
    //   el: this.$refs.vantaRef,
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   cloudColor: 0x3769af,
    //   sunGlareColor: 0xbe978c,
    //   sunlightColor: 0x8e8d8c,
    //   THREE: THREE,
    // });
  },
  beforeDestroy() {
    // if (this.vantaEffect) {
    //   this.vantaEffect.destroy();
    // }
  },
  methods: {},
};
</script>

<style>
@import "../../assets/font.css";
body {
  font-family: alimama;
}
</style>