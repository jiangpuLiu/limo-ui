<template>
  <el-row class="mb-4">
    <lm-button>Default</lm-button>
    <lm-button type="primary">Primary</lm-button>
    <lm-button type="success">Success</lm-button>
    <lm-button type="info">Info</lm-button>
    <lm-button type="warning">Warning</lm-button>
    <lm-button type="danger">Danger</lm-button>
  </el-row>

  <el-row class="mb-4">
    <lm-button plain>Plain</lm-button>
    <lm-button type="primary" plain>Primary</lm-button>
    <lm-button type="success" plain>Success</lm-button>
    <lm-button type="info" plain>Info</lm-button>
    <lm-button type="warning" plain>Warning</lm-button>
    <lm-button type="danger" plain>Danger</lm-button>
  </el-row>

  <el-row class="mb-4">
    <lm-button round>Round</lm-button>
    <lm-button type="primary" round>Primary</lm-button>
    <lm-button type="success" round>Success</lm-button>
    <lm-button type="info" round>Info</lm-button>
    <lm-button type="warning" round>Warning</lm-button>
    <lm-button type="danger" round>Danger</lm-button>
  </el-row>

  <el-row>
    <lm-button :icon="Search" circle />
    <lm-button type="primary" :icon="Edit" circle />
    <lm-button type="success" :icon="Check" circle />
    <lm-button type="info" :icon="Message" circle />
    <lm-button type="warning" :icon="Star" circle />
    <lm-button type="danger" :icon="Delete" circle />
  </el-row>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
