<template>
  <div class="tile is-ancestor" id="opctipy">
    <div class="tile is-vertical is-8">
      <progress class="progress is-whrite is-small" value="100%" max="30">
        30%
      </progress>
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box">
            <div class="fuck">
              <p class="title">
                最新发布的帖子
                <button
                  type="is-info"
                  class="button is-primary is-link is-outlined"
                  @click="looking_small"
                >
                  全部帖子
                </button>
              </p>
              <div class="box" v-for="(item, i) in info" :key="i" >
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

    <div class="tile is-parent">
      <article class="tile is-child box">
        <div class="content">
          <p class="title">用户人气榜</p>

          <div class="card" v-for="(user, k) in users" :key="k">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="../../assets/login_background_png.png"
                      class="size"
                      alt=""
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">
                    大名：小明
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
.navbar-item {
  text-decoration: none;
}
#opctipy {
  background-image: url("../../assets/background_end.png");
  background-repeat: round;
  
}
</style>