<template>
  <div id="slider">
    <!-- 主要动画效果：字体和进度条以及表情随情绪程度百分比变化 -->
    <!-- <label for="range" :style="{ color: getHappinessColor }"
      >情绪程度: {{ val }}%</label
    > -->
    <!-- 滑动杆的颜色应该与预先设置好的颜色进行绑定，颜色可随意更改 -->
    <!-- 情绪程度的值也应该随val值变动 -->
    <input type="range" name="" id="range" min="0" max="100" v-model="val" />

    <!-- 滑动杆的值应该与val绑定，val写入了计算属性,为了与下方滑动杆填充颜色的范围同步 -->
    <div class="slider outer">
      <!-- 让我们label 的宽度 等于们数据中心 val 的宽度,这样就会随着滑动杆的运动带动label 运动,达到更改表情的效果  -->
      <label
        for=""
        class="slider inner"
        :style="{ width: val + '%', 'border-radius': greaterThanFifty }"
      >
        <span :style="{ right: getPlacement }">{{ getHappiness }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
    name: "Slider",
  data() {
    return {
      val: 70,
      // 关键点，同时用来动态关联  1：情绪百分比，2：显示出来的文本表情
    };
  },
  mounted() {
    this.val = Math.floor(Math.random() * 101);
  },
  computed: {
    getPlacement: function () {
      return `${-0.009 * (this.val * -1 + 104)}em`;
      // 获取位置，因为是计算属性，相当于是与val绑定了，给最下方的span绑定后就等于与上方与val绑定的width，进行“绑定”
    },
    greaterThanFifty: function () {
      return this.val > 50 ? `var(--roundness)` : `0`;
      // val值大于五十之后，边框的变化，可以省略或者不绑定，不关键
    },
    getHappinessColor: function () {
      return `rgba(255, ${106 + (103 / 100) * this.val}, ${
        Math.floor((this.val * -1) / 7.692) + 13
      }`;
      // 获取颜色的函数，可以随意更改数值，不过上方颜色过渡更加自然
    },
    getHappiness: function () {
      let mood;
      // 将val值与所有表情“物理绑定”
      if (this.val == 0) {
        mood = "🤬";
      } else if (this.val < 10) {
        mood = "😡";
      } else if (this.val < 20) {
        mood = "😠";
      } else if (this.val < 30) {
        mood = "😦";
      } else if (this.val < 40) {
        mood = "☹️";
      } else if (this.val < 50) {
        mood = "🙁";
      } else if (this.val < 60) {
        mood = "😐";
      } else if (this.val < 70) {
        mood = "🙂";
      } else if (this.val < 80) {
        mood = "😊";
      } else if (this.val < 90) {
        mood = "😄";
      } else if (this.val < 100) {
        mood = "😃";
      } else if (this.val == 100) {
        mood = "😍";
      }
      return mood;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
:root {
  /* 全局css变量 */
  --yellow: #ffd100;
  --orange: #ff6a13;
  --darkGray: #53565a;
  --midGray: #888b8d;
  --white: #fff;
}
*,
*::after,
*::before {
  color: var(--darkGray);
  box-sizing: border-box;
}
html,
body {
  width: 100vh;
  height: 100vh;
}
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
}
#slider {
  /* 局部css变量 */
  --roundness: 20px;
  width: 100%;
  max-width: 600px;
  /* outline: 1px dashed red; */
  padding: 4vh;

  /* 网格布局 */
  display: grid;
  justify-content: stretch;
}
#slider > label {
  width: 100%;
  font-size: 1.5em;
  padding: 0 0 0.5em;
  margin: auto;
}
#slider input {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  width: 100%;
  position: relative;
  z-index: 1;
  opacity: 0;
  height: calc(var(--roundness) * 2);
  cursor: pointer;
}
#slider .outer {
  width: 100%;
  height: var(--roundness);
  background-color: var(--midGray);
  border-radius: var(--roundness);
  display: flex;
  align-items: center;
  align-content: center;
  position: relative;
  z-index: 0;
  margin: auto;
  grid-row: 2/3;
  grid-column: 1/2;
}

#slider input:focus + .outer {
  outline: 1px dashed var(--orange);
}

#slider label.inner {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--white);
  background: linear-gradient(to left, var(--yellow), var(--orange));
  border-top-left-radius: var(--roundness) !important;
  border-bottom-left-radius: var(--roundness) !important;
  position: absolute;
  transition: all 0.3s cubic-bezier(0.5, 0.4, 0.2, 1);
  text-align: right;
  font-size: calc(var(--roundness) * 2);
  line-height: 1;
}
#slider label.inner span {
  position: absolute;
  right: -2px;
  top: calc(50% - var(--roundness) * 2);
  top: calc(var(--roundness) * -0.3);
  transition: inherit;
}
</style>