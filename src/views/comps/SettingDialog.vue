<template>
  <DialogVue
    v-bind="$attrs"
    :visible="visible"
    class="setting-dialog"
    v-on="{ 'update:visible': close }"
  >
    <!-- <template #outside>
      <div class="setting-dialog_ornament"></div>
    </template> -->
    <div class="setting-dialog_body">
      <div class="row" :class="{ err: challengerNameError }">
        <div class="row_label">挑战人：</div>
        <div class="row_value">
          <j-input
            ref="vInputName"
            v-model:value="challengerName"
            placeholder="请输入挑战人姓名"
          ></j-input>
        </div>
        <div class="errmsg">必须填写挑战人才能进行挑战</div>
      </div>
      <div class="row">
        <div class="row_label">挑战模式：</div>
        <div class="row_value">
          <RadioVue :checked="challengeMode==='normal'" name="challengeMode" @change="challengeMode = 'normal'"
            >普通模式</RadioVue
          >
          <RadioVue :checked="challengeMode==='hard'" name="challengeMode" @change="challengeMode='hard'"
            >困难模式</RadioVue
          >
        </div>
      </div>
      <div class="row">
        <div class="row_label">是否限时：</div>
        <div class="row_value">
          <RadioVue :checked="isLimitTime" name="LimitTime" @change="isLimitTime = $event"
            >限时挑战</RadioVue
          >
          <RadioVue :checked="!isLimitTime" name="LimitTime" @change="isLimitTime = !$event"
            >不限时挑战</RadioVue
          >
        </div>
      </div>
      <div class="row">
        <div class="row_label">时间：</div>
        <div class="row_value">
          <j-input v-model:value="time" class="time-ipt" @input="input"></j-input
          ><span class="sub">分钟</span>
        </div>
      </div>
      <div class="btns">
        <j-button type="info" @click="close">取消</j-button>
        <j-button @click="confirm">确认</j-button>
      </div>
    </div>
  </DialogVue>
</template>

<script setup lang="ts">
import { ref, inject, watch, nextTick } from 'vue';
import RadioVue from '@/components/RadioVue.vue'
import DialogVue from './DialogVue.vue'
import { setStorage } from '@/utils/local-storage'

const props = defineProps<{
  visible: boolean
}>()

const setting = inject<Setting>('setting') as Setting

const challengerName = ref(setting.challengerName)
const challengeMode = ref(setting.challengeMode)
const isLimitTime = ref(setting.isLimitTime)
const time = ref(setting.time)
const challengerNameError = ref(false)

const emit = defineEmits<{
  (e: 'update:visible', visble: boolean): void
}>()

const vInputName = ref({
  focus() {}
})
watch(
  () => props.visible,
  (visible) => {
    if (visible) {
      nextTick(() => {
        nextTick(() => {
          vInputName.value.focus()
          challengerName.value = setting.challengerName
        })
      })
    }
  }
)

watch(challengerName, () => {
  challengerNameError.value = false
})

type EmptyFunction = ((v?: any) => void) | null

let checkChallengerNameReject: EmptyFunction
let checkChallengerNameResolve: EmptyFunction

defineExpose({
  checkChallengerName() {
    return new Promise((resolve, reject) => {
      if (challengerName.value) {
        resolve(null)
        return
      }
      challengerNameError.value = true
      emit('update:visible', true)
      checkChallengerNameResolve = resolve
      checkChallengerNameReject = reject
    })
  }
})

function close() {
  emit('update:visible', false)
}
function confirm() {
  if (setting) {
    setStorage('challengerName', (setting.challengerName = challengerName.value))
    setStorage('isLimitTime', (setting.isLimitTime = isLimitTime.value))
    setStorage('time', (setting.time = time.value))
    close()
    if (challengerName.value) {
      checkChallengerNameResolve?.()
    } else {
      checkChallengerNameReject?.('还是没有填挑战人姓名')
    }
    checkChallengerNameReject = checkChallengerNameResolve = null
  }
}
function input(e: Event) {
  let ipt = e.target as HTMLInputElement
  let v = Number(ipt.value.replace(/[^\d]+/g, ''))
  if (v > 99) v = 99
  ipt.value = String(v)
}
</script>
<style lang="scss">
.setting-dialog {
  width: 400px;
}

// .setting-dialog_ornament {
//   background: url('@/assets/icons.png') no-repeat 0 100%;
//   background-size: 510px auto;
//   width: 222px;
//   height: 212px;
//   position: absolute;
//   top: -193px;
//   right: 16px;
//   z-index: 1;
// }

.setting-dialog_body {
  font-size: 18px;
  line-height: 22px;
  color: #555;

  .row {
    display: flex;
    padding: 10px 0;
    position: relative;
  }

  .row_label {
    width: 90px;
    text-align: right;
    padding-right: 10px;
    line-height: 2;
  }

  .row_value {
    flex: 1;
    line-height: 2;
    font-size: 16px;
  }

  .time-ipt {
    width: 90px;
    margin-right: 10px;
    vertical-align: middle;
  }

  .sub {
    vertical-align: middle;
  }

  .j-radio + .j-radio {
    padding-left: 10px;
  }

  .btns {
    text-align: center;
    padding: 20px 0 4px;

    .j-button {
      margin: 0 30px;
    }
  }

  .errmsg {
    color: #f60202;
    text-align: center;
    font-size: 16px;
    top: 45px;
    position: absolute;
    width: 100%;
    display: none;
  }

  .row.err {
    .j-input {
      border-color: #f60202;
    }

    .j-input:focus-visible {
      outline-color: #f60202;
    }

    .errmsg {
      display: block;
    }
  }
}
</style>
