import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
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
            component: () => import('../components/articlehome/Details')
        },
        {
            name: "all",
            path: "/all",
            component: () => import('../components/articlehome/All')
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
          component: () => import("../components/articlehome/PostArticle.vue")
        },
        {
          path: "/registerhome",
          name: "registerhome",
          component: () => import("../components/register/RegisterHome")
        },
       
        
    ]
    
}) 
