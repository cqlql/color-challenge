<template>
  <div class="englishchallenge">
    <div class="full-bg"></div>
    <TransitionSlide :derection="transitionDerection">
      <component
        :is="{ StartContainer, PlayContainer, PlayContainerPractice }[compName]"
        @start="toPlay"
        @startPractice="toPlayPractice"
        @back="toStart"
      ></component>
    </TransitionSlide>
    <div class="copyright">
      <div>
        版权:深圳市南山区第二外国语学校（集团）海德学校<p>设计: 刘志勇</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref, provide, reactive } from 'vue'

import StartContainer from './comps/StartContainer.vue'
import PlayContainer from './comps/PlayContainer/PlayContainer.vue'
import PlayContainerPractice from './comps/PlayContainer/PlayContainerPractice.vue'
import TransitionSlide from '@/components/Transition/Side.vue'
import type { Derection } from '@/components/Transition/side'
import { getStorage } from '../utils/local-storage'

const compName = ref<
  'StartContainer' | 'PlayContainer' | 'PlayContainerPractice'
>('StartContainer')

const transitionDerection = ref<Derection>('left')

watch(compName, (name: string) => {
  if (name === 'StartContainer') {
    transitionDerection.value = 'right'
  } else {
    transitionDerection.value = 'left'
  }
})

function toPlay() {
  compName.value = 'PlayContainer'
}
function toPlayPractice() {
  compName.value = 'PlayContainerPractice'
}
function toStart() {
  compName.value = 'StartContainer'
}

const challengerName = getStorage('challengerName')
const isLimitTime = getStorage('isLimitTime')
const time = getStorage('time')

const setting = reactive<Setting>({
  challengerName: challengerName ? challengerName : '',
  isLimitTime: isLimitTime === null ? true : JSON.parse(isLimitTime),
  time: time ? time : '1',
})

provide('setting', setting)
</script>

<style lang="scss">
.copyright {
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;

  div {
    display: inline-block;
    background-color: hsla(0, 0%, 100%, 0.8);
    padding: 10px 15px;
    border-radius: 100px;
    color: #6c6a6a;
  }

  p {
    padding: 0;
    margin: 0;
  }
}
</style>
