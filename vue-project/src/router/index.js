import { createRouter, createWebHistory } from "vue-router";

import PageHome from "@/pages/index.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: PageHome,
    },
    {
        path: "/contacts",
        name: "contacts",
        component: () => import("@/pages/contacts.vue"),
    },
    {
        path: "/rules",
        name: "rules",
        component: () => import("@/pages/rules.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;