<template>
  <div>
    <Second></Second>
    <Tiles></Tiles>
    <SecondTitle></SecondTitle>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from "./Top.vue";
import Second from "./Second.vue";
import SecondTitle from "./SecondTitle.vue";
import Login from "../login/Login.vue";
import Tiles from "./Tiles.vue";
import Footer from "./Footer.vue"

export default {
  name: "home",
  components: {
    Top,
    Second,
    SecondTitle,
    Login,
    Tiles,
    Footer
   
  }
};
</script>

<style>
 @import "../../assets/font.css";
 body{
  font-family: alimama;
 }
</style>