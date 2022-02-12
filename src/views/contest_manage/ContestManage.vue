<template>
  <div class="main_div">
    <el-row type="flex" justify="space-between">
      <el-form label-width="80px">
      <el-form-item label="赛事搜索" type="flex">
        <el-row type="flex" justify="space-between">
          <el-input placeholder="请输入赛事名称" class="contest_input"></el-input>
          <el-radio v-model="radio" label="1" class="contest_radio">是否归档</el-radio>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button>清空</el-button>
      </el-form-item> 
    </el-form>
    <div type="flex" class="right_div" align="bottom">
      <el-button type = "primary" class="new_contest" icon="el-icon-circle-plus-outline">发起新一届赛事</el-button>
      <el-button icon="el-icon-upload2" class="new_contest">导出赛事信息</el-button>
    </div>
    </el-row>
    <el-table :data="contestData" style="width: 100%">
      <el-table-column label="操作" width="400px">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text">修改赛事信息</el-button>
          <el-button type="text">奖项管理</el-button>
          <el-button type="text">分赛管理</el-button>
          <el-button type="text">赛道管理</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="contest_name" label="赛事名称"></el-table-column>
      <el-table-column prop="time_limit" label="时间限制数"></el-table-column>
      <el-table-column prop="ques_number" label="赛题数"></el-table-column>
      <el-table-column prop="archive_status" label="归档状态"></el-table-column>
    </el-table>
  </div>
</template>
<style>
  .main_div {
    display: flex;
    flex-direction: column;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .new_contest {
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .contest_input {
    margin-right: 20px;
  }
  .contest_radio {
    margin: auto;
  }
  .right_div {
    display: flex;
    flex-direction: column;
  }
</style>

<script>
  export default {
      data() {
        return {
          contestData: [{
            contest_name:"大赛1",
            time_limit:3,
            ques_number:2,
            archive_status: "已归档"
          },{
            contest_name:"大赛2",
            time_limit:3,
            ques_number:2,
            archive_status: "已归档"
          },{
            contest_name:"大赛3",
            time_limit:3,
            ques_number:2,
            archive_status: "未归档"
          },{
            contest_name:"大赛4",
            time_limit:3,
            ques_number:2,
            archive_status: "已归档"
          }]
        }
      }
    }
</script>
