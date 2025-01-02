<template>
  <el-row>
    <lm-button size="large">Large</lm-button>
    <lm-button>Default</lm-button>
    <lm-button size="small">Small</lm-button>
    <lm-button size="large" :icon="Search">Search</lm-button>
    <lm-button :icon="Search">Search</lm-button>
    <lm-button size="small" :icon="Search">Search</lm-button>
  </el-row>
  <el-row class="my-4">
    <lm-button size="large" round>Large</lm-button>
    <lm-button round>Default</lm-button>
    <lm-button size="small" round>Small</lm-button>
    <lm-button size="large" :icon="Search" round>Search</lm-button>
    <lm-button :icon="Search" round>Search</lm-button>
    <lm-button size="small" :icon="Search" round>Search</lm-button>
  </el-row>
  <el-row>
    <lm-button :icon="Search" size="large" circle />
    <lm-button :icon="Search" circle />
    <lm-button :icon="Search" size="small" circle />
  </el-row>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
