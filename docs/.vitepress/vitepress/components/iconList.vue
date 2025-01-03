<script setup lang="ts">
import { ref } from 'vue'
import * as icons from 'lucide-vue-next'
import clipboardCopy from 'clipboard-copy'
import { ElMessage } from 'element-plus'
import LmIcon from '../../../../packages/components/icon/src/icon.vue'

defineOptions({ name: 'IconList' })

const iconsList = Object.keys(icons)

const copyIcon = ref(true)
const copyContent = async (content) => {
  try {
    await clipboardCopy(content)

    ElMessage({
      showClose: true,
      message: '复制成功',
      type: 'success',
    })
  } catch {
    ElMessage({
      showClose: true,
      message: '复制失败',
      type: 'error',
    })
  }
}

const copyIconCom = async (name) => {
  if (copyIcon.value) {
    await copyContent(`<LmIcon name=${name}></LmIcon>`)
  }
}

const exincludes = ['createLucideIcon', 'icons']
</script>

<template>
  <div style="text-align: right">
    <el-switch
      v-model="copyIcon"
      active-text="Copy icon code"
      inactive-text="Copy SVG content"
    />
  </div>
  <ul class="demo-icon-list">
    <template v-for="item in iconsList" :key="item">
      <el-tooltip :content="item">
        <li
          v-if="!exincludes.includes(item)"
          class="icon-item"
          @click="copyIconCom(item)"
        >
          <span class="demo-svg-icon">
            <LmIcon :name="item" :size="24" />
          </span>
        </li>
      </el-tooltip>
    </template>
  </ul>
</template>

<style scoped lang="scss">
.demo-icon {
  &-list {
    margin-top: 24px;
    height: 400px;
    overflow-y: auto;
    list-style: none;
    padding: 0 !important;
    border-top: 1px solid var(--lm-border-color);
    border-left: 1px solid var(--lm-border-color);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(16, 1fr);

    .icon-item {
      text-align: center;
      color: var(--lm-text-color-regular);
      height: 50px;
      margin: 0 0 !important;
      font-size: 13px;
      border-right: 1px solid var(--lm-border-color);
      border-bottom: 1px solid var(--lm-border-color);
      transition: background-color var(--lm-transition-duration);
      &:hover {
        background-color: var(--lm-border-color-extra-light);
        .lm-icon {
          color: var(--brand-color-light);
        }
        color: var(--brand-color-light);
      }

      .demo-svg-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        //
        //.icon-name {
        //  margin-top: 8px;
        //}
      }
    }
  }
}
</style>
