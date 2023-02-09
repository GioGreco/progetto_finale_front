import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/pages/HomePage.vue";
import AdvancedSearchPage from "@/pages/AdvancedSearchPage.vue";
import SingleApartmentPage from "@/pages/SingleApartmentPage.vue";
import NotFound from "@/pages/NotFound.vue";



const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/search',
        name: 'search',
        component: AdvancedSearchPage
    },
    {
        path: '/apartment',
        name: 'apartment',
        component: SingleApartmentPage
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router