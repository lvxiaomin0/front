import Vue from "vue";
import VueRouter from "vue-router";
import { SnackbarProgrammatic as Snackbar } from 'buefy'
Vue.use(VueRouter)
//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err);
};



export default new VueRouter({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import('../components/home/Home')

    },
    {
      name: "login",
      path: "/login",
      component: () => import('../components/login/Login')

    },
    {
      name: "details",
      path: "/details",
      component: () => import('../components/articlehome/Details'),
      meta: { isAuth: true },
      beforeEnter: (to, from, next) => {
        if (to.meta.isAuth) {
          if (localStorage.getItem("loginStates") === "true") {
            next()
          } else {
            Snackbar.open({
              message: '你还没有登录',
              type: 'is-warning',
              position: 'is-top',
              indefinite: true,
              actionText: 'ok'
            
            })
          }
        }
      }
    },
    {
      name: "all",
      path: "/all",
      component: () => import('../components/articlehome/All'),
      meta: { isAuth: true },
      beforeEnter: (to, from, next) => {
        if (to.meta.isAuth) {
          if (localStorage.getItem("loginStates") === "true") {
            next()
          } else {
            Snackbar.open({
              message: '你还没有登录',
              type: 'is-warning',
              position: 'is-top',
              indefinite: true,
              actionText: 'ok'
            
            })
          }
        }
      }
    },
    {
      name: "backstage",
      path: "/backstage",
      component: () => import('../components/backstagehome/BackStageHome'),
      children: [
        {
          path: "/usermanger",
          name: "usermanger",
          component: () => import("../components/backstagehome/UserManger.vue")
        },
        {
          path: "/articlemanger",
          name: "articlemanger",
          component: () => import("../components/backstagehome/ArticleManger.vue")
        },
        {
          path: "/typemanger",
          name: "typemanger",
          component: () => import("../components/backstagehome/TypeManger.vue")
        }
      ]
    },
    {
      path: "/postArticle",
      name: "postArticle",
      component: () => import("../components/articlehome/PostArticle.vue"),
      meta: { isAuth: true },
      beforeEnter: (to, from, next) => {
        if (to.meta.isAuth) {
          if (localStorage.getItem("loginStates") === "true") {
            next()
          } else {
            Snackbar.open({
              message: '你还没有登录',
              type: 'is-warning',
              position: 'is-top',
              indefinite: true,
              actionText: 'ok'
            
            })
          }
        }
      }
    },
    {
      path: "/registerhome",
      name: "registerhome",
      component: () => import("../components/register/RegisterHome")
    },
    {
      path: "/messageboard",
      name: "messageboard",
      component: () => import("../components/messageboard/MessageBoard-help.vue"),
      meta: { isAuth: true },
      beforeEnter: (to, from, next) => {
        if (to.meta.isAuth) {
          if (localStorage.getItem("loginStates") === "true") {
            next()
          } else {
            Snackbar.open({
              message: '你还没有登录',
              type: 'is-warning',
              position: 'is-top',
              indefinite: true,
              actionText: 'ok'
            
            })
          }
        }
      }
    },
    {
      path: "/new",
      name: "new",
      component: () => import("../components/view/new.vue")
    },
    {
      path: "/userhome",
      name: "userhome",
      component: () => import("../components/userhome/UserHome.vue"),
      redirect: "empty",
      children: [
        {
          path: "/empty",
          name: "empty",
          component: () => import("../components/view/Empty.vue")
        },
        {
          path: "/personalinfo",
          name: "personalinfo",
          component: () => import("../components/userhome/Personalnfo.vue")
        },
        {
          path: "/MyFanAndFollow",
          name: "MyFanAndFollow",
          component: () => import("../components/userhome/MyFanAndFollow.vue")
        },
      ]
    },











  ]

}) 
