<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../../assets/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
       &nbsp;
       &nbsp;
      <b-navbar-item href="#" style="font-size: 20px"> 首页 </b-navbar-item>
      <b-navbar-item @click="goto('/postArticle')" style="font-size: 20px">快速发帖</b-navbar-item>
      <b-navbar-item href="http://42.192.90.40:4000/" style="font-size: 20px"> 博客 </b-navbar-item>
     
      <b-navbar-dropdown label="更多" style="font-size: 20px">
       
        <b-navbar-item href="#"> 联系我 </b-navbar-item>
      </b-navbar-dropdown>

      <div class="level-left" id="search_control">
        <div class="level-item">
         
        </div>
      </div>
    </template>

    <template #end>
      <b-navbar-item tag="div" >
         
      </b-navbar-item>
      <b-navbar-item  style="font-size: 20px">消息</b-navbar-item>
      &nbsp;
      &nbsp;
    </template>
  </b-navbar>
</template>

<script>
export default {
    name:"Header",
    data() {
      return {
        name:""
      }
    },
}
</script>

<style>
@import "../../assets/font.css";
 body{
  font-family: alimama;
 }
</style>