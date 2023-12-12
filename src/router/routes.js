import Home from "../pages/Home.vue";

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home //trocar para o nome de cada um dos componentes
    },

    {
        path: '/Products',
        name: 'Products',
        component: Home //trocar para o nome de cada um dos componentes
    },

    {
        path: '/Product/:id',
        name: 'Product',
        component: Home, //trocar para o nome de cada um dos componentes
        props: true
    },

    {
        path: '/Contacts',
        name: 'Contacts',
        component: () => import('../pages/Contact.vue')
    },

]