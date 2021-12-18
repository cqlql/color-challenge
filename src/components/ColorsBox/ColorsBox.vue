<template>
  <div class="ColorsBox">
    <div class="container">
      <GridIItem
        v-for="(color, index) of colors"
        :key="index"
        :color="color"
        :gridColumnNumber="gridColumnNumber"
      ></GridIItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import GridIItem from './GridIItem.vue' // @ is an alias to /src
import useRenderColors from './hooks/useRenderColors'

// 最高级
const colorGameLastStage = 50

// 当前级别
let colorGameLevel = 0

const { colors, gridColumnNumber, setLevel } = useRenderColors(gameOver)

setLevel(30)

// 显示游戏结束
function showGameOver(level) {
  //
}

function showCorrect() {
  //
}

//
function gameOver() {
  // showCorrect();
  setTimeout(() => {
    showGameOver(colorGameLevel - 1)
  }, 2000)
}
</script>
<style lang="scss">
.ColorsBox {
  padding-top: 100%;
  position: relative;
}

.container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
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
