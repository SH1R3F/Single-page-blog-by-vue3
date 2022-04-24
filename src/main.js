import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font awesome installation
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight, faBars, faCircle, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faSearch, faTimes, faAngleRight, faAngleLeft, faCircle);

createApp(App)
.component('fa', FontAwesomeIcon)
.use(router)
.mount('#app')
