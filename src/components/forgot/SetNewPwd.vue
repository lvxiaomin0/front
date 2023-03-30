<template>
  <div id="back" ref="vantaRef">
    <div class="column is-one-quarter box" id="login_position">
      <h5 class="subtitle title is-4">设置新密码</h5>
      <section>
        <b-field label="UserPassword" type="is-danger">
          <b-input
            password-reveal
            placeholder="UserPassword"
            type="password"
            maxlength="30"
            v-model="userPassword"
          >
          </b-input>
        </b-field>
        <button
          class="button is-primary "
          @click="submitPwd()"
        >
          确认修改
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"SetNewPwd",
    data() {
        return {
            userEmail: this.$route.query.userEmail,
            userPassword: ""
        }
    },
    methods: {
        //提交新密码
        submitPwd(){
            axios.post("/forgot/update-pwd",{
                userEmail: this.userEmail,
                userPassword: this.userPassword
            }).then((response)=>{
                const code = response.data.code;
                console.log(response);
                if(code === 1){
                  this.$buefy.snackbar.open({
                    duration: 3000,
                    message: '重置密码成功',
                    type: 'is-warning',
                    position: 'is-top',
                    actionText: 'ok',
                    indefinite: false,
        
                })
                this.$router.push({
                  name:"login"
                })
                }   
            })
        }
    },
}
</script>

<style>
@import "../../assets/font.css";
body {
  font-family: alimama;
}

#back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/forgotback.png");
  z-index: -1;
}

#login_position {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.89;
  background-image: url("../../assets/email-pattern.png");
}
</style>