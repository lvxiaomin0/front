<template>
    <section class="b-tooltips">
        <b-tooltip 
            position="is-bottom"
            type="is-light"
            :triggers="['click','hover']"
            :auto-close="['outside', 'escape']">
            <template v-slot:content>
                <!-- 关注 -->
                <a @click="likeAction()"><b-icon icon="heart" type="is-danger"></b-icon></a> 
                &nbsp;
                <!-- 点赞 -->
                <a @click="thumbsUp()"><b-icon icon="thumb-up" type="is-info"></b-icon></a>
                &nbsp;
                <!-- 弱爆了 -->
                <a @click="Weaking()"><b-icon icon="thumb-down" type="is-warning"></b-icon></a>
                &nbsp;
                <!-- 呵呵 -->
                <a @click="chortled()"><b-icon icon="emoticon-cool"></b-icon></a>
            </template>
                <b-button label="Come on!" icon-left="heart" type="is-light" />
        </b-tooltip>
    </section>
</template>



<script>
import axios from 'axios';
export default {
    name:"nice",
    props:{
        //文章作者id
        userData: 0
    },
    data() {
        return {
            //是否关注
            whetherAtt: false,
            //当前登录用户id
            userId: this.$store.state.user.userId
        }
    },
    methods:{
        //关注
        likeAction(){
            axios.post("http://localhost:8081/attention/set-attention",{
                attAuthorId: this.userData,
                attUserId: this.userId,
                whetherAtt: this.whetherAtt
            }).then((response=>{
                const statusCode = response.data.code;
                if(statusCode === 200){
                    this.$buefy.toast.open({
                        duration: 1000,
                        message:`谢谢你的关注喔`
                    });
                }
            }));
            console.log("关注被触发");
             
             
        },
        //点赞
        thumbsUp(){
            console.log("点赞被触发");
            this.$buefy.toast.open({
                    duration: 1000,
                    message: `拴Q!`,
                    type: 'is-success'
                })
        },
        //弱爆了
        Weaking(){
            console.log("弱爆被触发");
            this.$buefy.toast.open({
                    duration: 2000,
                    message: `弱爆了，好吧！`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
        },
        //呵呵
        chortled(){
            console.log("呵呵被触发");
            this.$buefy.toast.open({
                    duration: 1000,
                    message: `呵呵~`,
                    type: 'is-link',
                    pauseOnHover: true
                })
        }
        

    }
}
</script>

<style lang="scss" scoped>
.b-tooltips {
    .b-tooltip:not(:last-child) {
        margin-right: .5em
    }
    .b-tooltip {
        margin-bottom: .5em
    }
}
</style>