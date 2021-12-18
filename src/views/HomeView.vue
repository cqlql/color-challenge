<template>
  <div class="home">
    <div class="container">
      <div
        v-for="(color, index) of colors"
        class="grid"
        :style="getGridStyle(color)"
        :key="index"
      >
        <div
          class="grid-el"
          :style="{
            'background-color': `rgb(${color.r}, ${color.g}, ${color.b}`,
          }"
        >
        </div>
      </div>
    </div>
    {{ colors }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

// 最高级
const colorGameLastStage = 50

// 当前级别
let colorGameLevel = 0

// 格子数
let grid = 0

let colorGameCorrect = -1

const { colors, gridColumnNumber } = renderLevel(30)

// 显示游戏结束
function showGameOver(level) {
  //
}

function showCorrect() {
  //
}

function getGridStyle(color: any) {
  let size = 100 / gridColumnNumber
  return {
    width: `${size}%`,
    height: `${size}%`,
  }
}

function gameOver(isFail) {
  // showCorrect();
  setTimeout(() => {
    showGameOver(colorGameLevel - 1)
  }, 2000)
}

function colorGameLevelGrid(level) {
  return level < 2
    ? 2
    : level < 4
    ? 3
    : level < 8
    ? 4
    : level < 13
    ? 5
    : level < 22
    ? 6
    : level < 32
    ? 7
    : level < 36
    ? 8
    : level < 40
    ? 9
    : level < 44
    ? 10
    : level < 48
    ? 11
    : 12
}
function colorGameLevelColorDiff(level: number) {
  if (level <= 50) {
    var t = [
      126, 120, 96, 86, 70, 58, 48, 40, 34, 30, 27, 27, 27, 25, 25, 25, 23, 23,
      23, 23, 21, 21, 21, 21, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 12,
      12, 12, 12, 12, 10, 10, 10, 10, 7, 7, 7, 3, 3, 2, 1,
    ]
    return t[level - 1]
  }
  return 1
}

function rangeColor(level: number) {
  return Math.floor(Math.random() * (255 - level))
}

function renderLevel(level: number) {
  if (level > colorGameLastStage) {
    gameOver(!1)
  } else {
    colorGameLevel = level

    var gridColumnNumber = colorGameLevelGrid(level),
      o = colorGameLevelColorDiff(level),
      n = rangeColor(o),
      s = rangeColor(o),
      i = rangeColor(o)
    const colors = []

    let correct = 0

    // 正确的格子索引，随机，并保证与上一次不等
    do {
      correct = Math.floor(Math.random() * gridColumnNumber * gridColumnNumber)
    } while (colorGameCorrect == correct)
    colorGameCorrect = correct

    for (var c = 0; c < gridColumnNumber * gridColumnNumber; c++) {
      c == correct
        ? colors.push({
            r: n,
            g: s,
            b: i,
          })
        : colors.push({
            r: n + o,
            g: s + o,
            b: i + o,
          })
    }

    return { colors: ref(colors), gridColumnNumber }
  }
}
</script>

<style scoped>
.container {
  width: 300px;
  height: 300px;

  /* display: flex; */
}

.grid {
  width: 20px;
  height: 20px;

  /* margin: 10px; */
  float: left;
  position: relative;
}

.grid-el {
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 5px;
  right: 5px;
  border-radius: 5px;
}
</style>
