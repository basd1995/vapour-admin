<script setup lang='ts'>
const canvasTools = [
  {
    name: 'arrow',
    cname: '箭头',
    icon: 'i-carbon-arrow-up-left',
    childType: 'circular',
  },
  {
    name: 'tag',
    cname: '标注',
    icon: 'i-carbon-text-annotation-toggle',
    childType: 'size',
  },
  {
    name: 'frame',
    cname: '方框',
    icon: 'i-carbon-checkbox',
    childType: 'circular',
  },
  {
    name: 'dot',
    cname: '打点',
    icon: 'i-carbon-location',
    childType: 'none',
  },
  {
    name: 'rubber',
    cname: '橡皮',
    icon: 'i-carbon-text-clear-format',
    childType: 'none',
  },
]

const optionPanelRef = ref<HTMLElement | null>(null)

const { style } = useDraggable(optionPanelRef, {
  initialValue: {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight - 100,
  },
})
</script>

<template>
  <div
    ref="optionPanelRef" :style="style" class="button-control"
  >
    <!-- 图标 -->
    <div
      v-for="item in canvasTools" :key="item.name"
    >
      <div :class="item.icon" />
    </div>
  </div>
</template>

<style scoped>
.button-control {
  z-index: 5;
  cursor: move;
  width: 352px;
  height: 42px;
  line-height: 42px;
  background: #000000;
  color: #ffffff;
  opacity: 0.7;
  box-shadow: 0px 4px 7px 2px #f8f9fb;
  border-radius: 4px;
  padding: 0 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  position: fixed;
  bottom: 70px;
  right: calc(50% - 10% - 220px);
}
</style>
