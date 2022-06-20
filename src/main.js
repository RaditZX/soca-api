import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import App from './App.vue'
import socaai from './pages/socaai.vue'
import overview from './pages/overview.vue'
import start from './pages/started.vue'
import changelogs from './pages/changelog.vue'
import legaldocument from './pages/legaldocument.vue'
import terms from './pages/terms.vue'
import privacy from './pages/privacy.vue'
import cookie from './pages/cookie.vue'
import security from './pages/security.vue'
import socarupa from './pages/socarupa.vue'
import socaganita from './pages/socaganita.vue'
import face from './pages/face.vue'
import aicounter from './pages/Aicounter.vue'
import tanalytics from './pages/Tanalytics.vue'
import ProctoringAI from './pages/ProctoringAI/ProctoringAI.vue'
import facerecognation from './pages/ProctoringAI/Face-recognation.vue'
import proctoring from './pages/ProctoringAI/proctoring.vue'
import object from './pages/ProctoringAI/object-recognation.vue'
import movement from './pages/ProctoringAI/Movement-detection.vue'





const routes = [
    { path: '/', component: socaai },
    { path: '/overview', component: overview },
    { path: '/started', component: start },
    { path: '/changelogs', component: changelogs },
    { path: '/legaldocument', component: legaldocument },
    { path: '/legaldocument/terms', component: terms },
    { path: '/legaldocument/privacy-policy', component: privacy },
    { path: '/legaldocument/cookies-policy', component: cookie },
    { path: '/legaldocument/security-policy', component: security },
    { path: '/socarupa', component: socarupa },
    { path: '/socaganita', component: socaganita },
    { path: '/face-authentication', component: face },
    { path: '/AI-counter', component: aicounter },
    { path: '/Text-analytics', component: tanalytics },
    { path: '/Proctoring-AI', component: ProctoringAI },
    { path: '/Proctoring-AI/face-recognation', component: facerecognation },
    { path: '/Proctoring-AI/proctoring', component: proctoring },
    { path: '/Proctoring-AI/object-recognation', component: object },
    { path: '/Proctoring-AI/movement-detection', component: movement },


]

const Router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})


createApp(App).use(Router).use(BootstrapIconsPlugin).mount('#app')
