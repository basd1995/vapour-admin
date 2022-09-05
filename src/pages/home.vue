<script setup lang='ts'>
import type { CardItem } from '~/types'
// 接口类型的命名不能与组件名重复，所以改为CardItem

const cardList: CardItem[] = [
  {
    firstColor: '#0E3265',
    firstColorRGB: '14 50 101',
    firstColorName: '花青',
    firstColorText: '髻端罗布白，腰下束花青',
    secondColor: '#F5B087',
    secondColorRGB: '245 176 135',
    secondColorName: '骅刚',
    secondColorText: '夏而福衡，白牡骅刚',
  },
]
</script>

<template>
  <div flex>
    <Card
      v-for="(item, index) of cardList"
      :key="index"
      :card="item"
    />
  </div>
</template>

<style scoped></style>

