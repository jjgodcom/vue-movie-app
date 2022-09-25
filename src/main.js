import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'

// use() : 플러그인을 연결할떄 사용하는 메소드
createApp(App)
  .use(router)
  .use(store)
  .mount('#app')