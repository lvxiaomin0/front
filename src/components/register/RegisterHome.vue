<template>
  <section class="section" ref="vantaRef" >
    <b-steps  >
      <b-step-item label="第一步"  icon="account-key" >
        <FirstStep />

        <!-- <img src="../../assets/input_i.png" alt /> -->
      </b-step-item>
      <b-step-item label="第二步" icon="account">
        <SecendStep />
        <!-- <img src="../../assets/input_i_2.png" alt /> -->
      </b-step-item>
      <b-step-item label="第三步" icon="account-plus">
        <ThirdStep />
        <!-- <img src=https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646 alt/> -->
      </b-step-item>
    </b-steps>
  </section>
</template>


<script>
import FirstStep from "../register/FirstStep";
import SecendStep from "../register/SecendStep";
import ThirdStep from "../register/ThirdStep";
import * as THREE from "three";
import Rings from "vanta/src/vanta.rings";
import HALO from "vanta/src/vanta.halo";
import NET from "vanta/src/vanta.net";


export default {
  components: {
    FirstStep,
    SecendStep,
    ThirdStep,
  },
  mounted() {
  this.vantaEffect = NET({
      el: this.$refs.vantaRef,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3fe8ff
    });
  },
};
</script>


<style scoped>
@import "../../assets/font.css";
body {
  font-family: alimama;
}
.section{
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>