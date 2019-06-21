<template>
  <div class="login">
    <div class="center">
      <h2>用户登录</h2>
      <!-- <hr>  -->
      <el-form
        label-position="top"
        :model="userObj"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="userObj.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userObj.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="login" class="mybtn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//
// import axios from "axios";
export default {
  data() {
    return {
      userObj: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      // console.log(this.userObj);
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.$http({
            method: "POST",
            url: "http://localhost:8888/api/private/v1/login",
            data: this.userObj
          })
            .then(res => {
              // console.log(res);
              let { data, meta } = res.data;
              if (meta.status == 200) {
                this.$router.push("/homepage");
                window.localStorage.setItem("token", data.token);
                this.$message({
                  type: "success",
                  message: meta.msg
                });
              } else {
                this.$message.error(meta.msg);
              }
            })
            .cacth(err => {
              console.log(err);
            });
        }
      });
    }
  }
};
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  background-color: aqua;
  position: relative;
  top: 0;
  left: 0;
}
.center {
  width: 500px;
  height: 360px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 40px;
}
.mybtn {
  width: 500px;
  margin-top: 25px;
}
</style>
