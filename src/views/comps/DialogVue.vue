<template>
  <teleport to="body">
    <TransitionFade>
      <div class="j-mask" v-if="visible" @click="close"></div>
    </TransitionFade>
  </teleport>
  <teleport to="body">
    <TransitionZoom>
      <div v-bind="$attrs" class="j-dialog" v-if="visible">
        <slot name="outside"></slot>
        <div class="j-dialog-box">
          <div class="j-dialog_title">{{ title }}</div>
          <div class="j-dialog_body">
            <slot></slot>
          </div>
        </div>
      </div>
    </TransitionZoom>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  inheritAttrs: false,
})
</script>

<script setup lang="ts">
import TransitionFade from '@/components/Transition/TransitionFade.vue'
import TransitionZoom from '@/components/Transition/TransitionZoom.vue'

defineProps<{
  visible?: boolean
  title?: string
}>()

const emit = defineEmits<{
  (e: 'update:visible', visble: boolean): void
}>()

function close() {
  emit('update:visible', false)
}
</script>
<style lang="scss">
.j-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
}

.j-dialog {
  width: 320px;
  // box-sizing: border-box;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.j-dialog-box {
  padding: 24px 40px 32px;
  position: relative;
  background-color: #fff;
  border-radius: 30px;
}

.j-dialog_title {
  line-height: 22px;
  text-align: center;
  padding-bottom: 28px;
  font-weight: 700;
  font-size: 24px;
  color: #000;
}

.j-dialog_body {
}
</style>
