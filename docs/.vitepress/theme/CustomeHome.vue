<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
defineOptions({ name: 'CustomeHome' })
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <div class="home-container">
        <div class="home-title">
          <div class="key">L</div>
          <div class="key">I</div>
          <div class="key">M</div>
          <div class="key">O</div>
          <div class="key">U</div>
          <div class="key">I</div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  font-family: system-ui, sans-serif;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url('../../public/bg.png'); /* 替换为图片路径 */
  background-size: cover; /* 背景图片按比例缩放，完全覆盖容器 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 防止图片重复 */

  .home-title {
    position: absolute;
    display: flex;
    padding: calc(1vw * 2.5);
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: calc(1vw * 1.5);
    box-shadow: 0 1vw calc(1vw * 0.5) #00000033,
      0 0 calc(1vw * 0.5) calc(1vw * 0.2) #00000006;
    justify-content: center;
    align-items: center;
    gap: 1vw;
  }
  .key {
    width: calc(1vw * 5.6);
    aspect-ratio: 1 / 1;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: calc(1vw * 0.7);
    font-size: calc(1vw * 2);
    font-family: sans-serif;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    box-shadow: 0 1vw calc(1vw * 0.5) #00000055,
      0 0 calc(1vw * 0.5) calc(1vw * 0.2) #00000011;
    transition: filter var(--animVar) ease-in-out 0s,
      box-shadow var(--animVar) ease-in-out 0s,
      color var(--animVar) ease-in-out 0s;
  }

  .key:hover {
    filter: brightness(97%);
    box-shadow: 0 calc(1vw * 0.5) calc(1vw * 0.5) #00000055,
      0 0 calc(1vw * 0.5) calc(1vw * 0.2) #00000011;
  }
}
</style>
