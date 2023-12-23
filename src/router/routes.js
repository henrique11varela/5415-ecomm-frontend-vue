import Home from "../pages/Home.vue";

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/Products',
        name: 'Products',
        component: () => import('../pages/Products.vue')
    },

    {
        path: '/Product/:id',
        name: 'Product',
        component: () => import('../pages/ProductDetails.vue')
    },

    {
        path: '/Contacts',
        name: 'Contacts',
        component: () => import('../pages/Contact.vue')
    },

]