import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'notes',
        component: () => import('@/views/ViewNotes.vue')
    },
    {
        path: '/editNote/:id',
        name: 'editNote',
        component: () => import('@/views/ViewEditNote.vue')
    },
    {
        path: '/stats',
        name: 'stats',
        component: () => import('@/views/ViewStats.vue')
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('@/views/ViewAuth.vue')
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router