<script setup lang="ts">
import {
  defineEmits,
  defineModel,
  defineProps,
  reactive,
  ref,
  useAttrs,
  useTemplateRef,
  withDefaults,
} from 'vue'
import PxEmpty from '@limo-ui/components/PxComponents/PxEmpty/index.vue'
import type { VxeGridInstance, VxeGridListeners, VxeGridProps } from 'vxe-table'
import type { GridTableEmits, GridTableProps } from './types'

defineOptions({
  name: 'PxTable',
})

const props = withDefaults(defineProps<GridTableProps>(), {
  empty: true, // 是否显示空状态
  slots: () => [], // 自定义插槽
  isPage: true, // 是否分页
  loading: false, // 是否加载中
  pageInfo: () => ({
    total: 0, // 总条数
    pageSize: 15, // 每页条数
    currentPage: 1, // 当前页
  }),
})

// 定义 emits
const emits = defineEmits<GridTableEmits>()
// 解决table数据异步加载回来显示空白的问题
const tableData = defineModel<any[]>({
  default: () => [],
})
// Vxe-grid自带的插槽，可以参考文档
const slots = ref<string[]>([
  'default',
  'check',
  'customTop',
  'customBottom',
  'customLeft',
  'customRight',
  'customHeader',
  'customFooter',
  'customDefault',
  'form',
  'toolbarButtons',
  'toolbarTools',
  'top',
  'left',
  'right',
  'bottom',
  'asideLeft',
  'asideRight',
  'action',
])
// 获取attrs
const attrs = useAttrs()
const tableRef = useTemplateRef<VxeGridInstance>('tableRef')
// 表格配置
const gridOptions = reactive<VxeGridProps>({
  height: 'auto',
  border: true,
  stripe: false,
  showOverflow: true,
  scrollY: {
    enabled: true,
    gt: 0,
  },
  scrollX: {
    enabled: true,
    gt: 0,
  },
  columnConfig: {
    resizable: true,
  },
  columns: [],
  ...attrs,
}) as Required<VxeGridProps>

// Vxe-grid自带的事件，可以参考文档
const gridEvents: VxeGridListeners = {
  // 处理分页变化事件
  pageChange({ pageSize, currentPage }) {
    gridOptions.pagerConfig.currentPage = currentPage
    gridOptions.pagerConfig.pageSize = pageSize
    emits('pageChange', gridOptions.pagerConfig)
  },
  sortChange({ sortList }) {
    emits('sortChange', sortList)
  },
  radioChange(radioValue) {
    emits('radioChange', radioValue)
  },
  checkboxChange(checkboxValue) {
    emits('checkboxChange', checkboxValue)
  },
}

// 初始化表格
function initTable() {
  // 如果需要自定义插槽，则将自定义插槽添加到表格配置中
  if (props.slots?.length) {
    slots.value = [...slots.value, ...props.slots]
  }
  // 如果需要分页，则设置分页配置
  if (props.isPage) {
    gridOptions.pagerConfig = {
      total: 0,
      currentPage: 1,
      pageSize: 15,
      pageSizes: [15, 30, 50, 100, 200],
      layouts: [
        'Home',
        'PrevJump',
        'PrevPage',
        'Number',
        'NextPage',
        'NextJump',
        'End',
        'Sizes',
        'FullJump',
        'Total',
      ],
    }
  }
  // 如果需要分页，并且总条数大于每页条数，则设置分页配置
  if (props.isPage && props.pageInfo.total / props.pageInfo.pageSize > 1) {
    gridOptions.pagerConfig.total = props.pageInfo.total
    gridOptions.pagerConfig.pageSize = props.pageInfo.pageSize
    gridOptions.pagerConfig.currentPage = props.pageInfo.currentPage
  }
}
initTable()

/**
 * 获取选中的值
 */
function getCheckboxValue() {
  return tableRef.value?.getCheckboxRecords() || []
}
/**
 * 获取单选值
 */
function getRadioValue() {
  return tableRef.value?.getRadioRecord() || {}
}

/**
 * 设置多选
 */
function setCheckboxRow(row: any, checked: boolean) {
  tableRef.value?.setCheckboxRow(row, checked)
}

/**
 * 设置单选
 */
function setRadioRow(row: any) {
  tableRef.value?.setRadioRow(row)
}

/**
 * 清除多选
 */
function clearCheckboxRow() {
  tableRef.value?.clearCheckboxRow()
}

/**
 * 清除单选
 */
function clearRadioRow() {
  tableRef.value?.clearRadioRow()
}

/**
 * 设置所有树展开
 * @param expand - 是否展开
 */
function setAllTreeExpand(expand: boolean) {
  tableRef.value?.setAllTreeExpand(expand)
}

defineExpose({
  getCheckboxValue,
  getRadioValue,
  setCheckboxRow,
  setRadioRow,
  clearCheckboxRow,
  clearRadioRow,
  setAllTreeExpand,
})
</script>

<template>
  <div class="h-full">
    <vxe-grid
      ref="tableRef"
      v-bind="gridOptions"
      :data="tableData"
      :columns="gridOptions.columns"
      :loading="props.loading"
      v-on="gridEvents"
    >
      <!-- 动态渲染列插槽 -->
      <template v-for="slot in slots" #[slot]="scopes" :key="slot">
        <slot :name="slot" v-bind="scopes" />
      </template>
      <template v-if="!tableData.length && !props.loading" #empty>
        <slot v-if="props.empty" name="empty">
          <PxEmpty />
        </slot>
      </template>
    </vxe-grid>
  </div>
</template>
