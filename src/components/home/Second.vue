<template>
  <section class="hero is-white" id="back_image" >
      <Top></Top>
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
                <a href="#" aria-current="page" class="content is-medium">创新</a>
              </li>
            </ul>
          </nav>
        </h2>
      </div>
    </div>
    <progress class="progress is-whrite is-small" value="1%" max="30">40%</progress>
  </section>
  
</template>
<script>
import Top from "./Top.vue";
export default {
  components: {
    Top,
    
    }
};
</script>

<style scoped>
.title {
  text-align: left;
}
.subtitle {
  text-align: right;
}

#back_image{
    z-index: -1;
    background-image: url("../../assets/banner_one.png");
    background-repeat: no-repeat;
    /* background-image: url("https://www.toptal.com/designers/subtlepatterns/uploads/memphis-colorful.png"); */
}
</style>