import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

createApp(App).use(store).use(router).use(messagePlugin).mount('#app')
