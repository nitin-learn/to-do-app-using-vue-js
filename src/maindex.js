import './assets/main.css'
import appdex from './components/appdex.vue';

// const app = Vue.createApp({
//     template: `
//         <input type="text" v-model="value">
//         <h1>{{ value }}</h1>
//     `,
//     data() {
//         return {
//             value: ''
//         }
//     },

// })

const app = Vue.createApp(appdex)


// app.component(sampledex)

app.mount('#app')



