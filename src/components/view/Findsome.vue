<template>
  <section>
    <div class="card box item-boder" v-for="(info, index) in info" :key="index">
      <div class="card-content" v-if="info.map">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="info.map.user.userImg" class="size" alt="" />
            </figure>
          </div>
          <div class="media-content" v-if="info.map">
            <p class="title is-5">
              <i class="fas">{{ info.map.user.userName }}</i>
            </p>
          </div>
        </div>
        <div class="content">
          <p>
            {{ info.artTitle }}
          </p>

          <i class="far fa-hand-point-right"> </i>
          Thank you very much, please feel free to greet me if you have anything
          in the future!. Helping others is the foundation of happiness.
          <a>@look for something</a>. <a>#help</a>
          <a>#￣へ￣</a>

          <section>
            <b-button
              icon-left="github-circle"
              label="查看详情"
              type="is-primary"
              size="is-small"
              @click="isCardModalActive = true"
            />
            <b-modal v-model="isCardModalActive" :width="640" :auto-focus="true">
              <div class="card">
                <div class="card-image">
                  &nbsp;
                  <figure class="image is-16by9">
                    <img :src="info.artImage" class="size" alt="Image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img :src="info.map.user.userImg" alt="Image" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">{{ info.map.user.userName }}</p>
                      <p class="subtitle is-6">@{{ info.map.user.userBlog }}</p>
                    </div>
                  </div>

                  <div class="content">
                    <a>#{{ info.artContent }}</a>
                    ---- <a>#respect o(*￣3￣)o</a>
                    <br />
                    <small>
                      {{ info.artCreTime }}
                    </small>
                  </div>
                </div>
              </div>
            </b-modal>

            <!-- <ModalActiveVue   :info="info.artId"  v-bind:isCardModalActive="isCardModalActive"></ModalActiveVue> -->
          </section>
          <br />文章热度 ：
          <i class="fab fa-gratipay">{{ info.artHotNum }}</i>
          <br />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ModalActiveVue from "./ModalActive.vue";
export default {
  name: "findsome",
  components: {
    ModalActiveVue,
  },
  data() {
    return {
      isCardModalActive: false,
      infoList: [
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
    };
  },
  mounted() {
    this.getFindSome();
   
    
  },
  methods: {
    
    /**
     * 获取类型为寻物的文章
     */
    getFindSome() {
      axios
        .get("/service/get-particle", {
          params: {
            artTypeId: 1,
          },
        })
        .then((response) => {
          
          this.info = response.data.data;
          
          this.infoList = response.data.data;
        });
    },
  },
};
</script>

<style>
/* 启示卡片 */
.item-boder {
  border-style: solid;
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