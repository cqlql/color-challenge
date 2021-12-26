export default function levelGrade(level: number, maxLevel: number) {
  const grades = [
    { name: '色盲' },
    { name: '初级' },
    { name: '一般' },
    { name: '突出的色感' },
    { name: '美术学院学生级的色感' },
    { name: '堪比毕加索' },
    { name: '最强王者' },
  ]
  const gradesTotal = grades.length
  if (level === maxLevel) {
    return grades[gradesTotal - 1].name
  }

  const grade = Math.ceil(level / (maxLevel / (gradesTotal - 2)))
  return grades[grade].name
}
