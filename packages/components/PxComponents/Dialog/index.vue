<script setup lang="ts">
import { defineEmits, defineProps, ref, withDefaults } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import usePxDialog from './hooks'
import type { PxDialogEmits, PxDialogProps } from './types'

defineOptions({
  name: 'PxDialog',
})
const props = withDefaults(defineProps<PxDialogProps>(), {
  outTip: true, // 是否需要退出再次Dialog提示，默认需要
  confirmButtonText: '保存', // 确认按钮文本，默认保存
  cancelButtonText: '取消', // 取消按钮文本，默认取消
  preData: () => ({}), // 初始化表单数据，默认空对象
  upData: () => ({}), // 编辑过的表单数据，默认空对象
})
const emits = defineEmits<PxDialogEmits>()

const visible = ref<boolean>(true)

const { closed, cancel, confirm } = usePxDialog({ ...props, emits })
</script>

<template>
  <el-dialog v-model="visible" v-bind="$attrs" :before-close="closed">
    <template #header>
      <slot name="header" />
    </template>
    <slot name="default" />
    <template #footer>
      <slot name="footer">
        <div class="dialog-footer">
          <el-button @click="cancel">
            {{ cancelButtonText }}
          </el-button>
          <el-button type="primary" @click="confirm">
            {{ confirmButtonText }}
          </el-button>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>
