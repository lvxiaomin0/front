<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../../assets/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#" style="font-size: 20px"> 首页 </b-navbar-item>
      <b-navbar-item @click="goto('/postArticle')" style="font-size: 20px">
        快速发帖
      </b-navbar-item>
      <b-navbar-dropdown label="Info" style="font-size: 20px">
        <b-navbar-item href="http://42.192.90.40:4000/"> 博客 </b-navbar-item>
        <b-navbar-item href="#"> 联系我 </b-navbar-item>
      </b-navbar-dropdown>

      <div class="level-left" id="search_control">
        <div class="level-item">
          <b-autocomplete
            rounded
            v-model="name"
            :data="filteredDataArray"
            placeholder="e.g."
            icon="magnify"
            clearable
            @select="(option) => (selected = option)"
          >
            <template #empty>No results found</template>
          </b-autocomplete>
        </div>
      </div>
    </template>

    <template #end>
      <b-navbar-item tag="div" v-if="!$store.state.loginStates">
        <div class="buttons">
          <a class="button is-primary" @click="register">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" @click="login"> Log in </a>
        </div>
      </b-navbar-item>
      <b-navbar-item
        tag="div"
        v-else-if="$store.state.loginStates"
        class="logout_position"
      >
        <!-- <figure class="media-left">
          <p class="image is-32x32">
            <img src="../../assets/boy.png" class="size" alt="" />
          </p>
        </figure> -->
        <div class="buttons">
          <!-- <a class="button is-primary" @click="logout">
            <strong>LogOut</strong>
          </a> -->
          <section>
            <b-sidebar
              type="is-light"
              :fullheight="fullheight"
              :fullwidth="fullwidth"
              :overlay="overlay"
              :right="right"
              v-model="open"
            >
              <div class="p-1">
                <!-- <img
                  :src="circleUrl"
                  alt="Lightweight UI components for Vue.js based on Bulma"
                /> -->
                <figure class="media-rigit">
                  <p class="image is-40x40">
                    <img :src="users.userImg" class="size" alt="Lightweight UI components for Vue.js based on Bulma" />
                    {{users.userName}}--已登录{{users.userStatus}}
                  </p>
                </figure>
                <b-menu>
                  <b-menu-list label="Menu">
                    <b-menu-item
                      icon="information-outline"
                      label="Info"
                    ></b-menu-item>
                    <b-menu-item icon="settings">
                      <template #label="props">
                        Administrator
                        <b-icon
                          class="is-pulled-right"
                          :icon="props.expanded ? 'menu-down' : 'menu-up'"
                        ></b-icon>
                      </template>
                      <b-menu-item icon="account" label="Users"></b-menu-item>
                      <b-menu-item icon="cellphone-link">
                        <template #label>
                          Devices
                          <b-dropdown
                            aria-role="list"
                            class="is-pulled-right"
                            position="is-bottom-left"
                          >
                            <template #trigger>
                              <b-icon icon="dots-vertical"></b-icon>
                            </template>
                            <b-dropdown-item aria-role="listitem"
                              >Action</b-dropdown-item
                            >
                            <b-dropdown-item aria-role="listitem"
                              >Another action</b-dropdown-item
                            >
                            <b-dropdown-item aria-role="listitem"
                              >Something else</b-dropdown-item
                            >
                          </b-dropdown>
                        </template>
                      </b-menu-item>
                      <b-menu-item
                        icon="cash-multiple"
                        label="Payments"
                        disabled
                      ></b-menu-item>
                    </b-menu-item>
                    <b-menu-item icon="account" label="My Account">
                      <b-menu-item label="Account data"></b-menu-item>
                      <b-menu-item label="Addresses"></b-menu-item>
                    </b-menu-item>
                  </b-menu-list>
                  <b-menu-list>
                    <b-menu-item
                      label="Expo"
                      icon="link"
                      tag="router-link"
                      target="_blank"
                      to="/expo"
                    ></b-menu-item>
                  </b-menu-list>
                  <b-menu-list label="Actions">
                    <b-menu-item icon="logout" label="退出登录" @click="logout"></b-menu-item>
                  </b-menu-list>
                  <b-menu-list label="Fuck out">
                  
                    <b-menu-item label="注销账号" click=""></b-menu-item>
                  </b-menu-list>
                </b-menu>
              </div>
            </b-sidebar>
            <b-button class="button is-primary" size="is-small" @click="getCahe">
                <i class="iconfont icon-youzhijiantou1"></i>
            </b-button>
          </section>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:"",
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: true,
      name: "",
      filteredDataArray: [],
      users: {}
     
    }
  },
  methods: {
    goto(path){
      this.$router.push(path)
      
    },
    logout() {
      this.$store.commit("logout");
      this.$store.commit("delToken");
    },
    login() {
      this.$router.push({
        name: "login",
      });
    },
    register() {
      this.$router.push({
        name: "registerhome",
      });
    },
    getCahe(){
      this.open = true;
      const user = window.localStorage.getItem("user");
      const users = JSON.parse(user);
      this.users = users;
    }
    
  }, 
};
</script>

<style scope>
/* .logout_position{
      position: absolute;
      right: 2%;
    } */
/* 阿里巴巴图标     */
@font-face {
font-family: "iconfont"; /* Project id 3542213 */
src: url('//at.alicdn.com/t/c/font_3542213_xddqvkhk6ub.woff2?t=1665388787145') format('woff2'),
      url('//at.alicdn.com/t/c/font_3542213_xddqvkhk6ub.woff?t=1665388787145') format('woff'),
      url('//at.alicdn.com/t/c/font_3542213_xddqvkhk6ub.ttf?t=1665388787145') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-youzhijiantou1:before {
  content: "\e619";
}

.icon-shoucang:before {
  content: "\e86d";
}

.icon-gouwucheman:before {
  content: "\e600";
}

.icon-gouwuchekong:before {
  content: "\e601";
}

.icon-gouwucheman1:before {
  content: "\e602";
}


#search_control {
  position: absolute;
  right: -7%;
  bottom: 10%;
  width: 100%;
  opacity: 0.8;
}
.level-item {
  position: absolute;
  right: 20cm;
  bottom: 1px;
}
.navbar-item,
.navbar-link {
  text-decoration: none;
}
#navbar_top {
  /* background-image: url("https://www.toptal.com/designers/subtlepatterns/uploads/memphis-colorful.png"); */
  /* background-image: url("http://sit.guc.edu.cn/static/images/topBg.jpg"); */
}

</style>