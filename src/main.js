import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'


import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App).use(store)
app.use(VueAxios, axios)
app.use(BootstrapVue3)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')
