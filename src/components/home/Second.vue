<template>
  <section class="hero is-white is-halfheight" id="back_image" ref="vantaRef">
    <Top></Top>
    <!-- <div ref="vantaRef" class="vantaRef"></div> -->
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">XX论坛</h1>
        <h2 class="subtitle is-italic">
          <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
            <ul>
              <li>
                <a href="#" class="content is-medium">理性</a>
              </li>
              <li>
                <a href="#" class="content is-medium">吃瓜</a>
              </li>
              <li>
                <a href="#" class="content is-medium">谨慎</a>
              </li>
              <li>
                <a href="#" aria-current="page" class="content is-medium"
                  >创新</a
                >
              </li>
            </ul>
          </nav>
        </h2>
      </div>
    </div>
    <!-- <progress class="progress is-whrite is-small" value="1%" max="20">
      40%
    </progress> -->
  </section>
  
</template>
<script>
import Clouds from "@/utils/vanta_cloud"

import * as THREE from "three";

// import Clouds from "vanta/src/vanta.clouds";


import Top from "./Top.vue";
export default {
  components: {
    Top,
  },
  data() {
    return {};
  },
  mounted() {
    this.vantaEffect = Clouds({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      cloudColor: 0x3769af,
      sunGlareColor: 0xbe978c,
      sunlightColor: 0x8e8d8c,
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

<style scoped>
.title {
  text-align: left;
}
.subtitle {
  text-align: right;
}

#back_image {
  /* z-index: -1; 
  background-image: url("../../assets/banner_one.png"); 
  background-repeat: no-repeat; */

  /* background-image: url("https://www.toptal.com/designers/subtlepatterns/uploads/memphis-colorful.png"); */
}
</style>