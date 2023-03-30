<template>
  <div id="back" ref="vantaRef">
    <div class="column is-one-quarter box" id="login_position">
      <h5 class="subtitle title is-4">修改密码</h5>
      <section>
        <b-field label="UserEmail" type="is-danger">
          <b-input
            placeholder="Email"
            type="email"
            maxlength="30"
            v-model="userEmail"
          >
          </b-input>
        </b-field>
        <b-field>
          <a @click="sendCode()">发送验证码</a>
        </b-field>
        <b-field label="verification code" type="is-warning">
          <b-input
            placeholder="code"
            type="code"
            maxlength="30"
            v-model="securityCode"
          ></b-input>
        </b-field>
        

        <button
          class="button is-primary is-outlined"
          @click="submit()"
        >
          提交
        </button>
      </section>
    </div>
  </div>
</template>

<script>
// import   *as Snackbar  from 'buefy'
import axios from 'axios';
export default {
  data() {
    return {
        userEmail: "",
        securityCode: ""
        
    };
  },
  methods: {
    //发送验证码
    sendCode(){
        axios.get("/forgot/sendCode",{
            params:{
                userEmail: this.userEmail
            }
        }).then((response)=>{
            const code = response.data.code;
            const msg = response.data.msg;
            if(code===200){
                 this.$buefy.snackbar.open({
                    duration: 2000,
                    message: ''+msg,
                    type: 'is-warning',
                    position: 'is-top',
                    actionText: 'ok',
                    indefinite: false,
                    
                })
            }
            console.log(response.data);
        })
    },
     //提交验证
    submit(){
        axios.post("/forgot/update-verify",{
            userEmail: this.userEmail,
            securityCode: this.securityCode
        }).then((response)=>{
            const data = response.data;
            if (data.code===2000) {
                this.$router.push({
                    name:"SetNewPwd",
                    query:{
                        userEmail: this.userEmail
                    }
                })
            }
            console.log(data);
        })
    }
  },
 
};
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
  opacity: 1;
  background-image: url("../../assets/email-pattern.png");
  
}
</style>