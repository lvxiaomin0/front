<template>
  <div class="mains">
    <img src="../../assets/messageboard3.jpg" class="topImg" >
    <div class="el-card-messages">
      <section>
        <b-field class="large">
          <b-tag type="is-primary"> 有人看到了你无助的眼神！ </b-tag>
        </b-field>
      </section>
      
      <div class="cell">
        <a href="/">{{ $store.state.user.userName }}</a>
        <span class="chevron" style="color:white">&nbsp;›&nbsp;  留下你的新留言</span>
      </div>
      <!--留言板 -->
      <textarea
        class="textarea is-success "
        placeholder="礼貌发言喔！"
        v-model="message"
        slot="prepend"
        maxlength="200"
      ></textarea>
      <!-- 提交按钮 -->
      <el-button
        type="info"
        round
        class="submit-message"
        size="mini"
        @click="submitMessage"
        >留言</el-button
      >
    </div>
    <el-card class="el-card-d" shadow="always">
      <el-timeline infinite-scroll-disabled="disabled">
        <div v-if="pagemessages.length > 0">
          <el-timeline-item
            v-for="(item, index) in pagemessages"
            :key="index"
            :timestamp="item.mtime"
            placement="top"
          >
            <el-card class="el-card-m">
              <span class="el-card-m-content">{{ item.mcontent }}</span>
              <div />
              <span class="el-card-m-nick-name"
                >{{ item.mnickname }} 提交于 {{ item.mtime }}</span
              >
               <!-- 可修改可删除双按钮 -->
               
            </el-card>
          </el-timeline-item>
         
        </div>
        <div v-else>
          <el-timeline-item placement="top">
            <el-card class="el-card-m">
              <p class="el-card-m-nick-name">没有任何留言</p>
            </el-card>
          </el-timeline-item>
        </div>
      </el-timeline>
      <el-pagination
        background
        :current-page="currentPage"
        :page-size="3"
        layout="prev, pager, next"
        :total="totalCount"
        :hide-on-single-page="false"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
// 格式化时间函数
import { parseTime } from "@/utils/index";
import axios from 'axios';
export default {
  name:"messageboard",
  data() {
    return {
      userId: JSON.parse(window.localStorage.getItem("user")).userId,
      nickName: this.$store.state.user.userName,
      message: "",
      pagesize: 3,
      currentPage: 1,
      totalCount:0,
      pagemessages: [],
      messagetotime: []
      
    };
  },
  mounted() {
    this.doQuery();
  },
  methods: {
    // 后台查询
    doQuery() {
      axios.get("/message/get-message",{
          params:{
            currentPage: this.currentPage,
            pageSize: this.pagesize
          }
      }).then((response)=>{
          const pageData = response.data;
          //总数
          this.totalCount = pageData.total;

          //数据
          this.messagetotime = pageData.records.reverse();
          this.pagemessages = this.messagetotime;
          
          console.log(response.data);
      })
    
    },
    // 翻页
    handleCurrentChange(val) {
      this.currentPage = val;
      this.pagemessages = [];
      this.doQuery();
    },
    // 提交留言
    submitMessage() {
      if (
        this.message === "" ||
        this.message.replace(/(^\s*)|(\s*$)/g, "") === ""
      ) {
        this.$message("留言不能为空");
        return;
      }
      //保存数据
      axios.post("/message/set-message",{
        userId: this.userId,
        mNickname: this.nickName,
        mContent: this.message,
      }).then((response)=>{
        response.data
        this.message = "";
      // 翻页到最后一页
      this.currentPage = Math.ceil(this.pagemessages.length / this.pagesize, 0);
      this.handleCurrentChange(this.currentPage);
      })
      
    },
  },
};
</script>

<style scoped>
.topImg {
  width:900%;
  
}
.capict {
  opacity: 0.1;
  color: aliceblue;
}
.mains {
    width: 100%;
    min-height: 100vh;
    /* background-image: url("../../assets/messageboard.jpg"); */
    background-color: rgb(73,74,95);
    background-size: 100% 100%;
    position:absolute;

}
/* .cell {
  padding: 10px;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
} */
.el-card-d {
  float: left;
  margin-top: 20px;
  margin-left: 10%;
  width: 80%;
  height: 500px;
  background: rgb(252, 250, 250);
}

.el-card-m {
  height: 100px;
}

.el-card-m-content {
  display: block;
  font-weight: bold;
}

.el-card-m-nick-name {
  display: block;
  font-size: x-small;
  margin-top: 15px;
  color: gray;
}

.el-card-messages {
  float: left;
  margin-top: 20px;
  margin-left: 10%;
  width: 70%;
}

.message-nick-name {
  width: 50%;
}
.message-text {
  margin-top: 10px;
  display: block;
  width: 50%;
}

.submit-message {
  margin-top: 10px;
  width: 80px;
  background: rgb(235, 245, 247);
  color: cadetblue;
  text-align: center;
  letter-spacing: 20px;
}
</style>

