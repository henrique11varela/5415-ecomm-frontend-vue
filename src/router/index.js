import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes.js'

//importar os components que vao ser as pages do router

//import Home from '/src/components/Home.vue';
//import Products from '/src/components/SignUp.vue';
//import Product from '/src/components/Login.vue';
//import Contacts from '/src/components/RecoverPassword.vue';

const ProductId = {
    // make sure to add a prop named exactly like the route param
    props: ['id'],
    template: '<div>Product {{ id }}</div>',
}

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes,
})

export default router;