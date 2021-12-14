import { DefineComponent } from 'vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JButton: DefineComponent<
      {
        /**
         * 按钮类型
         */
        type?: 'green' | 'danger' | 'info'
      },
      {},
      {},
      {},
      {},
      {},
      {},
      /**事件没办法显示注释 */
      {
        click: (e: Event) => void
      }
    >
    JInput: DefineComponent<{
      value?: string
    }>
  }
}
