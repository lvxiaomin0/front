<template>
  <div class="tile is-child is-10" id="mood">
    <div>
      <br />
      <el-carousel
        :interval="3000"
        direction="vertical"
        type=""
        height="100px"
        width="100px"
        indicator-position="none"
      >
        <el-carousel-item v-for="(item, index) in MobileMessage" :key="index">
          <!-- <h3 class="medium">{{ item }}</h3> -->
          <el-link type="primary">{{ item.info.infoItem }}</el-link>
          
          <el-link type="primary">{{ item.info.infoAuth }}</el-link>
          
          <!-- <el-link type="info">{{item.info}}</el-link> -->
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "MobileMessInfo",
  data() {
    return {
      MobileMessage: [
        {
          info: {
            infoItem: "就算是自私……我也希望那些人能够永远都有笑容……",
            infoAuth: "学明",
          },
        },
        {
          info: {
            infoItem: "越是试着忘记，越是记得深刻 。",
            infoAuth: "明哥哥哦",
          },
        }
      ],
    }
  },
  mounted() {
    this.getAllMessage();
  },
  methods: {
    getAllMessage(){
      axios.get("/announce/get-announce",{

      }).then((response)=>{
            const data = response.data
            console.log(data);
      })
    }
  },
};
</script>

<style scoped>
#mood {
  text-align: center;
}
</style>