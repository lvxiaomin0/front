<template>
  <div class="first">
    <section>
      <b-field label="用户名" type="is-white" custom-class="has-text-white">
        <b-input v-model="userName" placeholder="username" class="opacitys" maxlength="30" required></b-input>
        <!-- required pattern="[A-Za-z][A-Za-z0-9_]{4,14}"
        validation-message="用户名不能为空!"-->
      </b-field>

      <b-field label="邮箱" type="is-white" custom-class="has-text-white">
        <b-input type="email" @blur="To_judge_username()" v-model="userEmail" class="opacitys"  placeholder="Your email" required></b-input>
    
      </b-field> 
      <br>
      
      <b-field label="密码"  type="is-white" custom-class="has-text-white" >
        <b-input
          type="password"
          password-reveal
          placeholder="Your password"
          required
          v-model="userPassword"
          class="opacitys"
        ></b-input>
      </b-field>
    </section>
    <br>
    <b-button type="is-primary"   @click="first()">保存</b-button>
  </div>

</template>


<script>
import { SnackbarProgrammatic as Snackbar } from "buefy";
import axios from "axios";
export default {
  data() {
    return {
      userName: "",
      userEmail: "",
      userPassword: "",
      judge_username_message: ""
    };
  },
  methods: {

    first() {
      this.$store.commit("first", {
        userName: this.userName,
        userEmail: this.userEmail,
        userPassword: this.userPassword
      });
      if (
        this.$store.state.registeruser.userName != "" &&
        this.$store.state.registeruser.userEmail != "" &&
        this.$store.state.registeruser.userPassword != ""
      ) {
        Snackbar.open("保存成功");
       
      } else {
        this.$buefy.snackbar.open({
          duration: 5000,
          message: "请填写完整信息",
          type: "is-danger",
          position: "is-bottom-left",
          // actionText: "确定",
          queue: false,
          // onAction: () => {
          //   this.$buefy.toast.open({
          //     message: "信息填写完整再点击保存",
          //     queue: false
          //   });
          // }
        });
      }
    },
    To_judge_username(){
      axios
        .post("/user/get-user", {
          userEmail: this.userEmail

        })
        .then((response) => {
         console.log(this.judge_username_message);
         this.judge_username_message = response.data.msg;
         this.progress(this.judge_username_message);
        })
        .catch((error) => {
          this.progress(error);
        });
    },
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
    
  }
};
</script>

<style scoped>
.first {
  margin-left: 10%;
  float: left;
  width: 500px;
  height: 400px;
  
}
.opacitys{
  opacity: 0.5;
}

</style>