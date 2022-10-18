import { getuserlist } from '@/api';
import Vue from 'vue'
import Vuex from "vuex";

//action 用于响应组件动作
const actions ={
    aLogin(context){
        context.commit("isLogin")
    }
   
}

//mutations 用于操作数据
const mutations = {
    isLogin(state){
        state.loginStates = true
        window.localStorage.setItem("loginStates",true)
    },
    logout(state){
        state.loginStates = false
        // window.localStorage.removeItem("loginStates")
        //清除缓存
        window.localStorage.clear();
    },
    setToken(state,token){
        state.satoken = token;
        window.localStorage.setItem('token',token);
    },
    delToken(state) {
        state.satoken = "";
        window.localStorage.removeItem("token");
      },
    first(state, payload) {
    state.registeruser.userName = payload.userName;
    state.registeruser.userPassword = payload.userPassword
    state.registeruser.userEmail = payload.userEmail
    },
    secend(state, payload) {
        state.registeruser.userPhone = payload.userPhone;
        state.registeruser.userSex = payload.userSex;
        state.registeruser.userShow = payload.userShow;
    },
    loginInfo(state,payload) {
        state.loginuser.userId = payload.userId;
        state.loginuser.userName = payload.userName;
        state.loginuser.userEmail = payload.userEmail;
        state.loginuser.userImg = payload.userImg;
        state.loginuser.userFans = payload.userFans;
        state.loginuser.userSex = payload.userSex;
        state.loginuser.userShow = payload.userShow;
        state.loginuser.userPhone = payload.userPhone;
        state.loginuser.userTime = payload.userTime;
        state.loginuser.userStatus = payload.userStatus;
        state.loginuser.userConcern = payload.userConcern;
        window.localStorage.setItem("user",JSON.stringify(state.loginuser));
    }

}

//state 用于存储数据
const state = {
    loginStates:window.localStorage.getItem('loginStates' || '[]') == null ? '' : true,
    user: {
        userName: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userName,
        userId: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userId,
        userBlog: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userBlog,
        userConcern: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userConcern,
        userFans: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userFans,
        userImg: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userImg,
        userShow: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userShow,
        userSex: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userSex,
        userPhone: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userPhone,
      },
    satoken:"",
    registeruser: {
        userName: "",
        userEmail: "",
        userSex: "",
        userShow: "",
        userPhone: "",
        userPassword: ""
      },
    loginuser:{
        userId: 0,
        userName: "",
        userImg:"",
        userEmail: "",
        userFans: 0,
        userSex: "",
        userShow: "",
        userPhone: "",
        userStatus: null,
        userTime: null,
        userConcern: 0
    }
}
const getters = {
	getToken(state){
		return state.token || storage.get("token") || "";
	},
    getUser(state){
        return state.loginuser;
    }
  }

Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state
})