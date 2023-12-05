import { createRouter, createWebHashHistory } from 'vue-router';

//importar os components que vao ser as pages do router

//import Home from '/src/components/Home.vue';
//import Products from '/src/components/SignUp.vue';
//import Product from '/src/components/Login.vue';
//import Contacts from '/src/components/RecoverPassword.vue';

const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: Home }, // Add the meta property to make it require authentication to access (dealt with below redirecting to login page)
    { path: '/Products', component: Products },
    { path: '/Product/', component: Product },
    { path: '/Contacts', component: Contacts},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;