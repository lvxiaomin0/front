<template>
  <el-table ref="filterTable" :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="发帖日期" sortable width="180" column-key="date"></el-table-column>
    <el-table-column prop="name" label="发帖人" width="180"></el-table-column>
    <el-table-column prop="address" label="发帖标题" :formatter="formatter"></el-table-column>
    <el-table-column prop="tag" label="所属板块" width="100">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '家' ? 'primary' : 'success'"
          disable-transitions
        >{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        <el-button size="mini" type="primary">隐藏</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2022-08-05 20:40:48",
          name: "cp3",
          address: "雷霆连续两场完成20分逆转什么水平",
          tag: "篮球"
        },
        {
          date: "2022-08-05 20:40:48",
          name: "cp3",
          address: "低价出二手笔记本，需要得进",
          tag: "跳蚤市场"
        },
        {
          date: "2022-08-05 20:40:48",
          name: "cy",
          address: "2021考研该如何准备，有学姐学长能指导吗",
          tag: "学习专区"
        },
        {
          date: "2022-08-05 20:40:48",
          name: "young",
          address: "篮球发展史",
          tag: "篮球"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      console.log(column);
      return row.address;
    }
  }
};
</script>