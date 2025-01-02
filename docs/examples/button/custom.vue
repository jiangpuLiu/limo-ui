<script lang="ts" setup>
import { isDark } from '../../.vitepress/utils/dark'
</script>

<template>
  <div class="flex">
    <lm-button color="#626aef" :dark="isDark">Default</lm-button>
    <lm-button color="#626aef" :dark="isDark" plain>Plain</lm-button>

    <lm-button color="#626aef" :dark="isDark" disabled>Disabled</lm-button>
    <lm-button color="#626aef" :dark="isDark" disabled plain
      >Disabled Plain</lm-button
    >
  </div>
</template>
