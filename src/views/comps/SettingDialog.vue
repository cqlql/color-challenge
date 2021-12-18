<template>
  <DialogVue
    v-bind="$attrs"
    :visible="visible"
    class="setting-dialog"
    v-on="{ 'update:visible': close }"
  >
    <template #outside>
      <div class="setting-dialog_ornament"></div>
    </template>
    <div class="setting-dialog_body">
      <div class="row">
        <div class="row_label">挑战人：</div>
        <div class="row_value">
          <j-input
            ref="vInputName"
            v-model:value="challengerName"
            placeholder="请输入挑战人姓名"
          ></j-input>
        </div>
      </div>
      <div class="row">
        <div class="row_label">是否限时：</div>
        <div class="row_value">
          <RadioVue
            @change="(checked:boolean)=>{isLimitTime=checked}"
            v-model:checked="isLimitTime"
            name="LimitTime"
            >限时挑战</RadioVue
          >
          <RadioVue
            :checked="!isLimitTime"
            @change="(checked:boolean)=>{isLimitTime=!checked}"
            name="LimitTime"
            a="2"
            >不限时挑战</RadioVue
          >
        </div>
      </div>
      <div class="row">
        <div class="row_label">时间：</div>
        <div class="row_value">
          <j-input
            class="time-ipt"
            v-model:value="time"
            @input="input"
          ></j-input
          ><span class="sub">分钟</span>
        </div>
      </div>
      <div class="btns">
        <j-button @click="confirm">确认</j-button>
        <j-button type="info" @click="close">取消</j-button>
      </div>
    </div>
  </DialogVue>
</template>

<script setup lang="ts">
import { ref, inject, watch, nextTick } from 'vue'
import RadioVue from '@/components/RadioVue.vue'
import DialogVue from './DialogVue.vue'
import { setStorage } from '@/utils/local-storage'

const props = defineProps<{
  visible: boolean
}>()

const setting = inject<Setting>('setting') as Setting

const challengerName = ref(setting.challengerName)
const isLimitTime = ref(setting.isLimitTime)
const time = ref(setting.time)

const emit = defineEmits<{
  (e: 'update:visible', visble: boolean): void
}>()

function close() {
  emit('update:visible', false)
}
function confirm() {
  if (setting) {
    setStorage(
      'challengerName',
      (setting.challengerName = challengerName.value),
    )
    setStorage('isLimitTime', (setting.isLimitTime = isLimitTime.value))
    setStorage('time', (setting.time = time.value))
    close()
  }
}
function input(e: Event) {
  let ipt = e.target as HTMLInputElement
  let v = Number(ipt.value.replace(/[^\d]+/g, ''))
  if (v > 99) v = 99
  ipt.value = String(v)
}

const vInputName = ref({
  focus() {},
})
watch(
  () => props.visible,
  (visible) => {
    if (visible) {
      nextTick(() => {
        vInputName.value.focus()
      })
    }
  },
)
</script>
<style lang="scss">
.setting-dialog {
  width: 400px;
}

.setting-dialog_ornament {
  background: url('@/assets/icons.png') no-repeat 0 100%;
  background-size: 510px auto;
  width: 222px;
  height: 212px;
  position: absolute;
  top: -193px;
  right: 16px;
  z-index: 1;
}

.setting-dialog_body {
  font-size: 18px;
  line-height: 22px;
  color: #555;

  .row {
    display: flex;
    padding: 10px 0;
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
}
</style>
