<template>
  <j-container class="PlayContainer">
    <template #header>
      <div class="PlayContainer_header">
        <TimeCount ref="vTimeCount" @end="timeEnd" :isPractice="true" />
        <div class="PlayContainer_header-r-info">
          <div class="tp-name">练习模式</div>
          <div class="curr-word">
            已输入 <b>{{ inputWordCount }}</b> 个单词
          </div>
        </div>
      </div>
      <div>header</div>
    </template>
    <div v-if="!isCountDown" class="PlayContainer_word-lb">
      {{ currentWordInfo.label }}
    </div>
    <div class="PlayContainer_body">
      <ColorsBox v-if="isPlay" />
      <div v-else-if="isCountDown" class="PlayContainer_countdown">
        {{ countDown }}
      </div>
      <template v-else>
        <div class="englishchallenge-input" v-html="resolveWord"></div>
      </template>
    </div>
    <ResultDialog
      v-model:visible="dialogVisible"
      title="练习结果"
      :completeMsg="completeMsg"
      :list="dialogDataList"
      confirmBtnText="重新练习"
      @confirm="restart"
    />
    <template #footer>
      <div class="PlayContainer_info" :class="{ err: hasInputError }">
        {{ inputInfo }}
        <!-- 您的输入有误！ -->
        <!-- 输入正确！你是最棒哒！ -->
      </div>
      <j-button v-if="isPlay" @click="stopPlay">结束练习</j-button>
      <j-button v-else-if="isFinish" @click="dialogVisible = true"
        >查看结果</j-button
      >
      <j-button type="info" @click="$emit('back')">返回</j-button>
    </template>
  </j-container>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import { ref, watch, computed } from 'vue'

import useCountDown from './composable/useCountDown'
import TimeCount from '../TimeCount.vue'
import ResultDialog from '../ResultDialog.vue'
import type { PlayStatusType } from './composable/useWordIpt'
import useWordIpt from './composable/useWordIpt'
import ColorsBox from '@/components/ColorsBox/ColorsBox.vue'
// import compare from './utils/compare'

// const setting = inject<Setting>('setting') as Setting

const vTimeCount = ref({
  stopTime: () => {},
  startTime: () => {},
  getElapsedTime: () => '',
})

defineEmits(['back'])

const dialogVisible = ref(false)
const dialogDataList = ref<GeneralItem[]>([])

const playStatus = ref<PlayStatusType>('countDown')

function stopPlay() {
  vTimeCount.value.stopTime()
  dialogDataList.value = [
    {
      value: correctWordCount.value + '个',
      label: '正确单词数',
    },
    {
      value: vTimeCount.value.getElapsedTime(),
      label: '练习用时',
    },
  ]
  dialogVisible.value = true
}

let {
  inputWordCount,
  correctWordCount,
  iptWordValue,
  onEnter,
  confirm,
  inputInfo,
  hasInputError,
  resolveWord,
  currentWordInfo,
  completeMsg,
  resetInput,
} = useWordIpt(
  () => {},
  playStatus,
  // 全部完成
  stopPlay,
  true,
)

let { countDown, countDownRestart } = useCountDown(0, playStatus)

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

function restart() {
  resetInput()
  countDownRestart()
  dialogVisible.value = false
}

function timeEnd() {
  confirm(iptWordValue.value)
}

function onInput() {
  hasInputError.value = false
  inputInfo.value = ''
}

// 获焦
let vWordInput = ref<ComponentPublicInstance | null>(null)
watch(vWordInput, () => {
  vWordInput.value?.$el.focus()
})
</script>
<style lang="scss" src="@/views/comps/PlayContainer/PlayContainer.scss"></style>
