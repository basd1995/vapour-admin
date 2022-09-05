<script setup lang='ts'>
import type { CardItem } from '~/types'
const props = defineProps<{
  card: CardItem
}>()
</script>

<template>
  <div
    :style="{
      background: `linear-gradient(45deg,  ${props.card.firstColor} 0%, ${props.card.firstColor} 50%, ${props.card.secondColor} 50%, ${props.card.secondColor} 100%)`,
    }"
    w-120 h-150 py-5 flex flex-col justify-around items-center
  >
    <div
      class="card-shadow"
      :style="{ backgroundColor: props.card.firstColor, color: props.card.secondColor }"
      w-100 h-60 rd-30px
      flex flex-col justify-around items-center
    >
      <div w-full px-10 text-20>
        {{ props.card.firstColorName }}
      </div>
      <div
        w-full flex flex-col
        text-5 text-right
      >
        <span pr-10 text-bold>RGB {{ props.card.firstColorRGB }}</span>
        <span
          pr-10
          :style="{ backgroundColor: props.card.secondColor, color: props.card.firstColor }"
        >
          {{ props.card.firstColorText }}
        </span>
      </div>
    </div>
    <div
      class="card-shadow"
      w-100 h-60 rd-30px
      :style="{ backgroundColor: props.card.secondColor, color: props.card.firstColor }"
      flex flex-col justify-around items-center
    >
      <div w-full px-10 text-20 text-right>
        {{ props.card.secondColorName }}
      </div>
      <div
        w-full flex flex-col
        text-5 text-left
      >
        <span pl-10 text-bold>RGB {{ props.card.secondColor }}</span>
        <span
          pl-10
          :style="{ backgroundColor: props.card.firstColor, color: props.card.secondColor }"
        >
          {{ props.card.secondColorText }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-shadow {
  box-shadow: 0 0 10px #000000;
}
</style>

