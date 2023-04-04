<template>
  <div id="BackImage">
    <div class="PersonTop">
      <div class="PersonTop_img">
        <img :src="form.avatar" />
      </div>
      <div class="PersonTop_text">
        <div class="user_text">
          <div class="user_name">
            <span> {{ form.nickname }} </span>
          </div>
          <div class="user-v" v-if="form.nickname">
            <span class="user-v-font">测试号</span>
          </div>
          <div class="user_qianming">
            <span> {{ form.design }}</span>
          </div>
          <div class="user_anniu">
            <el-button
              class="el-icon-edit"
              type="primary"
              size="medium"
              plain
              @click="dialogFormVisible = true"
              >编辑</el-button
            >
          </div>
          <!-- 弹出框 -->
          <el-dialog
            title="个人信息"
            :visible.sync="dialogFormVisible"
            :modal="false"
            :append-to-body="true"
            width="40%"
            close-on-click-modal
            :before-close="handleClose()"
          >
            <el-form
              :model="form"
              
              ref="form"
              :label-width="formLabelWidth"
            >
              <div class="updateinfo">
                <div class="left">
                  <el-form-item label="头像" prop="avatar">
                    
                    <el-upload
                      action=""
                      list-type="picture-card"
                      :auto-upload="true"
                      :http-request="handlerUpload"
                    >
                      <i slot="default" class="el-icon-plus"></i>
                      <div slot="file" slot-scope="{ file }">
                        <img
                          class="el-upload-list__item-thumbnail"
                          :src="file.url"
                          alt=""
                        />
                      </div>
                    </el-upload>
                  </el-form-item>
                  <el-form-item label="账号密码" prop="password">
                    <el-input v-model="form.password"></el-input>
                  </el-form-item>
                  <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="form.nickname"></el-input>
                  </el-form-item>

                  <el-form-item label="性别" prop="sex">
                    <el-switch
                      v-model="form.sex"
                      active-color="#66b1ff"
                      inactive-color="#ff4949"
                      active-text="女"
                      inactive-text="男"
                      :active-value="0"
                      :inactive-value="1"
                    >
                    </el-switch>
                  </el-form-item>
                </div>
                <div class="right">
                  <el-form-item label="邮箱" prop="email">
                    <el-input
                      v-model="$store.state.user.userEmail"
                      disabled
                    ></el-input>
                  </el-form-item>
                  
                  <el-form-item label="兴趣爱好" prop="hobby">
                    <el-input v-model="form.hobby"></el-input>
                  </el-form-item>
                  <el-form-item label="个性签名" prop="design">
                    <el-input v-model="form.design"></el-input>
                  </el-form-item>
                  <el-form-item label="手机号码" prop="mobilePhoneNumber">
                    <el-input v-model="form.mobilePhoneNumber"></el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="updatePersonalInfo()"
                >确 定</el-button
              >
            </div>
          </el-dialog>
        </div>
        <div class="user_num">
          <div style="cursor: pointer" @click="myfan">
            <div class="num_number">{{ $store.state.user.userFans }}</div>
            <span class="num_text">粉丝</span>
          </div>
          <div style="cursor: pointer" @click="myfollow">
            <div class="num_number">{{ $store.state.user.userConcern }}</div>
            <span class="num_text">关注</span>
          </div>
          <div>
            <div class="num_number">{{ 6 }}</div>
            <span class="num_text">获赞</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PersonalEdit from "./PersonalEdit.vue";
export default {
  name: "Personal",
  components: {
    PersonalEdit,
  },
  data() {
    return {
      formLabelWidth: "30px",
      dialogFormVisible: false,
      disabled: false,
      form: {
        avatar: JSON.parse(window.localStorage.getItem("user")).userImg,
        password: "",
        nickname: JSON.parse(window.localStorage.getItem("user")).userName,
        mobilePhoneNumber: JSON.parse(window.localStorage.getItem("user")).userPhone,
        sex: JSON.parse(window.localStorage.getItem("user")).userSex,
        hobby: JSON.parse(window.localStorage.getItem("user")).userBlog,
        design: JSON.parse(window.localStorage.getItem("user")).userShow,
      },
      formLabelWidth: "120px",
    };
  },

  methods: {
    //修改用户信息
    updatePersonalInfo() {
      var formData = new FormData();
      formData.append("avatar", this.form.avatar);
      formData.append("userPhone", this.form.mobilePhoneNumber);
      formData.append("userBlog", this.form.hobby);
      formData.append("userShow", this.form.design);
      formData.append("userSex", this.form.sex);
      formData.append("userName", this.form.nickname);
      formData.append("userId",JSON.parse(window.localStorage.getItem("user")).userId);

      axios({
        url: "/user/update-user",
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response)=>{
        response.data
        console.log(response.data);
        this.dialogFormVisible = false
      })
      ;
    },
    //实时更新用户信息
    updateRealTime(){

    },
    handlerUpload(data) {
      console.log(data.file);
      this.form.avatar = data.file;
    },

    myfan() {},
    myfollow() {},
    edit() {
      // this.$router.push("/personaledit");
    },
    handleClose() {
      this.dialogVisible = false;
    },
  
  },
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
@import "../../assets/font.css";
body {
  font-family: alimama;
}

.me-video-player {
  background-color: transparent;
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
  position: fixed;
  left: 0;
  z-index: 0;
  top: 0;
}
.PersonTop {
  width: 1000px;
  height: 155px;
  padding-top: 20px;
  background-color: white;
  margin-top: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  border-radius: 5px;
}

.PersonTop_img {
  width: 150px;
  height: 120px;
  background-color: #8c939d;
  margin-right: 24px;
  margin-left: 20px;
  overflow: hidden;
  border-radius: 20px;
}

.PersonTop_img img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.PersonTop_text {
  height: 120px;
  width: 880px;
  display: flex;
}

.user_text {
  width: 60%;
  height: 100%;
  line-height: 30px;
}

.user_name {
  font-weight: bold;
}
.user-v {
  margin-bottom: -5px;
}
.user-v-img {
  width: 15px;
  height: 15px;
}
.user-v-font {
  font-size: 15px;
  color: #00c3ff;
}
.user_qianming {
  font-size: 14px;
  color: #999;
}

.user_num {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
}

.user_num > div {
  text-align: center;
  border-right: 1px dotted #999;
  box-sizing: border-box;
  width: 80px;
  height: 40px;
  line-height: 20px;
}

.num_text {
  color: #999;
}

.num_number {
  font-size: 20px;
  color: #333;
}
.el-menu-item > span {
  font-size: 16px;
  color: #999;
}

/*下面部分样式*/
.person_body {
  width: 1000px;
  margin-top: 210px;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
}

.person_body_left {
  width: 27%;
  height: 600px;
  border-radius: 5px;
  margin-right: 3%;
  text-align: center;
}

.person_body_list {
  width: 100%;
  height: 50px;
  margin-top: 25px;
  font-size: 22px;
  border-bottom: 1px solid #f0f0f0;
  background-image: -webkit-linear-gradient(
    left,
    rgb(42, 134, 141),
    #e9e625dc 20%,
    #3498db 40%,
    #e74c3c 60%,
    #09ff009a 80%,
    rgba(82, 196, 204, 0.281) 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  -webkit-animation: masked-animation 4s linear infinite;
}

.el-menu-item {
  margin-top: 22px;
}

.person_body_right {
  width: 70%;
  /* height: 500px; */
  border-radius: 5px;
  background-color: white;
}

.box-card {
  height: 500px;
}

/*ui样式*/
.el-button {
  width: 84px;
}
</style>