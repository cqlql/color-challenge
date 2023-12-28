<template>
  <j-container class="StartContainer">
    <template #header>
      <div class="StartContainer_header">
        <span>说明</span>

        <span @click="popupSetting" class="set"></span>
      </div>
    </template>

    <div class="StartContainer_body">
      颜色分辨力挑战，是指在所有的色块中选择其中有差异的一个色块，分为练习模式和挑战模式。练习模式没有时间限制，练习时选择错误可提醒正确的色块位置，练习结束可统计选择正确的关数和练习时长。挑战模式，分为限时挑战和不限时挑战。限时挑战是指在设定时间内挑战，时间到或某一关规定时间内未选到正确色块即挑战结束；不限时挑战是指不限时间进行挑战，某一关规定时间内未选到正确色块时挑战自动结束，也可以手动结束挑战。
    </div>

    <template #footer>
      <j-button type="green" @click="$emit('startPractice')">开始练习</j-button>
      <j-button @click="$emit('start')">开始挑战</j-button>
    </template>
    <SettingDialog
      ref="vSettingDialog"
      v-model:visible="visible"
      title="挑战设置"
    />
  </j-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SettingDialog from './SettingDialog.vue'
defineEmits(['start', 'startPractice'])
const visible = ref(false)

const vSettingDialog = ref({
  checkChallengerName() {
    return false
  },
})

defineExpose({
  checkChallengerName() {
    return vSettingDialog.value.checkChallengerName()
  },
})

function popupSetting() {
  visible.value = true
}
</script>

<style lang="scss">
.StartContainer {
  .j-button {
    margin: 0 30px;
  }

  // .j-container_main {
  //   background-color: hsla(0, 0%, 100%, 0.55);
  // }
}

.StartContainer_header {
  font-size: 24px;
  line-height: 22px;
  color: #00b7ee;
  margin: 26px 0;
  text-align: center;
  position: relative;

  .set {
    // font-size: 30px;
    color: #00b7ee;
    position: absolute;
    top: -2px;
    right: 50px;
    line-height: 1;
    background: url('@/assets/setting-icon.png') no-repeat;
    width: 30px;
    height: 28px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
}

.StartContainer_body {
  max-height: 380px;
  overflow: auto;
  // margin: 0 45px;
  box-sizing: border-box;
  padding: 18px;
  border: 1px solid #b0eafb;
  line-height: 30px;
  color: #555;
  font-size: 20px;
  text-indent: 40px;

  // dl {
  //   margin: 0;
  // }

  // dt {
  //   font-weight: bold;
  // }

  // dd {
  //   margin: 0;
  // }

  // ol {
  //   margin: 0;
  // }
}
</style>
