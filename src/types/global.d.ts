declare interface GeneralItem {
  value: string
  label: string
}

declare interface Setting {
  /**
   * 挑战模式
   * normal 普通模式。错了还可以继续
   * hard 困难模式。错了立即结束
   */
  challengeMode?: 'normal'|'hard'
  challengerName?: string
  isLimitTime?: boolean
  time?: string
}

declare namespace NodeJS {
  interface Process {
    env: {
      NODE_ENV: 'production' | 'development'
    }
  }
}
