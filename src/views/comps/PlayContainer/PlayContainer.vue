<template>
  <j-container class="PlayContainer">
    <template #header>
      <div class="PlayContainer_header">
        <div class="PlayContainer_header-r-info">
          <div class="tp-name">挑战模式</div>
          <GameTimeCountdown v-if="isPlay" :key="level" @timeUp="timeUp" />
        </div>
        <TimeCount ref="vTimeCount" @end="timeEnd" />
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
      title="挑战结果"
      :completeMsg="completeMsg"
      :list="dialogDataList"
      confirmBtnText="重新挑战"
      @confirm="restart"
    />
    <template #footer>
      <j-button v-if="isPlay" @click="stopPlay()">结束挑战</j-button>
      <j-button v-else-if="isFinish" @click="dialogVisible = true"
        >查看结果</j-button
      >
      <j-button type="info" @click="$emit('back')">返回</j-button>
    </template>
  </j-container>
</template>

<script setup lang="ts">
import { ref, watch, computed, inject } from 'vue'

import useCountDown from './hooks/useCountDown'
import TimeCount from '../TimeCount.vue'
import type { ResultDialogItemType } from '../ResultDialog.vue'
import ResultDialog from '../ResultDialog.vue'
import type { PlayStatusType } from './hooks/useWordIpt'
import ColorsBox from '@/components/ColorsBox/ColorsBox.vue'
import GameTimeCountdown from '../GameTimeCountdown.vue'
import useColorGame from './hooks/useColorGame'

const setting = inject<Setting>('setting') as Setting

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
  currentLevel: 0,
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
const dialogDataList = ref<ResultDialogItemType[]>([])

const playStatus = ref<PlayStatusType>('countDown')

const { level } = useColorGame()

const completeMsg = ref('')

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
  stopPlay()
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

  vColorsBox.value.pause()

  vTimeCount.value.stopTime()

  dialogDataList.value = [
    {
      value: setting.challengerName || '',
      label: '挑战人',
    },
    {
      value: vColorsBox.value.getGradeTitle(),
      label: '色感等级',
      rowClass: 'value-em',
    },
    {
      value: String(vColorsBox.value.currentLevel) + '关',
      label: '通过关数',
    },

    {
      value: setting.isLimitTime ? '限时挑战' : '不限时挑战',
      label: '挑战模式',
    },
    {
      value: vTimeCount.value.getElapsedTime(),
      label: '挑战用时',
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
  stopPlay()
}

function colorGameComplete() {
  stopPlay(true)
}

function timeEnd() {
  console.log('限时模式时间到')
  stopPlay()
  // confirm(iptWordValue.value)
}
</script>
<style lang="scss" src="@/views/comps/PlayContainer/PlayContainer.scss"></style>
