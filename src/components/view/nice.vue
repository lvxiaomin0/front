<template>
    <section class="b-tooltips">

        <b-tooltip 
            position="is-bottom"
            type="is-light"
            :triggers="['click','hover']"
            :auto-close="['outside', 'escape']">
            
            <template v-slot:content>
                <!-- 关注 -->
                <a ><b-icon icon="heart" type="is-danger"></b-icon></a> 
                &nbsp;
                <!-- 点赞 -->
                <a ><b-icon icon="thumb-up" type="is-info"></b-icon></a>
                &nbsp;
                <!-- 弱爆了 -->
                <a ><b-icon icon="thumb-down" type="is-warning"></b-icon></a>
                &nbsp;
                <!-- 呵呵 -->
                <a ><b-icon icon="emoticon-cool"></b-icon></a>
            </template>
                <b-button label="Come on!" icon-left="heart" type="is-light" />
        </b-tooltip>
    </section>
</template>



<script>
import Intersting from "../view/Intersting.vue"
export default {
    name:"nice",
    components:{
        Intersting
    },
    data() {
        return {
            
        }
    },
    methods:{
        

        //关注
        likeAction(){
            console.log("被触发");
            
        },
        //点赞
        thumbsUp(){},
        //弱爆了
        Weaking(){},
        //呵呵
        chortled(){}
        

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