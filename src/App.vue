<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import math from './assets/math.jpg'
import abcCapital from './assets/abcCapital.jpg'
import hindi from './assets/hindi.jpg'
import letters from './assets/letters.jpg'
import 'element-plus/dist/index.css'
import './assets/base.css'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :xs="6" :span="3">
            <router-link to="/">
              <img class="pointer" :src="math" width="150" height="100" />
            </router-link>
          </el-col>
          <el-col :xs="6" :span="3">
            <router-link to="/capital-aphabets">
              <img class="pointer" :src="abcCapital" width="150" height="100" />
            </router-link>
          </el-col>
          <el-col :xs="6" :span="3">
            <router-link to="/small-aphabets">
              <img class="pointer" :src="hindi" width="150" height="100" />
            </router-link>
          </el-col>
          <el-col :xs="6" :span="3">
            <router-link to="/letters">
              <img class="pointer" :src="letters" width="150" height="100" />
            </router-link>
          </el-col>
        </el-row>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <!-- <el-footer>Created By Niklesh Raut</el-footer> -->
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
.common-layout .el-header .el-row{
  flex-direction: column;
}
.common-layout .el-header {
  width: 20%;
}
.common-layout .el-container {
  flex-direction: row;
}

</style>
