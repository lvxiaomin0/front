<template>
  <div>
    <div class="textBox">
      <transition name="slide">
        <p class="text" :key="text.id" v-if="text.val">
        <el-tag type="success">{{text.val.message.tag}}</el-tag>
            {{text.val.message.title}}</p>
            
      </transition>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'scroll',
  data () {
    return {
      textArr: [
        {
            message: 
            {
                tag: "求助帖",
                title: "找个女朋友啊，求求了"
            }
        },
        {
            message: 
            {
                tag: "求助帖",
                title: "找1个女朋友啊，求求了"
            }
        }
      ],
      number: 0
    }
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
  mounted () {
    this.startMove()
  },
  methods: {
    startMove () {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === this.textArr.length) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 3000); // 滚动不需要停顿则将2000改成动画持续时间
    }
  }
}
</script>
 
<style scoped>
  .textBox {
    width: 100%;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
</style>