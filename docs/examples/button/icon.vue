<template>
  <div class="flex">
    <lm-button type="primary" :icon="Edit" />
    <lm-button type="primary" :icon="Share" />
    <lm-button type="primary" :icon="Delete" />
    <lm-button type="primary" :icon="Search">Search</lm-button>
    <lm-button type="primary">
      Upload<el-icon class="el-icon--right"><Upload /></el-icon>
    </lm-button>
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>
