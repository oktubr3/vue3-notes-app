import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'notes',
    component: () => import('@/views/VueNotes.vue')
},
{
    path: '/stats',
    name: 'stats',
    component: () => import('@/views/VueStats.vue')
}
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router