import { ref } from 'vue'

type ColorType = {
  r: number
  g: number
  b: number
}

export default function useRenderColors() {
  const colors = ref<ColorType[]>([])
  const gridColumnNumber = ref(1)

  // 最高级
  const colorGameLastStage = 50

  // 当前级别
  let colorGameLevel = 0

  // 正确格子索引
  let colorGameCorrect = -1



  return {
    colors,
    gridColumnNumber,
    setLevel(level: number) {
      renderLevel(level)
    },
  }
}

function renderLevel(level: number, prevCorrect: number = 0) {
  // if (level > colorGameLastStage) {
  //   // 挑战完成
  //   gameOver()
  // } else {
  //   colorGameLevel = level

    const gridColumnNumber = colorGameLevelGrid(level),
      o = colorGameLevelColorDiff(level),
      n = rangeColor(o),
      s = rangeColor(o),
      i = rangeColor(o)
    const colors: ColorType[] = []

    let correctIndex = 0

    // 正确的格子索引，随机，并保证与上一次不等
    do {
      correctIndex = Math.floor(
        Math.random() * gridColumnNumber * gridColumnNumber,
      )
    } while (prevCorrect == correctIndex)

    for (let c = 0; c < gridColumnNumber * gridColumnNumber; c++) {
      c === correctIndex
        ? colors.push({
            r: n,
            g: s,
            b: i,
          })
        : colors.push({
            r: n + o,
            g: s + o,
            b: i + o,
          })
    }
    // colors.value = colors
    // gridColumnNumber.value = gridColumnNumber
    return { colors, gridColumnNumber, correctIndex }
  }
}

function colorGameLevelGrid(level: number) {
  return level < 2
    ? 2
    : level < 4
    ? 3
    : level < 8
    ? 4
    : level < 13
    ? 5
    : level < 22
    ? 6
    : level < 32
    ? 7
    : level < 36
    ? 8
    : level < 40
    ? 9
    : level < 44
    ? 10
    : level < 48
    ? 11
    : 12
}
function colorGameLevelColorDiff(level: number) {
  if (level <= 50) {
    const t = [
      126, 120, 96, 86, 70, 58, 48, 40, 34, 30, 27, 27, 27, 25, 25, 25, 23, 23,
      23, 23, 21, 21, 21, 21, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 12,
      12, 12, 12, 12, 10, 10, 10, 10, 7, 7, 7, 3, 3, 2, 1,
    ]
    return t[level - 1]
  }
  return 1
}

function rangeColor(level: number) {
  return Math.floor(Math.random() * (255 - level))
}
