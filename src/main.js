import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import overview from './pages/overview.vue'
import start from './pages/started.vue'




const routes = [
    { path: '/', component: overview },
    { path: '/overview', component: overview },
    { path: '/started', component: start },


]

const Router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(Router).mount('#app')
