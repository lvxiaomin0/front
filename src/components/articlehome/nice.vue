<template>
  <section class="b-tooltips">
    <b-tooltip
      position="is-bottom"
      type="is-light"
      :triggers="['click', 'hover']"
      :auto-close="['outside', 'escape']"
    >
      <template v-slot:content>
        <!-- 关注 -->
        <a @click="likeAction()"
          ><b-icon
            icon="heart"
            :type="attStatus ? 'is-danger' : 'is-dark'"
          ></b-icon
        ></a>
        &nbsp;
        <!-- 点赞 -->
        <a @click="thumbsUp()"
          ><b-icon
            :icon="thumbsUpStatus ? 'thumb-up' : 'thumb-down'"
            :type="thumbsUpStatus ? 'is-info' : 'is-warning'"
          ></b-icon
        ></a>
        <!-- &nbsp; -->

        <!-- 弱爆了 -->
        <!-- <a @click="Weaking()"><b-icon icon="thumb-down" type="is-warning"></b-icon></a> -->
        &nbsp;
        <!-- 呵呵 -->
        <a @click="chortled()"><b-icon icon="emoticon-cool"></b-icon></a>
      </template>
      <b-button label="Come on!" icon-left="heart" type="is-light" />
    </b-tooltip>
  </section>
</template>



<script>
import axios from "axios";
export default {
  name: "nice",
  props: {
    //文章作者id
    userData: 0,
    //文章id
    articleId: 0,
  },
  data() {
    return {
      //关注状态
      attStatus: false,
      //点赞状态
      thumbsUpStatus: false,
      //当前登录用户id
      userId: this.$store.state.user.userId,
    };
  },
  mounted(){
    this.getCollectStatus();
    this.getAttentionStatus();
  },
  methods: {
     /**
     * 获取点赞默认状态
     */
    getCollectStatus() {
      axios
        .post("/collect/get-collectStatus", {
          artId: this.articleId,
          userId: this.userId,
        })
        .then((response) => {
          response.data.data;
           this.thumbsUpStatus = response.data.data;
          console.log("点赞状态",response.data.data);
        });
    },
    /**
     * 获取关注默认状态
     */
    getAttentionStatus(){
        axios
        .post("/attention/get-attentionStatus", {
          attAuthorId: this.userData,
          attUserId: this.userId,
        })
        .then((response) => {
          response.data.data;
           this.attStatus = response.data.data;
          console.log("关注状态",response.data.data);
        });
    },
    //关注
    likeAction() {
      axios
        .post("/attention/set-attention", {
          attAuthorId: this.userData,
          attUserId: this.userId,
        })
        .then((response) => {
          const statusCode = response.data.data.code;
          const reqMsg = response.data.data.msg;
          if (statusCode === 201) {
            this.$buefy.toast.open({
              duration: 1000,
              message: "" + reqMsg,
            });
            this.attStatus = true;
          } else if (statusCode === 202) {
            this.$buefy.toast.open({
              duration: 1000,
              message: "" + reqMsg,
            });
            this.attStatus = false;
          }
        });
    },
    //点赞
    thumbsUp() {
      axios
        .get("/service/update-artLikeNum", {
          params: {
            artId: this.articleId,
            userId: this.userId,
          },
        })
        .then((response) => {
          response.data;
          console.log("点赞被触发", response.data.data);
          const codes = response.data.data.code;
          const reqMsg = response.data.data.msg;
          if (codes === 201) {
            this.$buefy.toast.open({
              duration: 1000,
              message: "" + reqMsg,
              type: "is-success",
            });
            this.thumbsUpStatus = true;
          } else if (codes === 202) {
            this.$buefy.toast.open({
              duration: 1000,
              message: "" + reqMsg,
              type: "is-success",
            });
            this.thumbsUpStatus = false;
          }
        });

      
    },
    //弱爆了
    Weaking() {
      console.log("弱爆被触发");
      this.$buefy.toast.open({
        duration: 2000,
        message: `弱爆了，好吧！`,
        position: "is-bottom",
        type: "is-danger",
      });
    },
    //呵呵
    chortled() {
      console.log("呵呵被触发");
      this.$buefy.toast.open({
        duration: 1000,
        message: `呵呵~`,
        type: "is-link",
        pauseOnHover: true,
      });
    },
   
  },
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
</style>