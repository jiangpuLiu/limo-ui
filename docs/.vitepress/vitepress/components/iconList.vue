<script setup lang="ts">
import { computed, ref } from 'vue'
import * as icons from 'lucide-vue-next'
import clipboardCopy from 'clipboard-copy'
import { ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import LmIcon from '../../../../packages/components/icon/src/icon.vue'

defineOptions({ name: 'IconList' })

const iconsList = Object.keys(icons)
const searchQuery = ref('')

const filteredIcons = computed(() => {
  return iconsList.filter((item) =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

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
  await copyContent(`<LmIcon name="${name}" />`)
}

const exincludes = ['createLucideIcon', 'icons', 'Icon']
</script>

<template>
  <div>
    <el-input
      v-model="searchQuery"
      type="text"
      placeholder="Search for an icon..."
      :prefix-icon="Search"
      class="icon-search-input"
      size="large"
    />
    <div class="demo-icon-list">
      <template v-for="item in filteredIcons" :key="item">
        <div
          v-if="!exincludes.includes(item)"
          class="icon-item"
          @dblclick="copyIconCom(item)"
        >
          <span class="demo-svg-icon">
            <LmIcon :name="item" :size="24" />
          </span>
          <span style="line-height: 30px">{{ item }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-search-input {
  width: 100%;
  max-width: 300px;
}

.demo-icon {
  &-list {
    margin-top: 14px;
    height: 600px;
    overflow-y: auto;
    list-style: none;
    padding: 0 !important;
    border-top: 1px solid var(--lm-border-color);
    border-left: 1px solid var(--lm-border-color);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);

    .icon-item {
      text-align: center;
      color: var(--lm-text-color-regular);
      margin: 0 0 !important;
      cursor: pointer;
      padding: 10px 0;
      max-height: 75px;
      font-size: 13px;
      display: flex;
      flex-flow: column nowrap;
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
      }
    }
  }
}
</style>
