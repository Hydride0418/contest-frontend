<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="[]">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>赛事管理</template>
          <el-menu-item index="1-1">赛事管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>报名团队管理</template>
          <el-menu-item index="2-1">参赛资格审核</el-menu-item>
          <el-menu-item index="2-2">选题资格审核</el-menu-item>
          <el-menu-item index="2-3">报名团队管理</el-menu-item>
          <el-menu-item index="2-4">作品管理</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>基础数据管理</template>
          <el-menu-item index="3-1">赛区管理员管理</el-menu-item>
          <el-menu-item index="3-2">专家库管理</el-menu-item>
          <el-menu-item index="3-3">研究生培养单位联系人管理</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-message"></i>初赛管理</template>
          <el-menu-item index="4-1">评审管理</el-menu-item>
          <el-menu-item index="4-2">评阅指标管理</el-menu-item>
          <el-menu-item index="4-3">评审进度管理</el-menu-item>
          <el-menu-item index="4-4">评审结果管理</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-message"></i>奖项设置</template>
          <el-menu-item index="5-1">奖项管理</el-menu-item>
          <el-menu-item index="5-2">参赛单位奖项设置</el-menu-item>
          <el-menu-item index="5-3">个人奖项设置</el-menu-item>
          <el-menu-item index="5-4">团队奖项设置</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-message"></i>用户中心</template>
          <el-menu-item index="6-1">个人密码修改</el-menu-item>
          <el-menu-item index="6-2">修改个人信息</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  #title {
    color: aquamarine;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>