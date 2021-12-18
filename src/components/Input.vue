<template>
  <input
    ref="eIpt"
    class="j-input"
    type="text"
    v-bind="$attrs"
    @input="inputHandle"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()
function inputHandle(e: Event) {
  emit('update:value', (e.target as HTMLInputElement).value)
}
// defineProps({
//   value
// })

const eIpt = ref({
  focus() {},
})
defineExpose({
  focus() {
    eIpt.value.focus()
  },
})
</script>
<style lang="scss">
.j-input {
  width: 200px;
  height: 35px;
  border-radius: 5px;
  padding: 0 8px;
  box-sizing: border-box;
  color: #555;
  border: 1px solid #bfbfbf;
}
.j-input:focus-visible {
  outline: #40a9ff auto 1px;
}
</style>
