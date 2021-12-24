declare interface GeneralItem {
  value: string
  label: string
}

declare interface Setting {
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
