<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="../../assets/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">{{ nowTime }}</b-navbar-item>
      </template>
    </b-navbar>
    <div class="Wrapper">
      <div class="content">
        <div class="Leftbar"></div>

        <div class="Rightbar" v-if="$store.state.loginStates">
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="48" valign="top">
                      <a href="#">
                        <img
                          :src="$store.state.user.userImg"
                          class="avatar"
                          border="0"
                          align="default"
                          style="max-width: 48px; max-height: 48px"
                        />
                      </a>
                    </td>
                    <td width="10" valign="top"></td>
                    <td width="auto" align="left">
                      <span class="bigger">
                        <a href="#">{{ $store.state.user.userName }}</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="sep10"></div>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="33%" align="center">
                      <a href="#" class="dark" style="display: block">
                        <span class="bigger">{{
                          $store.state.user.userFans
                        }}</span>
                        <div class="sep3"></div>
                        <span class="fade">粉丝数</span>
                      </a>
                    </td>
                    <td
                      width="34%"
                      style="
                        border-left: 1px solid rgba(100, 100, 100, 0.4);
                        border-right: 1px solid rgba(100, 100, 100, 0.4);
                      "
                      align="center"
                    >
                      <a href="#" class="dark" style="display: block">
                        <span class="bigger">{{ 1 }}</span>
                        <div class="sep3"></div>
                        <span class="fade">你的帖子</span>
                      </a>
                    </td>
                    <td width="33%" align="center">
                      <a href="#" class="dark" style="display: block">
                        <span class="bigger">{{
                          $store.state.user.userConcern
                        }}</span>
                        <div class="sep3"></div>
                        <span class="fade">你关注的人数</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="cell" id="member-activity">
              <div class="member-activity-bar">
                <div class="member-activity-start" style="width: 15px"></div>
              </div>
            </div>
            <div class="cell" style="padding: 5px">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="28">
                      <a href="#">
                        <img src width="28" border="0" />
                      </a>
                    </td>
                    <td width="10"></td>
                    <td
                      width="auto"
                      valign="middle"
                      align="left"
                      v-if="info.map.user"
                    >
                      <!-- <a >这是点赞</a>
                      &nbsp;
                      <a >这是收藏</a> -->
                      <Nice :userData="this.info.map.user.userId" :articleId="this.info.artId"></Nice>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="inner">
              <div class="fr" id="money" style="margin: -3px 0px 0px 0px"></div>
              <a class="fade" @click="Post()">去发帖</a>
            </div>
          </div>
        </div>
        <div id="Rightbar" v-else>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              <strong>Say what u want 2 say</strong>
              <div class="sep5"></div>
              <span class="fade">这是一个关于分享和探索的地方</span>
            </div>
            <div class="inner">
              <div class="sep5"></div>
              <div align="center">
                <a href="" class="super normal button">现在注册</a>
                <div class="sep5"></div>
                <div class="sep10"></div>
                已注册用户请 &nbsp;
                <a href="login">登录</a>
              </div>
            </div>
          </div>
          <div class="sep20"></div>
        </div>
        <div class="Main">
          <div class="sep20"></div>
          <div class="box" style="border-bottom: 0px">
            <div class="header">
              <div class="image is-16by9" v-if="info">
                <img :src="info.artImage" class="size" alt="" />

              </div>
              <div class="sep10"></div>
              <h1>-> {{ info.artTitle }}</h1>

              <small class="gray" v-if="info.map.user">@{{info.map.user.userName}}</small>
            </div>
            <div class="cell">{{ info.artContent }}</div>
          </div>

          <div class="sep20"></div>
          <div class="box">
            <div class="cell">回复</div>
            <div class="fuck"></div>
            <div class="cell" v-for="(index, item) in comments" :key="item">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody v-if="index.map">
                  <tr>
                    <td width="48" valign="top" align="center">
                      <img :src="index.map.user.userImg" class="size" alt="" />
                    </td>
                    <td width="10" valign="top"></td>
                    <td width="auto" valign="top" align="left">
                      <div class="fr">
                        &nbsp; &nbsp;
                        <span class="no"></span>
                      </div>
                      <div class="sep3"></div>
                      <strong>
                        <a class="dark">{{
                          index.map.user.userName
                        }}</a> </strong
                      >&nbsp; &nbsp;
                      <span class="ago">{{ index.comTime }}</span>
                      <div class="sep5"></div>
                      <div class="reply_content">{{ index.comContent }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              <div class="fr">
                <a> <strong>↑</strong> 注意用语规范 </a>
              </div>
              添加一条新回复
            </div>
            <div class="cell">
              <form>
                <textarea
                  v-model="reply_content"
                  name="content"
                  maxlength="10000"
                  class="mll"
                  id="reply_content"
                  style="
                    overflow: auto;
                    word-break: break-all;
                    resize: none;
                    height: 112px;
                    width: 100%;
                  "
                ></textarea>
                <div class="sep10"></div>
                <div class="fr">
                  <div class="sep5"></div>
                  <span class="gray">请尽量让自己的回复能够对别人有帮助</span>
                </div>
                <input type="hidden" value="41475" name="once" />
                <input
                  type="button"
                  value="回复"
                  class="super normal button"
                  @click="SetComments()"
                />
              </form>
            </div>
            <div class="inner">
              <div class="fr">
                <a href="#">← Top</a>
              </div>
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Bottom">
      <div class="content">
        <div class="inner">
          <div class="sep10"></div>
          <div class="fr"></div>
          <strong>
            <a href="" class="dark" target="_self">关于</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="" class="dark" target="_self">FAQ</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="" class="dark" target="_self">API</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="" class="dark" target="_self">我们的愿景</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="" class="dark" target="_self">广告投放</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="" class="dark" target="_self">感谢</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="" class="dark" target="_self">实用小工具</a>
          </strong>
          <div class="sep20"></div>
          创意工作者们的社区
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Login from "../login/Login.vue";
import Nice from "./nice.vue";
export default {
  components: {
    Login,
    Nice,
  },
  data() {
    return {
      nowTime: "",
      myartnum: 0,
      reply_content: "",
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
            artImage: "",
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
      comments: [
        {
          comment: {
            comId: 0,
            comArtId: 0,
            comContent: "",
            comTime: "",
            comUserId: "",
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
  /**
   * 沟子
   */
  mounted() {
    this.info = JSON?.parse(this.$route.query.detaildata);
    this.GetComments();
    this.nowTimes();

    this.updateArtHotAndView();
  },
  methods: {
    updateArtHotAndView(){
      //  console.log(this.info.artId);
       //文章热度加10，访问量加1
        axios.post("/service/update-arthrotomies",{
              artId: this.info.artId
        }).then((response)=>{
            // console.log(response.data);
        })
    },
    
    Post() {
      this.$router.push("/postarticle");
    },
    /**
     * 获取评论
     */
    GetComments() {
      axios
        .get("/comments/get-comments?artId=" + this.info.artId)
        .then((response) => {
          this.comments = response.data.data;
        });
    },
    /**
     * 评论写入
     */
    SetComments() {
      axios
        .post("/comments/set-comments", {
          comArtId: this.info.artId,
          comUserId: JSON.parse(window.localStorage.getItem("user")).userId,
          comContent: this.reply_content,
        })
        .then((response) => {
          if (response.data.code === 200) {
            
            this.GetComments();
          }
        });
      this.reply_content = "";
    },
    //右上角时间
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      var d = new Date(timeStamp).getDay();
      let day;
      if (d == 0) {
        day = "日";
      } else if (d == 1) {
        day = "一";
      } else if (d == 2) {
        day = "二";
      } else if (d == 3) {
        day = "三";
      } else if (d == 4) {
        day = "四";
      } else if (d == 5) {
        day = "五";
      } else if (d == 6) {
        day = "六";
      }
      this.nowTime =
        hh +
        ":" +
        mm +
        ":" +
        ss +
        "   " +
        year +
        "/" +
        month +
        "/" +
        date +
        "   " +
        "星期" +
        day;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    },
  },
};
</script>

<style scoped>
@import "../../assets/font.css";
body {
  font-family: alimama;
}
@import url("//at.alicdn.com/t/c/font_3724495_47d4vtspf88.css");
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
textarea {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textarea;
  background-color: -internal-light-dark-color(white, black);
  -webkit-rtl-ordering: logical;
  flex-direction: column;
  resize: auto;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  margin: 0em;
  font: 400 13.3333px Arial;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(169, 169, 169);
  border-image: initial;
  padding: 2px;
  width: 720px;
}
form {
  display: block;
  margin-top: 0em;
}
#Rightbar {
  width: 270px;
  float: right;
  margin-right: 20px;
}
.bigger {
  text-align: center;
  font-size: 20px;
}
.sep20 {
  height: 20px;
}
.Wrapper {
  background-color: #e2e2e2;
  background-repeat: repeat-x, repeat-x;
  text-align: center;
}
.content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
}
.Leftbar {
  width: 0;
  float: left;
}
.Rightbar {
  width: 270px;
  float: right;
  margin-right: 20px;
}
.Main {
  width: auto;
  margin: 0 310px 0 20px;
}
.div {
  display: block;
}
.box {
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e2e2;
}
.header {
  padding: 10px;
  font-size: 15px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
  overflow: auto;
}
.cell {
  padding: 10px;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
}
.table {
  display: table;
  border-collapse: separate;
  border-color: grey;
}

.tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.fuck {
  border-bottom: 1px solid #e2e2e2;
}
.fr {
  float: right;
  text-align: right;
}
.sep10 {
  height: 10px;
}
.h1 {
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  margin: 0 0 10px;
  padding: 0;
}
.gray {
  color: #999;
}
.small {
  font-size: smaller;
}
#Bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.22);
  background-color: var(--box-background-color);
  text-align: center;
  color: #999;
  padding: 0 10px;
}
:root {
  --box-background-color: #fff;
  --box-background-alt-color: #f9f9f9;
  --box-background-hover-color: #fafafa;
  --box-foreground-color: #000;
  --box-border-color: #e2e2e2;
  --box-border-radius: 3px;
}
.inner {
  padding: 10px;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}
strong {
  font-weight: bold;
}
a.dark:active,
a.dark:link,
a.dark:visited {
  color: gray;
  text-decoration: none;
}
a:active,
a:link,
a:visited {
  color: #778087;
  text-decoration: none;
  word-break: break-word;
}
a {
  color: #000;
}
</style>