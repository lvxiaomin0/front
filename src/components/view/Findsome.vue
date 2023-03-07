<template>
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

        
         
          </section>
       
        
</template>

<script>
import axios from 'axios';
export default {
    name:"findsome",
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
  methods:{
    /**
     * 获取类型为寻物的文章
     */

    getFindSome(){
        axios.get("",{
            artTypeId: 1
        }).then((response)=>{
            console.log(response.data);
        })
    }
  }
}


</script>

<style>
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