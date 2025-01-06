<template>
  <div class="icon-wrapper">
    <div class="icon-group">
      <div class="label">size</div>
      <div class="icon-item">
        <LmIcon name="LucideShield" />
      </div>
      <div class="icon-item">
        <LmIcon name="LucideShield" :size="30" />
      </div>
    </div>

    <div class="icon-group">
      <div class="label">color</div>
      <div class="icon-item">
        <LmIcon name="LucideShield" color="#6a5acd" />
      </div>
      <div class="icon-item">
        <LmIcon name="LucideShield" color="#ff6347" />
      </div>
    </div>

    <div class="icon-group">
      <div class="label">stroke-width</div>
      <div class="icon-item">
        <LmIcon name="LucideShield" :stroke-width="1" color="#6a5acd" />
      </div>
      <div class="icon-item">
        <LmIcon name="LucideShield" :stroke-width="3" color="#6a5acd" />
      </div>
    </div>

    <div class="icon-group">
      <div class="label">fill</div>
      <div class="icon-item">
        <LmIcon
          name="LucideShield"
          :size="30"
          fill="#6a5acd"
          :stroke-width="1"
          color="#fff"
        />
      </div>
      <div class="icon-item">
        <LmIcon
          name="LucideShield"
          :size="30"
          fill="#98c9e1"
          :stroke-width="0.5"
          color="#1e3d58"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.icon-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px; /* 为每组之间添加间距 */
  margin-bottom: 20px;
}

.icon-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* 每组图标和标签之间添加间距 */
}

.label {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
}

.icon-item {
  width: 50px;
  height: 50px;
  background-color: #f0f4f8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.icon-item:hover {
  background-color: #e0e6f1;
}
</style>
