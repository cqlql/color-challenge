import './comm.scss'
import { createApp } from 'vue'
import App from './views/HomeView.vue'
// import router from './router'
// import store from './store'

import Button from '@/components/Button.vue'
import Container from '@/components/Container.vue'
import Input from '@/components/Input.vue'
import '@/utils/em-auto.js'

createApp(App)
  // .use(store)
  // .use(router)
  .component('j-button', Button)
  .component('j-container', Container)
  .component('j-input', Input)
  .mount('#app')
