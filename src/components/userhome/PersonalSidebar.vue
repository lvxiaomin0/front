<template>
  <div class="person_body">
      <div class="person_body_left">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span class="person_body_list" style="border-bottom: none"
              >个人中心</span
            >
          </div>
          <el-menu
            :router="true"
            active-text-color="#00c3ff"
            class="el-menu-vertical-demo"
            
          >
            <el-menu-item index="personalinfo">
              <i class="el-icon-user"></i>
              <span slot="title">个人简介</span>
            </el-menu-item>
            <el-menu-item index="MyFanAndFollow">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">发帖</span>
            </el-menu-item>
            <el-menu-item index="MyFanAndFollow">
              <i class="el-icon-document"></i>
              <span slot="title">收藏</span>
            </el-menu-item>
            <el-menu-item index="MyFanAndFollow">
              <i class="el-icon-tableware"></i>
              <span slot="title">粉丝</span>
            </el-menu-item>
            <el-menu-item index="MyFanAndFollow">
              <i class="el-icon-circle-plus-outline"></i>
              <span slot="title">关注</span>
            </el-menu-item>
          </el-menu>
        </el-card>
      </div>
      <div class="person_body_right">
        <router-view ></router-view>
      </div>
    </div>
</template>

<script>

import { getCurrentInstance } from 'vue';
export default {
  name: "PersonalSidebar",
  data() {
    return {
       
    };
  },
  created(){
    const { proxy } = getCurrentInstance();
    this.pathJuage = proxy.$router.currentRoute.fullPath;
    // console.log("测试"+JSON.parse(window.localStorage.getItem("user")).userName);
    
    //获取当前所在路由
    // console.log(proxy.$router.currentRoute.fullPath);
    
  },
 
  methods: {
    //暂时弃用
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
      
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleSelect(key, keyPath) {
    //   console.log(keyPath);
    //   switch (key) {
    //     case "personalinfo":
    //       this.$router.push("/personalinfo");
    //       break;
    //     case "MyFanAndFollow":
    //       this.$router.push("/articlemanger");
    //       break;
    //     case "3":
    //       this.$router.push("/typemanger");
    //       break;
    //   }
    // },

  },
};
</script>

<style scoped>
@import "../../assets/font.css";
 body{
  font-family: alimama;
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
  height: 500px;
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