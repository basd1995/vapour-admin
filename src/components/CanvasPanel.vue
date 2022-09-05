<script setup lang='ts'>
import OptionPanel from './OptionPanel.vue'
import { Draw } from '~/composables/draw'

const canvasPanelRef = ref<HTMLElement | null >(null)
const myCanvas = ref<HTMLElement | null >(null)

// canvas 宽高
const canvasWidth = computed(() => {
  return canvasPanelRef.value?.clientWidth || 0
})
const canvasHeight = computed(() => {
  return canvasPanelRef.value?.clientHeight || 0
})

// canvas fabric 实例
let canvas: any = null

const initCanvas = () => {
  canvas = new Draw(canvasWidth.value, canvasHeight.value, 'my-canvas')
  console.log('canvas', canvas)
}

onMounted(() => {
  initCanvas()
})
</script>

<template>
  <div ref="canvasPanelRef" class="canvas-panel">
    <canvas id="my-canvas" ref="myCanvas" />
    <OptionPanel />
  </div>
</template>

<style scoped>
.canvas-panel {
  width: 100%;
  height: 100%;
}
</style>
