import Cart from './components/cart/cart.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home/home.vue';

const routes = [
    {path: '/', component: Home},
    {path: '/cart', component: Cart},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;