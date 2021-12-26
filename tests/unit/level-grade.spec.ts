import levelGrade from '@/components/ColorsBox/level-grade'

describe('levelGrade', () => {
  it('levelGrade', () => {
    expect(levelGrade(0, 50)).toBe('色盲')
    expect(levelGrade(1, 50)).toBe('初级')
    expect(levelGrade(49, 50)).toBe('堪比毕加索')
    expect(levelGrade(50, 50)).toBe('最强王者')
  })
})
