import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTicket, faPaperPlane, faBars,faTachometerAlt, faCube,faUserPlus, faChevronDown ,faPlus} from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './services/interceptors'


library.add(faTicket,faPaperPlane, faBars,faTachometerAlt,faCube,faUserPlus,faChevronDown,faPlus)
const pinia = createPinia()



createApp(App).
component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(Toast)
.use(pinia)
.mount('#app')
