<template>
  <div id="BackImage">
    <div class="PersonTop">
      <div class="PersonTop_img">
        <img :src="$store.state.user.userImg" />
      </div>
      <div class="PersonTop_text">
        <div class="user_text">
          <div class="user_name">
            <span> {{ $store.state.user.userName }} </span>
          </div>
          <div class="user-v" v-if="$store.state.user.userName">
            <span class="user-v-font">测试号</span>
          </div>
          <div class="user_qianming">
            <span> {{ $store.state.user.userBlog }}</span>
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
             width="60%"
             close-on-click-modal
            :before-close="handleClose()"
          >
            <el-form
              :model="form"
              :rules="rules"
              ref="form"
              label-width="160px"
            >
              <div class="updateinfo">
                <div class="left">
                  <el-form-item label="头像" prop="avatar">
                    <!-- <img
                      style="width: 150px; height: 110px"
                      :src="form.avatar"
                    /> -->
                    <el-upload
                      class="avatar-uploader"
                      action="null"
                      :show-file-list="false"
                      :auto-upload ="false"
                    >
                      <img v-if="imageUrl" :src="form.avatar" class="avatar" />
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </el-form-item>
                  <el-form-item label="账号密码" prop="password">
                    <el-input v-model="form.password"></el-input>
                  </el-form-item>
                  <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="form.nickname"></el-input>
                  </el-form-item>
                  <el-form-item label="年龄" prop="age">
                    <el-input v-model="form.age"></el-input>
                  </el-form-item>
                  <el-form-item label="性别" prop="sex">
                    <el-switch
                      v-model="form.sex"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text="女"
                      inactive-text="男"
                      :active-value="0"
                      :inactive-value="1"
                    >
                    </el-switch>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email">
                    <el-input v-model="$store.state.user.userEmail" disabled></el-input>
                  </el-form-item>
                </div>
                <div class="right">
                  <el-form-item label="院系" prop="area">
                    <el-input v-model="form.area"></el-input>
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
              <el-button type="primary" @click="dialogFormVisible = false"
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
import PersonalEdit from "./PersonalEdit.vue";
export default {
  name: "Personal",
  components: {
    PersonalEdit,
  },
  data() {
    return {
      
      dialogFormVisible: false,
      imageUrl:"",
      form: {
        avatar: "",
        password: "",
        nickname: "",
        mobilePhoneNumber: "",
        sex: "",
        area: "",
        hobby: "",
        design: "",
      },
      rules: {
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "账号密码不能为空", trigger: "blur" },
        ],
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    myfan() {},
    myfollow() {},
    edit() {
      // this.$router.push("/personaledit");
    },
    handleClose() {
        this.dialogVisible = false;
    },
    //更新个人信息
    updatePersonalInfo(){
      const formData = new FormData();
      formData.append("",this.form)
    },
  },
};
</script>

<style scoped>
@import "../../assets/font.css";
body {
  font-family: alimama;
}
.updateinfo {
  height: 350px;
  overflow: auto;
}
.left {
  /* width: 330px; */
  float: left;
}
.right {
  overflow: hidden;
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