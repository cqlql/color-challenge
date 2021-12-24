<template>
  <div class="ColorsBox">
    <div class="ColorsBox_container">
      <GridIItem
        v-for="(color, index) of colors"
        :key="index"
        :color="color"
        :gridColumnNumber="gridColumnNumber"
        :class="{ zoom: zoomIndex === index }"
        @click="onClick(index)"
      ></GridIItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import GridIItem from './GridIItem.vue' // @ is an alias to /src
import useRenderColors from './hooks/useRenderColors'

const props = withDefaults(
  defineProps<{
    level: number
  }>(),
  {
    level: 1,
  },
)

const emits = defineEmits<{
  (e: 'update:level', v: number): void
}>()

const zoomIndex = ref(-1)

const {
  colors,
  gridColumnNumber,
  setLevel,
  nextLevel,
  isRight,
  // 当前级别
  colorGameLevel,
  // 正确格子索引
  correctIndex,
} = useRenderColors(props)

watch(colorGameLevel, (colorGameLevelVal) => {
  emits('update:level', colorGameLevelVal)
})

setLevel(1)

// 显示游戏结束
// function showGameOver(level: number) {}

// function showCorrect() {}

//
// function gameOver() {
//   // showCorrect();
//   setTimeout(() => {
//     // showGameOver(colorGameLevel - 1)
//   }, 2000)
// }

function onClick(index: number) {
  if (isRight(index)) {
    nextLevel()
  }
}

defineExpose({
  showCorrect() {
    zoomIndex.value = correctIndex.value
    console.log(correctIndex.value)
  },
})
</script>
<style lang="scss">
.ColorsBox {
  padding-top: 100%;
  position: relative;
}

.ColorsBox_container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  .zoom {
    animation: zoom 1s ease-out;
    z-index: 1;
  }

  @keyframes zoom {
    0% {
      transform: scale(1);
    }

    to {
      transform: scale(1.5);
    }
  }
}
</style>
