<script setup lang="ts">
import { ElEmpty } from 'element-plus'
import type { EmptyProps } from './types'
defineOptions({
  name: 'PxEmpty',
})
const props = withDefaults(defineProps<EmptyProps>(), {
  imageUrl: '', // 图片
  type: 'table', // 类型
  description: '暂无数据', // 描述
  imageSize: 266, // 图片大小
})
function getImage() {
  return (
    props?.imageUrl ||
    new URL(`../../base/icons/empty/${props.type}-empty.svg`, import.meta.url)
      .href
  )
}
</script>

<template>
  <div class="px-empty h-full w-full">
    <el-empty
      v-bind="$attrs"
      :image="getImage()"
      :image-size="props?.imageSize"
      class="h-full w-full"
    >
      <template #image>
        <slot name="image" />
      </template>
      <template #description>
        <slot name="description">
          <span class="text-14px text-gray-300">{{ props.description }}</span>
        </slot>
      </template>
      <slot name="default" />
    </el-empty>
  </div>
</template>
