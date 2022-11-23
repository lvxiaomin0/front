<template>
  <div class="tile is-ancestor" id="opctipy">
    <div class="tile is-vertical is-8">
      <progress class="progress is-whrite is-small" value="100%" max="30">
        30%
      </progress>
      <div class="tile">
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
              </p>
            <div class="fuck">
                <div class="box"  v-for="(item, i) in info" :key="i" >
                  <article class="media" v-if="item.map">
                    <figure class="media-left">
                      <p class="image is-64x64">
                        <!-- <img :src="require(`@/assets/${item.user.userImg}`)" class="size" /> -->
                        <!-- <img src="../../assets/user1.jpg" alt /> -->
                        <!-- <img
                          src="../../assets/login_background_png.png"
                          class="size"
                          alt=""
                        /> -->
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
                          <strong>{{ item.map.user.userName }}</strong>
                          <br />
                          {{ item.artTitle }}
                        </p>
                      </div>
                <!-- <nav class="level is-mobile">
                  <div class="level-right">
                    <a class="level-item">
                      <span class="icon is-small">
                        <i class="fab fa-hotjar"></i>
                      </span>
                      {{}}
                    </a>

                    <a class="level-item">
                      <span class="icon is-small">
                        <i class="fas fa-comment-dots"></i>
                      </span>
                      {{}}
                    </a>

                    <a class="level-item">
                      <span class="icon is-small">
                        <i class="fas fa-heart"></i>
                      </span>
                      {{}}
                    </a>
                  </div>
                </nav> -->
                <nav class="level is-mobile">
                  <div class="level-right">
                  <a>
                    <span class="icon is-small">
                        <i class="fab fa-hotjar"></i>
                      </span>
                      {{"热度"}}
                  </a>
                  <a>
                      <span class="icon is-small">
                        <i class="fas fa-comment-dots"></i>
                      </span>
                      {{"评论"}}
                    </a>

                    <a>
                      <span class="icon is-small">
                        <i class="fas fa-heart"></i>
                      </span>
                      {{"喜欢"}}
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
            <hr />
          </article>
        </div>
      </div>

      <!-- 友情链接 -->
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">友情链接</p>
          <div class="control">
            <div class="tags has-addons">
              <a class="tag is-dark" href="https://www.github.com">GitHub</a>
              <a class="tag is-primary">6.6.6</a>
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
          <section>
          <div class="card box item-boder" v-for="(user, k) in users" :key="k">
            <div class="card-content">
              <div class="media">
                <div class="media-left">

                    <figure class="image is-48x48">
                    <img
                      :src="$store.state.user.userImg"
                      class="size"
                      alt=""
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-5">
                    <i class="fas">Ming</i>
                  </p>
                </div>
              </div>
              
              <div class="content">
                <p>
                  -帮忙找一下，路边丢失的Mac Book Pro 16寸 1TB 32G
                  -- 有线索请联系俺 754946573
                </p>
                <i class="far fa-hand-point-right">个人主页</i>
                <br />粉丝数：
                <i class="fab fa-gratipay">{{ user.userFans }}</i>
                <br />
              </div>
            </div>
          </div>

          <div class="card box item-boder" v-for="(user, k) in users" :key="k">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      :src="$store.state.user.userImg"
                      class="size"
                      alt=""
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">
                    <i class="fas fa-female">Ming</i>
                  </p>
                </div>
              </div>
              
              <div class="content">
                <p>
                  格言：世界既不黑也不白,而是一道精致的灰————《青钢影·卡蜜尔》
                </p>
                <i class="far fa-hand-point-right">个人主页</i>
                <br />粉丝数：
                <i class="fab fa-gratipay">{{ user.userFans }}</i>
                <br />
              </div>
            </div>
          </div>
          
         
          </section>
        </happy-scroll>
          
          
          
         

        </div>
      </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
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
    looking_small() {
      this.$router.push({
        name: "all",
      });
    },
    looking_big(i) {
      const detaildata = this.info[i];
      this.$router.push({
        name: "details",
        query: {
          detaildata: JSON.stringify(detaildata) 
        }
      });
    },

    getArticle(){
      axios.get(
        "http://localhost:8081/service/get-article"
      )
      .then((response)=>{
        this.info = response.data.data;
        console.log("info:",this.info);
      })
    }
  },
  mounted(){
    this.getArticle()
  }
};
</script>


<style scoped>
.hero.is-medium .hero-body {
  padding-top: 0rem;
  padding-bottom: 3rem;
}
.fuck {
  height: 300px;
  overflow-y: auto;
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
  background-image: url("../../assets/background_end.png");
  background-repeat: round;
  
}
</style>