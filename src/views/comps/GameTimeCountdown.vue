<template>
  <div :class="{ emergency: isEmergency }"> {{ time }} </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from 'vue'

const emits = defineEmits<{
  (e: 'timeUp'): void
}>()

const timeStartTotal = '20'

const isEmergency = ref(false)
const time = ref(timeStartTotal)
let urgentTime = 5 // 紧急界限时间

let timeId: number

// if (process.env.NODE_ENV !== 'production') {
//   time.value = '20'
//   urgentTime = 1
// }

onUnmounted(() => {
  stop()
})

defineExpose({
  restart,
  stop,
})

function restart() {
  stop()
  time.value = timeStartTotal
  let timeValue = Number(timeStartTotal)
  timeId = setInterval(() => {
    timeValue = Number((timeValue - 0.1).toFixed(1))

    if (timeValue > urgentTime) {
      time.value = String(Math.ceil(timeValue))
      isEmergency.value = false
    } else {
      time.value = timeValue.toFixed(1)
      isEmergency.value = true
    }

    if (timeValue <= 0) {
      clearInterval(timeId)
      emits('timeUp')
    }
  }, 100)
}

function stop() {
  clearInterval(timeId)
}
</script>
<style scoped lang="scss">
.emergency {
  color: red;
}
</style>
