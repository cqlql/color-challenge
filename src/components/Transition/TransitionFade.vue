<template>
  <transition
    name="TransitionFade"
    enter-active-class="transition-active"
    leave-active-class="transition-active"
  >
    <slot></slot>
  </transition>
</template>

<style lang="scss">
.TransitionFade-enter-from,
.TransitionFade-leave-to {
  opacity: 0;
}
</style>
