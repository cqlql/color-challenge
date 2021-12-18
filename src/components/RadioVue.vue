<template>
  <label class="j-radio">
    <input v-bind="$attrs" type="radio" class="j-radio_ipt" @change="change" />
    <span class="j-radio_view"></span>
    <span class="j-radio_label"><slot></slot></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  inheritAttrs: false,
})
</script>

<script lang="ts" setup>
const emit = defineEmits<{
  // (e: 'update:checked', checked: boolean): void
  (e: 'change', checked: boolean): void
}>()

function change(e: Event) {
  // console.log(e.target, (e.target as HTMLInputElement).checked)
  emit('change', (e.target as HTMLInputElement).checked)
}
</script>

<style lang="scss">
.j-radio {
}

.j-radio_ipt {
  display: none;
}

.j-radio_view {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  vertical-align: middle;
  box-sizing: border-box;
  border: 1px solid #bfbfbf;
  box-shadow: inset 0 0 0 2px #fff;
  margin-right: 6px;
}

.j-radio_ipt:checked + .j-radio_view {
  background-color: #555;
}

.j-radio_label {
  vertical-align: middle;
}
</style>
