import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faLock, faBars,faTachometerAlt, faCube } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'

library.add(faUser, faLock, faBars,faTachometerAlt,faCube)
const pinia = createPinia()



createApp(App).
component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(pinia)
.mount('#app')
