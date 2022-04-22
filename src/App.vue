<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import numbers from './assets/numbers.jpg'
import abcCapital from './assets/abcCapital.jpg'
import abcSmall from './assets/abcSmall.png'
import shapes from './assets/shapes.png'
import 'element-plus/dist/index.css'
import './assets/base.css'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :xs="6" :span="2">
            <router-link to="/">
              <img class="pointer" :src="numbers" width="100" height="100" />
            </router-link>
          </el-col>
          <el-col :xs="6" :span="2">
            <router-link to="/capital-aphabets">
              <img class="pointer" :src="abcCapital" width="100" height="100" />
            </router-link>
          </el-col>
          <el-col :xs="6" :span="2">
            <router-link to="/small-aphabets">
              <img class="pointer" :src="abcSmall" width="100" height="100" />
            </router-link>
          </el-col>
          <el-col :xs="6" :span="2">
            <router-link to="/shapes">
              <img class="pointer" :src="shapes" width="100" height="100" />
            </router-link>
          </el-col>
        </el-row>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Created By Niklesh Raut</el-footer>
    </el-container>
  </div>
</template>

<style scoped>
  .common-layout, .el-container {
    height: 100%;
  }
  .pointer {
    cursor: pointer;
  }
  .pointer:hover {
    box-shadow: rgba(163, 46, 46, 0.5) 1.95px 1.95px 2.6px;
  }
  .router-link-active img {
    box-shadow: rgba(163, 46, 46, 0.5) 1.95px 1.95px 2.6px;
  }
  .el-header {
    height: 20%;
  }
  .el-main {
    height: calc(80% - 80px);
  }
  .el-container {
    min-height: 600px;
  }
</style>

<style>
html, body, #app {
  height: 100%;
}
body {
  padding: 0px;
  margin: 0px;
}


</style>
