<template>
  <div>
    <div id="Top">
      <div class="content">
        <div style="padding-top: 6px">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
              <tr>
                <td width="110" align="left">
                  <a href="/" name="top" title="way to explore">
                    <div id="Logo">
                     <!-- <p></p> -->
                    </div>
                  </a>
                </td>
                <td width="auto" align="left"></td>
                <td width="570" align="right" style="padding-top: 2px">
                  <a href="/" class="top">首页</a>
                  &nbsp;&nbsp;&nbsp;
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        
      </div>
    </div>

    <div id="Wrapper">
      <div class="content">
        <div id="Leftbar"></div>
        <div id="Rightbar">
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">发帖提示</div>
            <div class="inner">
              <ul style="margin-top: 0px">
                <li>
                  <span class="f13">主题标题</span>
                  <div class="sep10"></div>
                  请在标题中描述内容要点。
                  <div class="sep10"></div>
                </li>
                <li>
                  <div
                    class="fr"
                    style="margin-top: -5px; margin-right: 5px"
                  ></div>
                  <span class="f13">正文</span>
                  <div class="sep10"></div>
                  可以在正文中为你要发布的主题添加更多细节。
                  <div class="sep10"></div>
                </li>
                <li>
                  <span class="f13">选择板块</span>
                  <div class="sep10"></div>
                  在最后，请为你的主题选择一个板块。恰当的归类会让你发布的信息更加有用。
                  <div class="sep10"></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">论坛原则</div>
            <div class="inner">
              <ul style="margin-top: 0px">
                <li>
                  <span class="f13">尊重原创</span>
                  <div class="sep10"></div>
                  请不要在该论坛发布任何盗版下载链接，包括软件、音乐、电影等等。
                  <div class="sep10"></div>
                </li>
                <li>
                  <span class="f13">友好互助</span>
                  <div class="sep10"></div>
                  保持对陌生人的友善。用知识去帮助别人。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="Main">
          <div class="sep20"></div>
          <div class="box" id="box">
            <div class="cell">
              <a href="/">{{ userName }}</a>
              <span class="chevron">&nbsp;›&nbsp;</span> 发表新帖
            </div>
            <form method="post" action="/new" id="compose">
              <div class="cell">
                <div class="fr fade" id="title_remaining">120</div>
                帖子标题
              </div>
              <div class="cell" style="padding: 0px">
                <textarea
                  v-model="objectArticle.title"
                  class="msl"
                  rows="1"
                  maxlength="120"
                  id="topic_title"
                  name="title"
                  autofocus="autofocus"
                  placeholder="请输入帖子标题，如果标题能够表达完整内容，则正文可以为空"
                ></textarea>
              </div>
              <div class="cell">
                <div class="fr fade" id="content_remaining">20000</div>
                正文
              </div>

              <form action>
                <textarea
                  name="post"
                  cols="100"
                  rows="10"
                  style="
                    resize: none;
                    width: 100%;
                    overflow: auto;
                    word-break: break-all;
                  "
                  v-model="objectArticle.text"
                ></textarea>
              </form>

              <div class="cell">
                <select
                  name="node_name"
                  id="nodes"
                  style="width: 300px; font-size: 14px"
                  data-select2-id="nodes"
                  tabindex="-1"
                  class="select2-hidden-accessible"
                  aria-hidden="true"
                  v-model="objectArticle.select"
                >
                  <option value="1" data-select2-id="1069">寻物</option>
                  <option value="2" data-select2-id="1070">求助</option>
                  <option value="3" data-select2-id="1069">步行街</option>
                  <option value="4" data-select2-id="1069">跳蚤市场</option>
                  <option value="5" data-select2-id="1069">健身区</option>
                  <option value="6" data-select2-id="1069">学习专区</option>
                </select>
                <span
                  class="select2 select2-container select2-container--default"
                  dir="ltr"
                  data-select2-id="1"
                  style="width: 300px"
                >
                  <span class="selection">
                    <span
                      class="select2-selection select2-selection--single"
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabindex="0"
                      aria-disabled="false"
                      aria-labelledby="select2-nodes-container"
                    >
                      <span
                        class="select2-selection__rendered"
                        id="select2-nodes-container"
                        role="textbox"
                        aria-readonly="true"
                      >
                        <span class="select2-selection__placeholder"
                          >请选择一个板块</span
                        >
                      </span>
                      <span
                        class="select2-selection__arrow"
                        role="presentation"
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>

              <input type="hidden" name="content" value id="topic_content" />
              <input type="hidden" name="once" value="97891" />
            </form>

            <div class="cell">
              <div class="fr">
                <span id="error_message"></span> &nbsp;
                <button
                  type="button"
                  class="super normal button is-primary"
                  @click="upload()"
                >
                  <li class="fa fa-paper-plane"></li>
                  &nbsp;发布
                </button>
              </div>

              <el-upload
                action=""
                :auto-upload="true"
                list-type="picture-card"
                :http-request="handlerUpload"
                multiple
              >
                <i slot="default" class="el-icon-plus"></i>

                <div slot="file" slot-scope="{ file }">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url"
                    alt=""
                  />

                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>

                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                    >
                      <i class="el-icon-download"></i>
                    </span>

                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <!-- 查看大图 -->
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
            </div>
          </div>
        </div>
      </div>
      <div class="c"></div>
      <div class="sep20"></div>
    </div>
    <div id="Bottom">
      <div class="content">
        <div class="inner">
          <div class="sep10"></div>
          <div class="fr">
            <a
              href="https://www.digitalocean.com/?refcode=1b51f1a7651d"
              target="_blank"
            >
              <div id="DigitalOcean"></div>
            </a>
          </div>
          <strong>
            <a href="/about" class="dark" target="_self">关于</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/faq" class="dark" target="_self">FAQ</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/p/7v9TEc53" class="dark" target="_self">API</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/mission" class="dark" target="_self">我们的愿景</a>
            &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/advertise/2019.html" class="dark" target="_self">感谢</a>
            &nbsp;
          </strong>
          &nbsp;
          <div class="sep20"></div>
          创意工作者们的社区
          <div class="sep5"></div>
          World is powered by solitude
          <div class="sep20"></div>
          <span class="small fade">
            <br />♥ Do have faith in what you're doing.
          </span>
          <div class="sep10"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

