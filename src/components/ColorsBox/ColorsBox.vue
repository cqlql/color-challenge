<template>
  <div class="ColorsBox">
    <div class="ColorsBox_container">
      <GridIItem
        v-for="(color, index) of colors"
        :key="index"
        :color="color"
        :gridColumnNumber="gridColumnNumber"
        :class="{ zoom: zoomIndex === index }"
        @click="onSelect(index)"
      ></GridIItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import GridIItem from './GridIItem.vue' // @ is an alias to /src
import type { ColorType } from './color-game'
import renderLevel from './color-game'
import levelGrade from '@/components/ColorsBox/level-grade'

const props = withDefaults(
  defineProps<{
    level: number
    errorReminder?: boolean
  }>(),
  {
    level: 1,
  },
)

const emits = defineEmits<{
  (e: 'update:level', v: number): void
  (e: 'errorSelect', result: { gradeTitle: string }): void
  (e: 'complete'): void
}>()

// 暂停
const pause = ref(false)

// 最高级
let colorGameLastStage = 50

if (process.env.NODE_ENV !== 'production') {
  colorGameLastStage = 2
}

// 当前级别
const colorGameLevel = ref(0)

// 正确格子索引
const correctIndex = ref(-1)

// 放大指定方块，提示方块位置
const zoomIndex = ref(-1)

const colors = ref<ColorType[]>([])
const gridColumnNumber = ref(props.level)

setLevel(gridColumnNumber.value)

watch(colorGameLevel, (colorGameLevelVal) => {
  emits('update:level', colorGameLevelVal)
})

defineExpose({
  showCorrect,
  reset() {
    pause.value = false
    colorGameLevel.value = 1
  },
  pause() {
    pause.value = true
  },
  getGradeTitle() {
    return levelGrade(colorGameLevel.value, colorGameLastStage)
  },
})

function nextLevel() {
  let level = colorGameLevel.value
  level += 1
  if (level > colorGameLastStage) {
    // 挑战完成
    emits('complete')
  } else {
    setLevel(level)
  }
}

function setLevel(level: number) {
  zoomIndex.value = -1 // 停止当前动画

  const colorData = renderLevel(level, correctIndex.value)
  colors.value = colorData.colors
  gridColumnNumber.value = colorData.gridColumnNumber
  correctIndex.value = colorData.correctIndex
  colorGameLevel.value = level
}

function isRight(index: number) {
  if (correctIndex.value === index) {
    return true
  }
  return false
}

function onSelect(index: number) {
  // 暂停情况不可点击
  if (pause.value) return

  if (isRight(index)) {
    nextLevel()
  } else {
    if (props.errorReminder) {
      showCorrect()
    }
    emits('errorSelect', {
      gradeTitle: levelGrade(colorGameLevel.value, colorGameLastStage),
    })
  }
}

function showCorrect() {
  zoomIndex.value = -1
  setTimeout(() => {
    zoomIndex.value = correctIndex.value
  }, 1)
}
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
