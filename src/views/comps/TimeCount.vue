<template>
  <div class="TimoCount">
    <span class="TimoCount_time">
      <!-- <span class="TimoCount_clock"></span> -->
      {{ time }}
    </span>
  </div>
</template>

<script lang="ts"></script>

<script lang="ts" setup>
import { inject, ref, onUnmounted } from 'vue'

const props = defineProps<{
  isPractice?: boolean
}>()

const time = ref('00:00')
let elapsedSecondTime = 0 // 耗时(秒)

let setting: Setting = {}
if (props.isPractice) {
  setting.isLimitTime = false
} else {
  setting = inject<Setting>('setting') as Setting
}

// if (!import.meta.env.PROD) {
//   setting.time = '0'
// }
const emit = defineEmits<{
  (e: 'end'): void
}>()

interface TimeCountOption {
  time?: number | string
  isCountDown?: boolean
  cb: (t: string) => void
  end: () => void
  start: (second: number) => void
}
interface TimeFormatParams {
  secondCount: number
  separator?: string
  secondUnit?: string
  minuteUnit?: string
}

function timeFormat({
  secondCount,
  separator = ':',
  minuteUnit = '',
  secondUnit = '',
}: TimeFormatParams) {
  let minute: any = ~~(secondCount / 60)
  let second: any = secondCount % 60
  if (minute < 10) {
    minute = '0' + minute
  }
  if (second < 10) {
    second = '0' + second
  }
  return `${minute}${minuteUnit}${separator}${second}${secondUnit}`
}

function CountDownFn({ time, cb, end, start }: TimeCountOption) {
  let totalSecond = (time as number) * 60
  let count = totalSecond
  start(totalSecond)

  let timeId: any = null
  timeId = setInterval(() => {
    count -= 1
    cb(timeFormat({ secondCount: count }))
    if (count <= 0) {
      stop()
      end()
    }
  }, 1000)

  function stop() {
    elapsedSecondTime = totalSecond - count
    clearInterval(timeId)
  }

  return stop
}

function TimeCountFn({ cb, start }: TimeCountOption) {
  let count = 0
  elapsedSecondTime = 0
  let timeId: any = null

  start(0)

  timeId = setInterval(() => {
    count += 1

    cb(timeFormat({ secondCount: count }))
  }, 1000)

  function stop() {
    elapsedSecondTime = count
    clearInterval(timeId)
  }
  return stop
}

function TimeHandle(timeCountOption: TimeCountOption) {
  if (timeCountOption.isCountDown) {
    return CountDownFn(timeCountOption)
  }

  return TimeCountFn(timeCountOption)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
let stop = () => {}

function start() {
  stop()
  stop = TimeHandle({
    time: setting.time,
    // time: 2 / 60,
    isCountDown: setting.isLimitTime,
    start(second) {
      time.value = timeFormat({
        secondCount: second,
      })
    },
    cb(t) {
      time.value = t
    },
    end() {
      emit('end')
    },
  })
}

onUnmounted(() => {
  stop()
})
defineExpose({
  startTime: start,
  stopTime: () => stop(),
  getElapsedTime() {
    return timeFormat({
      secondCount: elapsedSecondTime,
      separator: '',
      minuteUnit: '分',
      secondUnit: '秒',
    })
  },
})

// 初始显示正确
if (setting.isLimitTime) {
  time.value = timeFormat({
    secondCount: Number(setting.time) * 60,
  })
}
</script>
<style lang="scss">
.TimoCount {
  font-size: 48px;
  font-weight: bold;
  // line-height: 22px;
  // color: #00b7ee;
  color: #00b7ee;
  // margin: 16px 0 12px;
  text-align: center;
  // position: relative;
}

// .TimoCount_clock {
//   background: url('@/assets/icons.png') no-repeat 71.957% 23.15%;
//   background-size: 510px auto;
//   width: 50px;
//   height: 46px;
//   position: absolute;
//   left: -60px;
//   top: 0;
// }

// .TimoCount_time {
//   position: relative;
// }
</style>
