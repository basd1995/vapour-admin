<script setup lang='ts'>
const collapse = ref(false)
</script>

<template>
  <div @click="collapse = !collapse">
    {{ collapse ? '收起' : '展开' }}
  </div>
  <div class="workspace">
    <div class="thumbail-menu">
      <div class="thumbnail-list">
        <Thumbnail v-for="i in 10" :key="i" />
      </div>
    </div>
    <div class="panel">
      <CanvasPanel />
    </div>
  </div>
</template>

<style scoped>
.workspace {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}
.thumbail-menu {
  width: 300px;
  height: 100%;
  background-color: #f5f5f5;
}
.panel {
  flex: 1;
  width: 100%;
  height: 100%;
}
.thumbnail-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
}
</style>

