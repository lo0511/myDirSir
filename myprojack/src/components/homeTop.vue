<template>
  <el-row>
    <el-col :span="4" style="height:60px;">
      <div class="grid-content bg-purple">
        <img src="../assets/logo.png">
      </div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple-light">
        <h2>电商后台管理系统</h2>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">
        <a href="#" @click.prevent="gobey">退出</a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    gobey() {
      this.$confirm("确认是否退出?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$router.push({ name: "login" });
        // 清除浏览器的token内容
        window.localStorage.removeItem("token");
        this.$message({
          type: "success",
          message: "退出成功!"
        });
      });
    }
  },
  mounted() {
    let token = window.localStorage.getItem("token");

    if (!token) {
      this.$message({
        message: "警告！拒绝非法闯入！",
        type: "warning"
      });
      //   this.$confirm("拒绝非法闯入！", "警告！", {
      //     confirmButtonText: "确定",
      //     type: "warning"
      //   }).then(() => {
      this.$router.push("/login");
      //   });
    }
  }
};
</script>

<style>
.el-main {
  height: 100%;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.bg-purple {
  background: rgb(179, 192, 209);
}

.bg-purple img {
  height: 60px;
}

.bg-purple-light {
  background: rgb(179, 192, 209);
}

.bg-purple-light h2 {
  margin: 0px;
  color: white;
}

.bg-purple a {
  color: orange;
}

.grid-content {
  height: 100%;
  min-height: 36px;
}
</style>
