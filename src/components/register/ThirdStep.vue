<template>
  <div class="third">
    <section>
      <div class="content">
        <h3 style="color:#fff2d3">用户须知</h3>
        <p style="color:#fff2d3">
          本论坛项目刊载的所有内容，包括文字、图片、音频、视频、软件、程序、以及网页版式设计等均在网上搜集。注册时要填写以下项目：
          用户名: 中英文即可
          密码: 不易过于简单。建议6位以上，数字、字母、字符，至少2种混合。
          Email: 必填，作为登录账号
          性别: 请选择 男或女
          填写完毕，点提交
        </p>
      </div>
      <b-collapse :open="true" position="is-bottom" aria-id="contentIdForA11y1">
        <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
          <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'"></b-icon>
          {{ !props.open ? '查看全部' : '收起' }}
        </a>
        <p style="color:#fff2d3">
          本论坛提供的内容仅用于个人学习、研究或欣赏。我们不保证内容的正确性。通过使用本站内容随之而来的风险与本站无关
          访问者可将本网站提供的内容或服务用于个人学习、研究或欣赏，以及其他非商业性或非盈利性用途，但同时应遵守著作权法及其他相关法律的规定，不得侵犯本网站及相关权利人的合法权利。
          本网站内容原作者如不愿意在本网站刊登内容，请及时通知本站，予以删除。
          本论坛由ming开发完成，主要是面向在校大学生用于日常交流学习，同时欢迎大佬提供改进意见。我的GitHub账号：
          <a style="color:#fff2d3"
            href="https://github.com/lvxiaomin0"
          >Ming</a>
        </p>
      </b-collapse>
    </section>
    <b-button rounded type="is-info" @click="submit">提交注册信息</b-button>
  </div>
</template>

<script>
import axios from 'axios';
// import { register } from "@/api";
import { SnackbarProgrammatic as Snackbar } from 'buefy'
export default {
  data() {
    return {
    };
  },
  methods: {
    register() {
        axios
          .post("/user/register",
          {  
              userName: this.userName,
              userPassword: this.userPassword,
              userShow: this.userShow,
              userEmail: this.userEmail,
              userPhone: this.userPhone,
              userSex: this.userSex
          })
        .then(response => {
          const { data } = response;
          console.log(data);
          if (data.code === 200) {
             Snackbar.open({
              message: '恭喜注册成功',
              type: 'is-warning',
              position: 'is-top',
              indefinite: true,
          
    })
            this.$router.go(-1);
          }
        })
        .catch(error =>{
          console.log(error);
        });
        
    },
    submit() {
      console.log(this.$store.state.registeruser.userName);
      const userName = this.$store.state.registeruser.userName;
      const userPassword = this.$store.state.registeruser.userPassword;
      const userShow = this.$store.state.registeruser.userShow;
      const userEmail = this.$store.state.registeruser.userEmail;
      const userPhone = this.$store.state.registeruser.userPhone;
      const userSex = this.$store.state.registeruser.userSex;
      this.userName = userName;
      this.userPassword = userPassword;
      this.userShow = userShow;
      this.userEmail = userEmail;
      this.userPhone = userPhone;
      this.userSex = userSex;
      if (
        this.userName === "" &&
        this.userPassword === "" &&
        this.userShow === "" &&
        this.userEmail === "" &&
        this.userPhone === "" &&
        this.userSex === ""
      ) {
        alert("确定信息填写完整了吗？");
      } else {
        this.register();
      }
    }
  }
};
</script>

<style scoped>
.third {
  margin:auto;
  text-align: center;
  /* float: right; */
  width: 500px;
  height: 500px;
}
.content {
  margin-bottom: 0 !important;
}
</style>