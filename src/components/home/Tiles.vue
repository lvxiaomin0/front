<template>
  <div class="tile is-ancestor" id="back_image" style="height: 280px">
    <div class="tile is-parent is-4" id="item_margin">
      <article
        class="tile is-child box"
        id="opacity_item"
        style="overflow-y: scroll; overflow-x: hidden; overflow-y: hidden"
      >
        <section>
          <p class="subtitle title is-4">流动消息</p>
        </section>
        <!-- <div class="tile is-child is-1" id="mood">
          <Slider></Slider>
          </div> -->

        <!-- <div class="tile is-child is-10" id="mood">
          <div>
            <el-carousel
              :interval="3000"
              direction="vertical"
              type=""
              height="100px"
              width="100px"
              indicator-position="none"
            >
              <el-carousel-item
                v-for="(item, index) in MobileMessage"
                :key="index"
              > 
               
                 <el-link type="primary">{{ item.info.infoItem }}</el-link>
                <br />
                <el-link type="primary">{{ item.info.infoAuth }}</el-link> 
                
               </el-carousel-item>
            </el-carousel>
          </div>
        </div> -->
        
        <MobileMess></MobileMess>
      </article>
    </div>

    <div class="tile is-parent is-4" id="item_margin">
      <article class="b-tooltips is-child box" id="opacity_item">
        <p class="subtitle title is-4">问题广场</p>
        <b-tooltip
          label="所有的问题都在这说"
          position="is-bottom"
          
          :animated="false"
        >
          <b-button type="is-primary" label="留个言吧" @click="help()" />
        </b-tooltip>

        <b-tooltip
          label="你有什么想说的Q.0"
          type="is-dark"
          position="is-bottom"
        >
          <b-button label="吐槽6.6" type="is-primary" />
        </b-tooltip>

        <b-tooltip label="生活?" type="is-light" position="is-bottom">
          <b-button label="校园生活" />
        </b-tooltip>

        <b-tooltip label="千里姻缘一线牵？" position="is-bottom" square>
          <b-button label="交个朋友！" type="is-primary" />
        </b-tooltip>
        <b-tooltip label="嘿嘿嘿嘿嘿" position="is-bottom" square>
          <b-button label="开黑嘿嘿嘿" />
        </b-tooltip>

        <b-tooltip
          label="This is test?"
          type="is-primary is-light"
          position="is-bottom"
        >
          <b-button label="这是一个测试帖 " />
        </b-tooltip>
        <b-tooltip
          label="其它你有什么想说的Q.0"
          type="is-dark"
          position="is-bottom"
        >
          <b-button label="其它o.O" type="is-primary" />
        </b-tooltip>

        <b-tooltip
          label="只管许愿就行，成不成随缘"
          position="is-bottom"
          :animated="false"
        >
          <b-button label="许愿@" />
        </b-tooltip>
      </article>
    </div>

    <div class="tile is-parent is-4" id="item_margin">
      <article class="tile is-child box" id="opacity_item">
        <b-tabs>
          <!-- Information -->
          <b-tab-item label="日常消息" icon="home">
            <happy-scroll
              style="height: 150px; width: 100%"
              size="8"
              :min-length-h="0.2"
              color="rgba(51,51,51,0.2)"
            >
              <section>
                <a href=""
                  >{{ everyMessage.hitokoto }}--来自《{{ everyMessage.from }}》
                  .{{ everyMessage.from_who }}</a
                >
                <hr />
                <a href="">如无必要，勿增实体。--来自《箴言书注》 .奥卡姆</a>
                <hr />
                <a href=""
                  >猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。--来自《我的青春恋爱物语果然有问题》
                  .</a
                >
                <hr />
               
              </section>
            </happy-scroll>
          </b-tab-item>
          <!-- Other -->
          <b-tab-item label="其它" icon="google-photos">
            <section>
              <b-field label="写下你的小愿望">
                <b-taginput
                  v-model="tags"
                  ellipsis
                  icon="label"
                  placeholder="输入你的愿望"
                  aria-close-label="Delete this tag"
                >
                </b-taginput>
              </b-field>
              
            </section>
          </b-tab-item>
          <!-- Resource -->
          <b-tab-item label="资源下载" icon="apps" >
            <section  v-for="(item,index) in tempInfo" :key="index">
              <span>{{item.upTime}}</span> {{item.upFileName}}
             <a style="float:right;" :href="'https://'+item.upFileUrl">点击下载</a>
            </section>
          </b-tab-item>
        </b-tabs>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Slider from "../view/Slider.vue";
import MobileMess from '../view/MobileMessInfo.vue'

export default {
  components: {
    Slider,
    MobileMess
  },
  data() {
    return {
      MobileMessage: [],
      count: 0,
      tags: [],
      key: "idvHfTqJf6mEqMA0iXNoIjxFju",
      everyMessage: "",
      tempInfo: [],
    };
  },
  methods: {
    getEverydayMessage() {
      axios
        .get("https://v1.hitokoto.cn")
        .then(({ data }) => {
          console.log(data);
          this.everyMessage = data;
        })
        .catch(console.error);
    },
    //页面跳转  
    help() {
      this.$router.push("messageboard");
    },
    //获取上传资源
    getResourse(){
      axios.get("/admin/get-upFileList",{})
      .then((response)=>{
        const data = response.data;
        this.tempInfo = data
      })
    }
  },
  mounted() {
    this.getEverydayMessage();
    this.getResourse();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/font.css";
body {
  font-family: alimama;
}
.b-tooltips {
  .b-tooltip:not(:last-child) {
    margin-right: 0.5em;
  }
  .b-tooltip {
    margin-bottom: 0.5em;
  }
}
#mood {
  text-align: center;
}

.subtitle {
  text-align: left;
}
.button {
  text-align: center;
  margin: 0 auto;
}
// .size {
//   width: 64px;
//   height: 64px;
// }
#back_image {
  z-index: 1;
  background-image: url("../../assets/backTiles.png");
  background-repeat: no-repeat;
  background-position-y: 25%;
  // background-position-x: 3px;
  // background-size: contain;
}
#opacity_item {
  opacity: 0.8;
}
#item_margin {
  margin-top: 1%;
}
</style>
