<template>
  <div class="background">
    <Header></Header>
    <Personal></Personal>
    <PersonalSidebar></PersonalSidebar>
    
  </div>
</template>

<script>
import Personal from "./Personal.vue";
import PersonalSidebar from "./PersonalSidebar.vue";
import Header from "../userhome/Header.vue";
export default {
  name: "userhome",
  components: {
    Header,
    Personal,
    PersonalSidebar
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
@import "../../assets/font.css";
body {
  font-family: alimama;
}
.background {
  background-image: url("https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/p9/wallhaven-p92mj3.jpg?w=2560&h=1440&fmt=webp");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%; 
  
  z-index: 1;
}
.person_body_right {
  width: 70%;
  /* height: 500px; */
  border-radius: 5px;
  background-color: white;
}
</style>