import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue';
import MealsByLetter from '../views/MealsByLetter.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/letter/:letter",
        name: "byLetter",
        component: MealsByLetter
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;