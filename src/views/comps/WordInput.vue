<template>
  <div
    ref="eIpt"
    class="englishchallenge-input"
    @input="onInput"
    contenteditable
  >
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
const emit = defineEmits<{
  (e: 'update:value', value: string): void
  (e: 'input'): void
}>()

const props = defineProps<{
  value: string
  correctWord: string
}>()

watch(props, (iptWordValue) => {
  if (!iptWordValue.value) {
    eIpt.textContent = ''
  }
})

// 光标定位末端
function cursorToEnd(el: HTMLDivElement) {
  const s = window.getSelection()
  const r = document.createRange()
  r.selectNodeContents(el)
  r.collapse()
  if (s) {
    s.removeAllRanges()
    s.addRange(r)
  }
}
let eIpt: HTMLDivElement
function onInput(e: Event) {
  eIpt = e.target as HTMLDivElement
  const word = (eIpt.textContent as string)
    .replace(/(^\s+|[^\w\s]+)/g, '')
    .replace(/\s+/g, ' ')
  const correctWord = props.correctWord

  emit('update:value', word)
  emit('input')

  let newContent = ''
  for (let index = 0, len = word.length; index < len; index++) {
    const char = word[index]
    if (char !== correctWord[index]) {
      newContent += `<span class="err">${char}</span>`
    } else {
      newContent += char
    }
  }

  eIpt.innerHTML = newContent

  cursorToEnd(eIpt)
}
</script>

<style lang="scss">
.englishchallenge-input {
  height: 180px;
  line-height: 170px;

  font-size: 48px;
  text-align: center;
  outline: none;
  background-color: #fff;

  padding-bottom: 10px;
  box-sizing: border-box;
  // .err {
  //   color: #f60202;
  // }
}
</style>
