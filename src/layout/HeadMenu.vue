<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Search } from '@element-plus/icons-vue'

const input2 = ref('')
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <el-sub-menu>
      <template #title><el-icon><Menu /></el-icon></template>
      <el-menu-item index="2-1">问题反馈</el-menu-item>
      <el-menu-item index="2-2">分类索引</el-menu-item>
      <el-menu-item index="2-3">生物图鉴</el-menu-item>
      <el-menu-item index="2-4">新闻焦点</el-menu-item>
      <el-menu-item index="2-5">热门话题</el-menu-item>
      <el-menu-item index="2-6">关联网图</el-menu-item>
      <el-menu-item index="2-7">创作指引</el-menu-item>
    </el-sub-menu>
    <div style="margin: 2.4vh" @click="this.$router.push('/')">
      <img
          style="width: 100px"
          src="/images/img.png"
          alt="Element logo"
      />
    </div>
    <el-menu-item class="my-menu-item">
      <el-input
          v-model="input2"
          placeholder="Type something"
          :prefix-icon="Search"
      />
    </el-menu-item>
    <div class="flex-grow" />

    <el-menu-item index="2" @click="this.$router.push('/login')">登录</el-menu-item>
    <el-menu-item index="3" @click="this.$router.push('/register')">注册</el-menu-item>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.my-menu-item:hover {
  background-color: transparent !important;
}
.my-menu-item {
  margin-left: 20vw;
}
</style>