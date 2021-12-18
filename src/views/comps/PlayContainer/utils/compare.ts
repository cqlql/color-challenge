export default function compare(word: string, correctWord: string): string {
  word = word.replace(/(^\s+|[^\w\s]+)/g, '').replace(/\s+/g, ' ')
  // const correctWord = 'one'
  let newContent = ''
  for (let index = 0, len = word.length; index < len; index++) {
    const char = word[index]
    if (char !== correctWord[index]) {
      newContent += `<span class="err">${char}</span>`
    } else {
      newContent += char
    }
  }
  return newContent
}
