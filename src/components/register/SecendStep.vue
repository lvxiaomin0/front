<template>
  <div class="secend">
    <section class="f">
      <b-field label="电话"  type="is-white" custom-class="has-text-white">
        <b-input
          v-model="userPhone"
          required
          pattern="^((\d{11})|(\d{7,8})|(\d{4}|\d{3})-(\d{7,8}))$"
          validation-message="请输入正确的电话号码!"
          class="opacitys"
          placeholder="Your phone number "
        ></b-input>
      </b-field>

      

      <b-field label="个性签名"  type="is-white" custom-class="has-text-white">
        <b-input maxlength="200" type="textarea" placeholder="Leave your signature" v-model="userShow" class="opacitys"></b-input>
      </b-field>

      <b-field label="性别" type="is-white" custom-class="has-text-white" >
            <b-select placeholder="Please select your gender" class="opacitys" v-model="userSex">
                <option value="男">男</option>
                <option value="女">女</option>
            </b-select>
      </b-field>
      
    </section>
    <br>
    <b-button type="is-primary"  @click="secend()">保存</b-button>
  </div>
</template>

<script>
import { SnackbarProgrammatic as Snackbar } from "buefy";
export default {
  data() {
    return {
      labelPosition: "on-border",
      userShow: "",
      userPhone: "",
      userSex: ""
    };
  },
  methods: {
    secend() {
      this.$store.commit("secend", {
        userShow: this.userShow,
        userPhone: this.userPhone,
        userSex: this.userSex
      });
      if (
        this.$store.state.registeruser.userPhone != "" &&
        this.$store.state.registeruser.userShow != "" &&
        this.$store.state.registeruser.userSex != ""
      ) {
        Snackbar.open("保存成功");
      } else {
        this.$buefy.snackbar.open({
          duration: 3000,
          message: "请填写完整信息",
          type: "is-danger",
          position: "is-bottom-left",
          
          // queue: false,
          // onAction: () => {
          //   this.$buefy.toast.open({
          //     message: "信息填写完整再点击保存",
          //     queue: false
          //   });
          // }
        });
      }
    }
  }
};
</script>

<style scoped>
.secend {
  /* margin: 20px; */
  margin-left: 10%;
  float: left;
  width: 40%;
  height: 30%;
  /* text-align: center; */
  
  
}
.opacitys{
  opacity: 0.5;
}
.f {
  padding-top: 3rem;
}

</style>
