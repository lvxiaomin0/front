<template>
  <div id="back">
    <Top></Top>
    <div class="column is-one-quarter box" id="login_position">
      <h5 class="subtitle title is-4">欢迎登录</h5>
      <section>
        <b-field label="UserEmail" type="is-danger" :message="this.judge_username_message">
          <b-input
            placeholder="Email"
            type="email"
            maxlength="30"
            v-model="userEmail"
          >
          </b-input>
        </b-field>

        <b-field
          label="UserPassword"
          type="is-warning">
          <b-input
            password-reveal
            placeholder="Password"
            type="password"
            maxlength="30"
            v-model="userPassword"
          ></b-input>
          
          
        </b-field>
        <!-- style="float: left" -->
        <button
          class="button is-primary is-outlined"
          
          v-show="login_show"
          @click="Tologin"
        >
          登录
        </button>
        <!-- &nbsp; -->
        <a @click="updatePwd()">忘记密码</a>

        <button
          class="button is-danger is-outlined is-normal"
          style="float: right"
          @click="Toregister"
        >
          {{ registerTitle }}
        </button>
        
      </section>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import {nanoid} from "nanoid"
import Top from "../home/Top.vue";
export default {
  name: "Login",
  components: {
    Top,
  },
  data() {
    return {
      userEmail: "",
      userPassword: "",
      login_show: true,
      register_show: false,
      registerTitle: "还没有账号？点我即刻注册",
      judge_password_message:"",
      judge_username_message:""


    };
  },
  methods: {
    
    //提示框
    progress(info) {
      this.$buefy.notification.open({
        message: info,
        duration: 5000,
        progressBar: true,
        type: "is-primary",
        pauseOnHover: true,
        position: "is-bottom-right",
      });
    },
    //提示框
    success() {
      this.$buefy.notification.open({
        message: "Something happened correctly!",
        type: "is-success",
      });
    },

    //注册
     Toregister() {
      this.$router.push("registerhome");
    },
    //登录
    Tologin() {
        axios.post("/user/login", {
          userEmail: this.userEmail,
          userPassword: this.userPassword,
        })
        .then((response) => {
          console.log(response.data);
          const data = response.data;
          //明天修改
          if(data.code===503){
            this.progress(data.msg);
          }
          else if(data.code===200){
              //存储登录状态
              this.$store.dispatch("aLogin");
              //存储token
              this.$store.commit("setToken",data.data.tokenInfo.tokenValue);
              //存储登录对象
              this.$store.commit("loginInfo",data.data.user);
              //路由跳转
              this.$router.back("home");
          }
        })
        
    },
    //忘记密码
    updatePwd(){
      console.log("忘记密码被触发");
    }
  },
};
</script>

<style scoped>
@import "../../assets/font.css";
 body{
  font-family: alimama;
 }
#back {
  width: 100%;
  height: 900px;
  background-image: url("../../assets/team-14.png");
  /* background-image: url("https://www.toptal.com/designers/subtlepatterns/uploads/memphis-colorful.png"); */
}
#login_position {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("../../assets/login_position.png");
}
</style>