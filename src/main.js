import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import store from './store/index'
import VueApexCharts from 'vue3-apexcharts'

const myApp = createApp(App)
myApp.use(store)
myApp.use(VueApexCharts)
myApp.mount('#app')