// 格式化时间函数
import { parseTime } from "@/utils/index";


export default {
  components: {
    
    
  },
  data() {
    return {
      userName:"",
      nowTime:'',
      objectArticle: {
        select: "",
        title: "",
        text: "",
        userId: "",
      },
      imagesList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  created() {
    //暂定不一定用
    if (JSON.stringify(this.objectArticle) === "{}") {
      this.$buefy.notification.open({
        message: "标题和内容不能为空!",
        type: "is-danger",
      });
    }
  },
  mounted() {
    this.userName = JSON.parse(window.localStorage.getItem("user")).userName;
    this.nowTimes();
    this.objectArticle.userId =JSON.parse(window.localStorage.getItem("user")).userId;
  },

  methods: {
    //上传图片
    handlerUpload(data) {
      this.imagesList.push(data.file);
    },
    //移除图片
    handleRemove(file) {
      console.log(file);
    },
    //查看大图
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //下载图片
    handleDownload(file) {
      console.log(file);
    },
    //upload
    upload() {
      var formData = new FormData();
      formData.append("artTypeId", this.objectArticle.select);
      formData.append("artTitle", this.objectArticle.title);
      formData.append("artContent", this.objectArticle.text);
      formData.append("artUserId", this.objectArticle.userId);
      for (let index = 0; index < this.imagesList.length; index++) {
        formData.append("file", this.imagesList[index]);
      }
      axios({
        url: "/service/add-article",
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        console.log(response.data);
        const data = response.data;
        if (data.code === 500) {
          this.$buefy.notification.open({
            message: "咱不能啥也不写吧！！！",
            type: "is-danger",
          });
        } else if (data.code === 200) {
          location.reload();
          this.$buefy.notification.open({
            message: "发布成功",
            type: "is-success",
          });
          
        }
      });
    },

    //上传  --已废弃
    post() {
      console.log(this);
      this.objectArticle.userId = this.$store.state.user.userId;
      // 生成时间
      var timestamp = Date.parse(new Date());
      // 上传表单
      var formData = new FormData();
      axios
        .post("http://localhost:8081/service/add-article", {
          artTypeId: this.objectArticle.select,
          artTitle: this.objectArticle.title,
          artContent: this.objectArticle.text,
          artUserId: this.objectArticle.userId,
          artCreTime: parseTime(timestamp, "{y}-{m}-{d} {h}:{i}:{s}"),
          artImages: this.imagesList,
        })
        .then((response) => {
          console.log(response.data);
          const data = response.data;
          if (data.code === 500) {
            this.$buefy.notification.open({
              message: "咱不能啥也不写吧！！！",
              type: "is-danger",
            });
          } else if (data.code === 200) {
            this.$buefy.notification.open({
              message: "发布成功",
              type: "is-success",
            });
          }
        });
      //上传图片 --已废弃
      var formData = new FormData();
      for (let index = 0; index < this.imagesList.length; index++) {
        formData.append("file", this.imagesList[index]);
      }
      console.log(formData);
      axios({
        url: "http://localhost:8081/upload/updateFile",
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        console.log(response);
      });
    },
    //右上角时间
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
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
      this.nowTime = hh+":"+mm+':'+ss+"   "+year + "/" + month + "/" + date+"   "+ "星期"+day;
    },
    nowTimes(){
      this.timeFormate(new Date());
      setInterval(this.nowTimes,1000);
      this.clear()
    },
    clear(){
      clearInterval(this.nowTimes)
      this.nowTimes = null;
    },
  },
};
</script>

<style scoped>
@import "../../assets/font.css";
 body{
  font-family: alimama;
 }
.fade {
  color: #ccc;
}

.msl {
  width: 100%;
  border: none;
  resize: none;
  background-color: #f9f9f9;
  outline: 0;
  font-size: 14px;
  line-height: 20px;
  padding: 10px;
  font-family: helvetica neue, hiragino sans gb, microsoft yahei, sans-serif;
  margin: 0;
  box-sizing: border-box;
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
}

style Attribute {
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
  font-size: 14px;
  line-height: 120%;
}

#Bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.22);
  background-color: var(--box-background-color);
  text-align: center;
  color: #999;
  padding: 0 10px;
}
div {
  display: block;
}
body {
  padding: 0px;
  margin: 0px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", "Segoe UI",
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
:root {
  --box-background-color: #fff;
  --box-background-alt-color: #f9f9f9;
  --box-background-hover-color: #fafafa;
  --box-foreground-color: #000;
  --box-border-color: #e2e2e2;
  --box-border-radius: 3px;
}
#Top {
  text-align: center;
  background-color: var(--box-background-color);
  height: 44px;
  font-size: 15px;
  font-weight: 500;
  background-size: 44px 44px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
  padding: 0 20px;
}
#Wrapper {
  text-align: center;
  background-color: #e2e2e2;
  background-image: url(../../assets/post_back_two.png);
  background-repeat: repeat-x;
}
#Top > .content {
  max-width: 1060px;
}
.content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
}
table Attributes Style {
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  width: 100%;
}
user agent stylesheet table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td Attributes Style {
  width: 110px;
  text-align: -webkit-left;
}
user agent stylesheet td {
  display: table-cell;
  vertical-align: inherit;
}
.c {
  clear: both;
}
.sep20 {
  height: 20px;
}
#Leftbar {
  width: 0;
  float: left;
}
#Rightbar {
  width: 270px;
  float: right;
  margin-right: 20px;
}
.fr {
  float: right;
  text-align: right;
}
#Main {
  width: auto;
  margin: 0 310px 0 20px;
}
.box {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e2e2;
}
.cell {
  padding: 10px;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
}
.inner {
  padding: 10px;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}
ul {
  margin: 15px 0 15px 20px;
  padding: 0;
}
user agent stylesheet ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
ol li,
ul li {
  padding: 0;
  margin: 0;
}
user agent stylesheet li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.f13 {
  font-size: 13px;
}
.sep10 {
  height: 10px;
}
form {
  display: block;
  margin-top: 0em;
}
element.style {
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
  font-size: 14px;
  line-height: 120%;
}
input[type="hidden" i] {
  display: none;
  -webkit-appearance: initial;
  background-color: initial;
  cursor: default;
  padding: initial;
  border: initial;
}
#editor {
  position: relative;
  width: auto;
  height: 600px;
  font-size: 16px;
  line-height: 130%;
}
user agent stylesheet input {
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
  -webkit-appearance: textfield;
  background-color: -internal-light-dark-color(white, black);
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
</style>