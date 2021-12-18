import type { Ref } from 'vue'
import { ref, onUnmounted } from 'vue'
import type { PlayStatusType } from './useWordIpt'

interface ReturnType {
  countDown: Ref<number>
  countDownRestart: () => void
}
export default function useCountDown(
  countDownVal: number,
  playStatus: Ref<PlayStatusType>,
): ReturnType {
  const countDown = ref(countDownVal)
  let timeId: number | undefined

  function start() {
    clearInterval(timeId)
    playStatus.value = 'countDown'
    countDown.value = countDownVal
    timeId = setInterval(function () {
      countDown.value -= 1
      if (countDown.value <= 0) {
        clearInterval(timeId)
        playStatus.value = 'play'
      }
    }, 1000)
  }

  onUnmounted(function () {
    clearInterval(timeId)
  })

  start()

  return {
    countDown,
    countDownRestart: start,
  }
}
