import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './app/App.vue'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import Card from 'primevue/card'
import './main.css'

const app = createApp(App)
app.use(PrimeVue)
app.component('Card', Card)
app.mount('#app')