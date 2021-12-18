<template>
  <transition
    :name="transitionName"
    enter-active-class="transition-active"
    leave-active-class="transition-active"
  >
    <slot></slot>
  </transition>
</template>

<script lang="ts" setup>
import { computed, withDefaults } from 'vue'
import type { Derection } from './side'

interface Props {
  derection?: Derection
}

const props = withDefaults(defineProps<Props>(), {
  derection: 'left',
})
const transitionName = computed(() => {
  return 'slide-' + props.derection
})
</script>
<style lang="scss">
.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translate3d(-40%, -50%, 0) !important;
}

.slide-left-leave-to,
.slide-right-enter-from {
  opacity: 0;
  transform: translate3d(-60%, -50%, 0) !important;
}
</style>
