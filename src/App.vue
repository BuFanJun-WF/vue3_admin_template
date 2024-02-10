<script setup lang="ts">
// 引入图标组件
import { Edit } from "@element-plus/icons-vue";
</script>

<template>
  <div>
    <el-button type="primary" size="default" :icon="Edit">Default</el-button>
    <!-- svg:图标外层容器节点 -->
    <SvgIcon name="phone"></SvgIcon>
    <Pagination></Pagination>
    <el-button type="primary" size="default" :icon="Edit">Default</el-button>
  </div>
</template>
