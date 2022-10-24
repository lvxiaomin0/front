<template>
  <div class="tile is-ancestor" id="back_image" style="height:280px;">
    <div class="tile is-parent is-4" id="item_margin" >
      <article class="tile is-child box" id="opacity_item" style="overflow-y: scroll; overflow-x: hidden;overflow-y: hidden;">
        <section>
          <p class="subtitle title is-4">流动消息</p>
        </section>
        <!-- <div class="tile is-child is-1" id="mood">
          <Slider></Slider>
          </div> -->
          
           <div class="tile is-child is-10" id="mood">
          <Mood></Mood>
            <div>
              <el-link type="primary">没有BUG的代码是不完美的！ --Sodium_Sulfate</el-link>
              <br>
              <el-link type="success">大本钟下送快递——上面摆，下面寄。 --饭堂周末夜</el-link>
              <br>
              <el-link type="warning">你，对，你，就是你，你是你。 --什</el-link>
              <br>
              <el-link type="danger">当遇到你时，大脑连上CSGO都会掉帧。 --Florence</el-link>
              <br>
              <el-link type="info">一旦醉心于狩猎，不到最后关头不会发现自己才是猎物。 --来自新世界</el-link> 
            </div>
          </div>
      </article>
    </div>

    <div class="tile is-parent is-4" id="item_margin">
      <article class="b-tooltips is-child box" id="opacity_item" >
        <p class="subtitle title is-4">问题广场</p>
        <b-tooltip
          label="也许你需要一点小小的帮助！！"
          position="is-bottom"
          :animated="false"
        >
          <b-button label="求助帖" />
        </b-tooltip>

        <b-tooltip label="你有什么想说的Q.0" type="is-dark" position="is-bottom">
          <b-button label="吐槽帖" type="is-primary" />
        </b-tooltip>

        <b-tooltip label="生活?" type="is-light" position="is-bottom">
          <b-button label="校园生活" />
        </b-tooltip>

        <b-tooltip label="千里姻缘一线牵？" position="is-bottom" square>
          <b-button label="交个朋友！" type="is-primary"/>
        </b-tooltip>
        <b-tooltip label="嘿嘿嘿嘿嘿" position="is-bottom" square>
          <b-button label="开黑嘿嘿嘿" />
        </b-tooltip>

        <b-tooltip
          label="You love the light variant, dont you?"
          type="is-primary is-light"
          position="is-bottom"
        >
          <b-button label="Primary light " />
        </b-tooltip>
      </article>
    </div>

    <div class="tile is-parent is-4" id="item_margin">
      <article class="tile is-child box" id="opacity_item" style="overflow-y: scroll;">
        <b-tabs>
          <!-- Information -->
          <b-tab-item label="日常消息" icon="home" >
            <section>
              <a href="">{{everyMessage.hitokoto}}--来自《{{everyMessage.from}}》 .{{everyMessage.from_who}}</a>
              <hr>
            </section>
            

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
              <!-- <p class="content"><b>Tags:</b> {{ tags }}</p> -->
            </section>
          </b-tab-item>
          <!-- Resource -->
          <b-tab-item label="资源下载" icon="apps"> </b-tab-item>
        </b-tabs>
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Slider from "../view/Slider.vue";
import Mood from "../view/Mood.vue"

export default {
  components: {
      Slider,
      Mood
      
  },
  data() {
    return {
      count: 0,
      tags: [],
      isTag1Active: true,
      isTag2Active: true,
      isTag3Active: true,
      isTag4Active: true,
      isTag5Active: true,
      isTag6Active: true,
      key:"idvHfTqJf6mEqMA0iXNoIjxFju",
      everyMessage: ""
    };
  },
  methods: {
    getEverydayMessage(){
      axios.get('https://v1.hitokoto.cn')
    .then(({ data }) => {
      console.log(data)
      this.everyMessage = data
    })
    .catch(console.error)
    }
    
  },
  mounted(){
   this.getEverydayMessage()
  }
};
</script>

<style lang="scss" scoped>
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
  background-image: url("../../assets/banner_two.png");
  background-repeat: no-repeat;
  background-position-x: -10px;
  // background-size: contain;
}
#opacity_item {
  opacity: 0.8;
}
#item_margin {
  margin-top: 1%;
}
</style>
