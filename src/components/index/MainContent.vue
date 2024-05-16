<template>
  <div style="width: 80vw">
    <el-descriptions
        title="新闻焦点"
        :column="1"
        class="content"
    >
      <el-descriptions-item v-for="item in newsItems" :key="item">
        <template #label>
          <div class="cell-item">
            {{ item }}
          </div>
        </template>
      </el-descriptions-item>
    </el-descriptions>


    <el-descriptions
        title="热门话题"
        :column="1"
        class="content"
    >
      <el-descriptions-item v-for="item in hotTopics" :key="item">
        <template #label>
          <div class="cell-item">
            {{ item }}
          </div>
        </template>
      </el-descriptions-item>
    </el-descriptions>

      <el-descriptions
          title="生物图鉴"
          :column="5"
          class="content"
      >
        <template #extra>
          <el-button type="primary">Operation</el-button>
        </template>
        <el-descriptions-item v-for="item in photoes" :key="item">
          <template #label>
            <div class="cell-item">
              <img :src="item" style="width: 100px; height: 100px" alt="???"/>
            </div>
          </template>
        </el-descriptions-item>
      </el-descriptions>
  </div>
</template>

<script setup lang="ts">


const newsItems:string[] = [
    "从“灭绝”到“重生”——朱鹮保护创世界濒危动物保护典范",
    "大熊猫野外种群总量增长到近1900只",
    "2024 年世界极度濒危物种",
    "联合国首次综合评估：全球迁徙动物数量减少，灭绝风险增大"
]
const hotTopics:string[] = [
  "从“灭绝”到“重生”——朱鹮保护创世界濒危动物保护典范",
  "大熊猫野外种群总量增长到近1900只",
  "2024 年世界极度濒危物种",
  "联合国首次综合评估：全球迁徙动物数量减少，灭绝风险增大"
]

const photoes:string[] = [
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
  "https://img.sogoucdn.com/v2/thumb/?appid=200698&url=https%3A%2F%2Fpic.wenwen.soso.com%2Fpqpic%2Fwenwenpic%2F0%2F20200719111119-303348201_jpeg_400_400_31036%2F0",
]
</script>

<style scoped>
.cell-item {
  display: flex;
  align-items: center;
}
.content {
  max-width: 80vw;

}
</style>
