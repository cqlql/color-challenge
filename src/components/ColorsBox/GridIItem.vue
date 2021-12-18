<template>
  <div
    class="GridIItem"
    :style="{
      width: `${size}%`,
      height: `${size}%`,
    }"
  >
    <div
      class="GridIItem-el"
      :style="{
        'background-color': `rgb(${color.r}, ${color.g}, ${color.b}`,
      }"
    >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type ColorType = {
  r: number
  g: number
  b: number
}

const props = withDefaults(
  defineProps<{
    gridColumnNumber: number
    color: ColorType
  }>(),
  {
    gridColumnNumber: 1,
    color: () => ({
      r: 0,
      g: 0,
      b: 0,
    }),
  },
)

const size = computed(() => 100 / props.gridColumnNumber)
</script>
<style lang="scss">
.GridIItem {
  float: left;
  position: relative;
}

.GridIItem-el {
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 5px;
  right: 5px;
  border-radius: 5px;
}
</style>
