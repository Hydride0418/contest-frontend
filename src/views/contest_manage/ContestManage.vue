<template>
  <div class="main_div">
    <el-dialog
      title="发起新一届赛事"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form :model="newContest" ref="newContest" label-width="100px" class="demo-ruleForm">
        <el-form-item
          label="赛事名称"
          prop="name"
          :rules="[
            { required: true, message: '赛事名称不能为空'}
          ]"
        >
          <el-input v-model="newContest.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="时间限制"
          prop="time_limit"
          :rules="[
            { required: true, message: '时间限制不能为空'},
            { type: 'number', message: '时间限制必须为数字值'}
          ]"
        >
          <el-input v-model.number="newContest.time_limit" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="问题数"
          prop="question_number"
          :rules="[
            { required: true, message: '问题数不能为空'},
            { type: 'number', message: '问题数必须为数字值'}
          ]"
        >
          <el-input v-model.number="newContest.question_number" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addContest('newContest')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">清除</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
      </span>
    </el-dialog>
    <el-row type="flex" justify="space-between">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="赛事搜索" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
    <el-button @click="resetForm('ruleForm')">清除</el-button>
  </el-form-item>
</el-form>
      <div type="flex" class="right_div" align="bottom">
      <el-button type = "primary" class="new_contest" icon="el-icon-circle-plus-outline" @click="dialogVisible = true">发起新一届赛事</el-button>
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
      <el-table-column prop="name" label="赛事名称"></el-table-column>
      <el-table-column prop="time_limit" label="时间限制数"></el-table-column>
      <el-table-column prop="question_number" label="赛题数"></el-table-column>
      <el-table-column prop="archive_status" label="归档状态"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      page-size="6"
      :total="50"
      @current-change="page"
      >
    </el-pagination>
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
    methods: {
      page(currentPage){
        alert(currentPage);
      },
      test(){
        console.log(this.contestQuery);  
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = {"name":this.ruleForm.name};
            axios.post(`http://localhost:8080/contest/search`,data)
            .then(res=>{
                console.log('res=>',res.data); 
                this.contestData = res.data;           
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      addContest(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = {"name":this.newContest.name,"time_limit":this.newContest.time_limit,"question_number":this.newContest.question_number};
            axios.post(`http://localhost:8080/contest/add_contest`,data)
            .then(res=>{
                console.log('res=>',res.data); 
                alert('add contest success');       
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
    data() {
      return {
        newContest:{
          name:'',
          time_limit:0,
          question_number:0
        },
        contestData: [],
        ruleForm: {
          name: ''
        },
        dialogVisible: false
      }
    },
    created() {
      const _this = this
      axios.get('http://localhost:8080/contest/get').then(function(resp){
        _this.contestData = resp.data
      })
    },
    change() {
        this.$forceUpdate();
      }
    }
</script>
