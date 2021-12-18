import type { Ref } from 'vue'
import { ref } from 'vue'

// type ReturnType = [GeneralItem[], Ref<string>]
type ReturnType = {
  allWords: GeneralItem[]
  currentWord: Ref<string>
  currentWordInfo: Ref<GeneralItem>
  // wordIndex: Ref<number>
  /**单词总数 */
  wordsTotal: number
  //
  goNextWord: () => boolean
  //
  resetRestWordsIndexs: () => void
}

export default function useWordData(): ReturnType {
  // const currentWord = ref<GeneralItem | null>(null)
  const allWords: GeneralItem[] = window.words || ['one']
  const wordsTotal = allWords.length
  let restWordsIndexs = allWords.map((word, i) => i)

  function getRandomWord() {
    const index = ~~(Math.random() * restWordsIndexs.length)

    const wordIndex = restWordsIndexs.splice(index, 1)
    return allWords[wordIndex[0]]
  }

  const currentWordInfo = ref<GeneralItem>(getRandomWord())

  const currentWord = ref(currentWordInfo.value.value)

  function goNextWord() {
    // console.log('剩下单词index：' restWordsIndexs)
    const restWordNum = restWordsIndexs.length
    if (restWordNum) {
      currentWordInfo.value = getRandomWord()
      currentWord.value = currentWordInfo.value.value
      return true
    }
    return false
  }

  return {
    // wordIndex,
    allWords,
    currentWord,
    currentWordInfo,
    wordsTotal,
    goNextWord,
    resetRestWordsIndexs() {
      restWordsIndexs = allWords.map((word, i) => i)
      currentWordInfo.value = getRandomWord()
      currentWord.value = currentWordInfo.value.value
    },
  }
}
