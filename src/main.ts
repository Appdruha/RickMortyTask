import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './app/App.vue'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import Card from 'primevue/card'
import Paginator from 'primevue/paginator'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import Dropdown from 'primevue/dropdown';
import './main.css'

const app = createApp(App)
app.use(PrimeVue)
app.component('Card', Card)
app.component('Paginator', Paginator)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('FloatLabel', FloatLabel)
app.component('Dropdown', Dropdown)
app.mount('#app')