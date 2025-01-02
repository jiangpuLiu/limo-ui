<template>
  <lm-button-group>
    <lm-button type="primary" :icon="ArrowLeft">Previous Page</lm-button>
    <lm-button type="primary">
      Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </lm-button>
  </lm-button-group>

  <lm-button-group class="ml-4">
    <lm-button type="primary" :icon="Edit" />
    <lm-button type="primary" :icon="Share" />
    <lm-button type="primary" :icon="Delete" />
  </lm-button-group>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from '@element-plus/icons-vue'
</script>
