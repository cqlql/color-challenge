<template>
  <j-container class="PlayContainer">
    <template #header>
      <div class="PlayContainer_header">
        <div class="PlayContainer_header-r-info">
          <div class="tp-name">练习模式</div>
          <GameTimeCountdown v-if="isPlay" :key="level" @timeUp="timeUp" />
        </div>
        <TimeCount ref="vTimeCount" :isPractice="true" />
        <div> 关卡：{{ level }} </div>
      </div>
    </template>
    <div class="PlayContainer_body">
      <div v-if="isCountDown" class="PlayContainer_countdown">
        {{ countDown }}
      </div>
      <template v-else>
        <ColorsBox
          ref="vColorsBox"
          v-model:level="level"
          errorReminder
          @errorSelect="colorSelectError"
          @complete="colorGameComplete"
        />
      </template>
    </div>
    <ResultDialog
      v-model:visible="dialogVisible"
      title="练习结果"
      :completeMsg="completeMsg"
      :gradeMsg="gradeMsg"
      :list="dialogDataList"
      confirmBtnText="重新练习"
      @confirm="restart"
    />
    <template #footer>
      <j-button v-if="isPlay" @click="stopPlay()">结束练习</j-button>
      <j-button v-else-if="isFinish" @click="dialogVisible = true"
        >查看结果</j-button
      >
      <j-button type="info" @click="$emit('back')">返回</j-button>
    </template>
  </j-container>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

import useCountDown from './hooks/useCountDown'
import TimeCount from '../TimeCount.vue'
import ResultDialog from '../ResultDialog.vue'
import type { PlayStatusType } from './hooks/useWordIpt'
import ColorsBox from '@/components/ColorsBox/ColorsBox.vue'
import GameTimeCountdown from '../GameTimeCountdown.vue'
import useColorGame from './hooks/useColorGame'

// 开始游戏倒计时
let playCountdownTime = 3

if (process.env.NODE_ENV !== 'production') {
  playCountdownTime = 0
}

const vTimeCount = ref({
  stopTime: () => {
    console.error('vTimeCount 未初始')
  },
  startTime: () => {
    console.error('vTimeCount 未初始')
  },
  getElapsedTime: () => {
    console.error('vTimeCount 未初始')
    return ''
  },
})

const vColorsBox = ref({
  showCorrect() {
    console.log('vColorsBox 未初始')
  },
  reset() {
    console.log('vColorsBox 未初始')
  },
  pause() {
    console.log('vColorsBox 未初始')
  },
  getGradeTitle() {
    console.log('vColorsBox 未初始')
    return ''
  },
})

defineEmits(['back'])

const dialogVisible = ref(false)
const dialogDataList = ref<GeneralItem[]>([])

const playStatus = ref<PlayStatusType>('countDown')

const { level } = useColorGame()

const completeMsg = ref('')
const gradeMsg = ref('')

let { countDown, countDownRestart } = useCountDown(
  playCountdownTime,
  playStatus,
)

let isPlay = computed(() => {
  return playStatus.value === 'play'
})

let isCountDown = computed(() => {
  return playStatus.value === 'countDown'
})

let isFinish = computed(() => {
  return playStatus.value === 'finish'
})

watch(isPlay, (isPlay) => {
  if (isPlay) {
    vTimeCount.value.startTime()
  }
})

// 关卡时间到
function timeUp() {
  console.log('关卡时间到')
  vColorsBox.value.showCorrect()
}

/**
 * @param {boolean} isComplete 是否完成所有关卡
 */
function stopPlay(isComplete?: boolean) {
  if (isComplete) {
    completeMsg.value = '恭喜你完成了所有关卡！'
  } else {
    completeMsg.value = ''
  }
  gradeMsg.value = vColorsBox.value.getGradeTitle()

  vColorsBox.value.pause()

  vTimeCount.value.stopTime()
  dialogDataList.value = [
    {
      value: String(level.value) + '关',
      label: '通过关数',
    },
    {
      value: vTimeCount.value.getElapsedTime(),
      label: '练习用时',
    },
  ]
  dialogVisible.value = true
  playStatus.value = 'finish'
}

function restart() {
  vColorsBox.value.reset()
  countDownRestart()
  dialogVisible.value = false
}

function colorSelectError() {
  console.log('颜色选择错误')
}

function colorGameComplete() {
  stopPlay(true)
}
</script>
<style lang="scss" src="@/views/comps/PlayContainer/PlayContainer.scss"></style>
