<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="板块创建日期" width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="板块" width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>板块简介: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    var date = new Date()
    return {
      tableData: [
        {
          date: date,
          name: "篮球",
          address: "篮球专区，分享篮球"
        },
        {
          date: date,
          name: "足球",
          address: "可谈论足球比赛"
        },
        {
          date: date,
          name: "步行街",
          address: "分享生活趣事"
        },
        {
          date: date,
          name: "跳蚤市场",
          address: "校园二手商品交易市场"
        },
        {
          date: date,
          name: "健身区",
          address: "健身大佬聚集地"
        },
        {
          date: date,
          name: "学习区",
          address: "分享学习资料"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }

  }
};
</script>