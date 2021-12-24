import type { Ref, ComputedRef } from 'vue'
import { ref, computed } from 'vue'
import compare from '../utils/compare'
import useWordData from './useWordData'

export type PlayStatusType = 'countDown' | 'play' | 'finish'

interface ReturnOptions {
  iptWordValue: Ref<string>
  onEnter: (e: KeyboardEvent) => void
  confirm: (v: string) => void
  inputInfo: Ref<string>
  hasInputError: Ref<boolean>
  // currentWord: Ref<string>
  resolveWord: Ref<string>
  currentWordInfo: Ref<GeneralItem>
  /**全部完成消息 */
  completeMsg: Ref<string>
  /** */
  correctWordCount: Ref<number>
  /**已输入单词总数 */
  inputWordCount: ComputedRef<number>
  /**开始输入 */
  resetInput: () => void
  /** */
  // wordIndex: Ref<number>
}

export default function useWordIpt(
  error: () => void,
  playStatus: Ref<PlayStatusType>,
  complete: () => void,
  isPractice?: boolean,
): ReturnOptions {
  const resolveWord = ref('')
  const completeMsg = ref('')
  const { currentWord, currentWordInfo, goNextWord, resetRestWordsIndexs } =
    useWordData()

  const iptWordValue = ref('')

  const inputInfo = ref('')
  const hasInputError = ref(false)

  const correctWordCount = ref(0)
  const wrongWordCount = ref(0)

  function validate(v: string): boolean {
    v = v.trim().replace(/\s+/, ' ')
    if (currentWord.value === v) {
      return true
    }
    return false
  }

  function confirm(v: string) {
    if (validate(v)) {
      // 输入正确

      correctWordCount.value += 1
      hasInputError.value = false
      inputInfo.value = '输入正确！你是最棒哒！'

      if (goNextWord()) {
        iptWordValue.value = ''
      } else {
        // 全部完成
        complete()
        completeMsg.value = '恭喜你完成了所有单词！'
        playStatus.value = 'finish'
        resolveWord.value = currentWord.value
      }
    } else {
      // 输入错误

      wrongWordCount.value += 1
      hasInputError.value = true
      inputInfo.value = '您的输入有误！'
      error()
      playStatus.value = 'finish'
      resolveWord.value = compare(iptWordValue.value, currentWord.value)
    }
  }

  function confirmPractice(v: string) {
    if (validate(v)) {
      // 输入正确

      correctWordCount.value += 1
      hasInputError.value = false
      inputInfo.value = '输入正确！你是最棒哒！'
    } else {
      // 输入错误

      wrongWordCount.value += 1
      hasInputError.value = true
      inputInfo.value = '您的输入有误！'
      error()
      // playStatus.value = 'finish'
      // resolveWord.value = compare(iptWordValue.value, currentWord.value)
    }

    if (goNextWord()) {
      iptWordValue.value = ''
    } else {
      // 全部完成
      complete()
      completeMsg.value = '你已完成了所有单词！'
      playStatus.value = 'finish'
      resolveWord.value = currentWord.value
    }
  }

  function onEnter() {
    const v = iptWordValue.value
    if (isPractice) {
      confirmPractice(v)
    } else {
      confirm(v)
    }
  }

  return {
    iptWordValue,
    onEnter,
    confirm,
    inputInfo,
    hasInputError,
    resolveWord,
    currentWordInfo,
    completeMsg,
    correctWordCount,
    inputWordCount: computed(() => {
      return correctWordCount.value + wrongWordCount.value
    }),
    resetInput() {
      hasInputError.value = false
      inputInfo.value = ''
      iptWordValue.value = ''
      wrongWordCount.value = correctWordCount.value = 0
      resetRestWordsIndexs()
    },
  }
}
