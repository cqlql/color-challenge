<template>
  <transition
    name="TransitionZoom"
    enter-active-class="transition-active"
    leave-active-class="transition-active"
  >
    <slot></slot>
  </transition>
</template>

<style lang="scss">
.TransitionZoom-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.2) !important;
}

.TransitionZoom-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8) !important;
}
</style>
