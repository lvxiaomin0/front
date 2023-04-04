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
          <el-link type="primary">{{ item.moContent }}</el-link>
          <br>
          <el-link type="primary">{{ item.moTime }}</el-link>
          
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
            const data = response.data.reverse()
            this.MobileMessage = data;
            
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