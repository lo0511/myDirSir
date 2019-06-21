<template>
  <el-container>
    <el-header>
      <HomeTop></HomeTop>
      <!-- <el-row>
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
          <div class="grid-content bg-purple">退出</div>
        </el-col>
      </el-row>-->
    </el-header>
    <el-container>
      <SideBar></SideBar>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入头部
import HomeTop from "../components/homeTop";
// 引入侧边栏
import SideBar from "../components/sideBar";
export default {
  components: {
    HomeTop,
    SideBar
  }
};
</script>

<style>
.el-container {
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  height: 100%;
  background-color: white;
  color: #333;
  line-height: 200px;
}
</style>
