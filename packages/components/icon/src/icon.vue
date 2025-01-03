<template>
  <component :is="icon" v-bind="$props" />
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import * as icons from 'lucide-vue-next'
import type { IconPropType } from './icon'
import type { LucideProps } from 'lucide-vue-next'

defineOptions({ name: 'LucideIcon' })

// 定义props，添加iconNode属性作为必需
const props = withDefaults(defineProps<IconPropType>(), {
  name: 'Edit',
  size: 16,
  color: 'currentColor',
  strokeWidth: 2,
  defaultClass: 'lucide-icon',
  fill: 'none',
  absoluteStrokeWidth: false,
  iconNode: [], // 默认为空数组或根据需要填充默认值
})

// 动态计算图标组件
const icon = computed(() => icons[props.name] as LucideProps)
</script>
