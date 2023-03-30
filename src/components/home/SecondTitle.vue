<template>
  <div class="tile is-ancestor"   id="opctipy">
    <div class="tile is-vertical is-8" >
      <!-- <progress class="progress is-whrite is-small" value="100%" max="100">
        30%
      </progress> -->
      <div class="tile"   >
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <p class="title box">
                最新发布的帖子
                <button
                  type="is-info"
                  class="button is-primary is-link is-outlined"
                  @click="looking_small"
                >
                  全部帖子
                  
                </button>
                <a style="float:right;"> <strong>↓</strong></a>
              </p>
            <div class="fuck" @scroll="scrollEvent">
               
                <div class="box"  v-for="(item, i) in info" :key="i" >
                  <article class="media" v-if="item.map">
                    <figure class="media-left">
                      <p class="image is-64x64">
                        <img
                          :src="item.map.user.userImg"
                          class="size"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>@{{ item.map.user.userName }}</strong>
                          <br />
                          {{ item.artTitle }}
                        </p>
                      </div>
                <nav class="level is-mobile">
                  <div class="level-right">
                  <a>
                    <span class="icon is-small">
                        <i class="fab fa-hotjar"></i>
                      </span>
                      {{item.artHotNum+"热度"}}
                  </a>
                  <a>
                      <span class="icon is-small">
                        <i class="fas fa-comment-dots"></i>
                      </span>
                      {{item.artComNum+"评论"}}
                    </a>

                    <a>
                      <span class="icon is-small">
                        <i class="fas fa-heart"></i>
                      </span>
                      {{item.artLikeNum+"喜欢"}}
                    </a>
                  </div>
                </nav>
                    </div>
                    <div class="media-right">
                      <a class="navbar-item" slot="trigger" role="button">
                        <button
                          type="is-info"
                          class="button is-primary is-link is-outlined"
                          @click="looking_big(i)"
                        >
                          查看详情
                        </button>
                      </a>
                    </div>
                  </article>
                </div>
            </div>
            <hr/>
            <p style="text-align: center;">{{message}}</p>
          </article>
        </div>
      </div>

      <!-- 友情链接 -->
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">友情链接</p>
          <div class="control">
            <div class="tags has-addons">
              <a class="tag is-dark" href="https://cn.dubbo.apache.org/zh-cn/">Dubbo</a>
              <a class="tag is-primary">3.1.5</a>
            </div>
          </div>
        </article>
        
        <article class="tile is-child box">
          <p class="title">外链</p>
          <div class="control">
            <div class="tags has-addons">
              
              <b-taglist attached>
                  <a class="tag is-dark" href="https://www.github.com">GitHub</a>
                  <a class="tag is-primary">1.0.53</a>
                    <b-tag type="is-primary">npm</b-tag>
                    <b-tag type="is-success">7.5.1</b-tag>
                    <a class="tag is-primary" href="https://buefy.org/">Buefy</a>
                    <a class="tag is-success">0.9.22</a>
                    <a class="tag is-dark" href="https://sa-token.cc/">sa-token</a>
                    <a class="tag is-success">1.34.0</a>
                </b-taglist>
                
            </div>
          </div>
          
        </article>
        
      </div>
    </div>
      <!-- 寻物启事 -->
    <div class="tile is-parent is-vertical backs">
      <article class="tile is-child box">
        <p class="title ">寻"物"启示</p>
      

        <div class="fucks content">
          <happy-scroll  size="2" left  color="rgba(75,0,130,0.2)">
            <Findsome></Findsome>
            
        </happy-scroll>
          
        </div>
      </article>
    </div>
  </div>
</template>

<script>


import axios from 'axios';
import Findsome from '@/components/view/Findsome.vue'
export default {
  components:{
    Findsome
  },
  data() {
    return {
      message:"",
      users: [
        {
          userId: 0,
          userPassword: 0,
          userName: "",
          userEmail: "",
          userSex: "",
          userPhone: "",
          userStatus: 0,
          userTime: "",
          userShow: "",
          userBlog: "",
          userImg: "",
          userFans: 0,
          userConcern: 0,
        },
      ],
      info: [
        {
          article: {
            artId: 0,
            artUserId: 0,
            artTitle: "",
            artTypeId: 0,
            artContent: "",
            artCommentId: 0,
            artCreTime: "",
            artView: "",
            artComNum: 0,
            artHotNum: 0,
            artLikeNum: 0,
          },
          user: {
            userId: 0,
            userPassword: 0,
            userName: "",
            userEmail: "",
            userSex: "",
            userPhone: "",
            userStatus: 0,
            userTime: "",
            userShow: "",
            userBlog: "",
            userImg: "",
            userFans: 0,
            userConcern: 0,
          },
        },
      ],
    };
  },
  methods: {
    //查看所有文章
    looking_small() {
      this.$router.push({
        name: "all",
      });
    },
    //查看详情
    looking_big(i) {
      const detaildata = this.info[i];
      this.$router.push({
        name: "details",
        query: {
          detaildata: JSON.stringify(detaildata) 
        }
      });
     
    },
    //获取文章
    getArticle(){
      axios.get(
        "/service/get-article"
      )
      .then((response)=>{
         
        const present= response?.data.data;
        this.info = present.reverse();
        // console.log("info:",this.info);
      })
    },
    //滑到底提示
    scrollEvent(e){
      //e.srcElement.scrollTop: 滚动条距离页面顶部距离
	    //e.srcElement.clientHeight: 滚动页面高度
	    //e.srcElement.scrollHeight: 滚动条高度
      // console.log(e.srcElement.scrollTop);
      // console.log(e);
      if (e.srcElement.scrollTop + e.srcElement.clientHeight < e.srcElement.scrollHeight){
          this.message = "";
          if (e.srcElement.scrollTop + e.srcElement.clientHeight > e.srcElement.scrollHeight -200) {
          this.message = "到 底线 了";   
            }
        }
      
     
      
    },


  },
  mounted(){
    this.getArticle();
  }
  
};
</script>


<style scoped>
.hero.is-medium .hero-body {
  padding-top: 0rem;
  padding-bottom: 3rem;
}
.fuck {
  width: 100%;
  height: 366px;
  /* overflow-y: auto; */
  overflow-y: scroll;
}
.fucks {
  height: 600px;
  /* overflow-y: auto; */
}
.backs {
  opacity: 0.98;
  
}
/* 启示卡片 */
.item-boder {
  border-style:solid;
  width: 98%;
  border-color: rgb(157, 233, 252);
}
.navbar-item {
  text-decoration: none;
}
#opctipy {
  opacity: 0.99;  
  /* z-index: 1;  */
  background-image: url("../../assets/backSecond.png"); 
  background-repeat: round;
  background-position-y: -10px;
  
}
</style>