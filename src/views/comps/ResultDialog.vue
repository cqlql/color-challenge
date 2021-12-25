<template>
  <DialogVue
    v-bind="$attrs"
    class="ResultDialog"
    v-on="{ 'update:visible': close }"
  >
    <template #outside>
      <div class="ResultDialog_ornament"></div>
    </template>
    <div class="ResultDialog_body">
      <div v-if="completeMsg" class="row completeMsg">
        {{ completeMsg }}
      </div>
      <div v-if="gradeMsg" class="row gradeMsg">
        {{ gradeMsg }}
      </div>
      <div v-for="(item, key) of list" class="row" :key="key">
        <div class="row_label">{{ item.label }}：</div>
        <div class="row_value"> {{ item.value }} </div>
      </div>
      <div class="btns">
        <j-button @click="confirm">{{ confirmBtnText }}</j-button>
        <j-button type="info" @click="close">返回</j-button>
      </div>
    </div>
  </DialogVue>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import DialogVue from './DialogVue.vue'

withDefaults(
  defineProps<{
    list: GeneralItem[]
    confirmBtnText: string
    completeMsg?: string
    gradeMsg?: string
  }>(),
  {
    list: () => [],
    confirmBtnText: '确认',
  },
)

const emit = defineEmits<{
  (e: 'update:visible', visble: boolean): void
  (e: 'confirm'): void
}>()

function close() {
  emit('update:visible', false)
}
function confirm() {
  emit('confirm')
}
</script>
<style lang="scss">
.ResultDialog {
  width: 360px;
}

.ResultDialog_ornament {
  background: url('@/assets/icons.png') no-repeat 0 0;
  background-size: 510px auto;
  width: 329px;
  height: 251px;
  position: absolute;
  top: -248px;
  right: 0;
}

.ResultDialog_body {
  font-size: 18px;
  line-height: 22px;
  color: #555;

  .row {
    display: flex;
    padding: 10px 0;
  }

  .completeMsg {
    text-align: center;
    display: block;
    color: #67c23a;
  }

  .row_label {
    width: 50%;
    line-height: 16px;
    text-align: right;
    padding-right: 10px;
    line-height: 2;
  }

  .row_value {
    flex: 1;
    line-height: 2;
    // font-size: 16px;
    color: #333;
  }
  // .time-ipt {
  //   width: 90px;
  //   margin-right: 10px;
  //   vertical-align: middle;
  // }
  // .sub {
  //   vertical-align: middle;
  // }
  // .j-radio + .j-radio {
  //   padding-left: 10px;
  // }
  .btns {
    text-align: center;
    padding: 20px 0 4px;

    .j-button {
      width: 100px;
      padding: 12px 0;
    }

    .j-button + .j-button {
      margin-left: 20px;
    }
  }
}
</style>
