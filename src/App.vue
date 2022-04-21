<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import oneTwoThree from './assets/123.jpg'
//import {row, col} from 'element-plus'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :xs="6" :span="2"><img class="pointer" :src="oneTwoThree" width="100" height="100" /></el-col>
          <el-col :xs="6" :span="2"><img class="pointer" :src="oneTwoThree" width="100" height="100" /></el-col>
          <el-col :xs="6" :span="2"><img class="pointer" :src="oneTwoThree" width="100" height="100" /></el-col>
          <el-col :xs="6" :span="2"><img class="pointer" :src="oneTwoThree" width="100" height="100" /></el-col>
        </el-row>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped>
  .pointer {
    cursor: pointer;
  }
  .pointer:hover {
    box-shadow: rgba(0, 0, 0, 0.50) 1.95px 1.95px 2.6px;
  }
</style>
