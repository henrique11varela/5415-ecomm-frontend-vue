import { createRouter, createWebHashHistory } from 'vue-router';

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

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home //trocar para o nome de cada um dos componentes
    },

    {
        path: '/Products',
        name: 'Products',
        component: Products //trocar para o nome de cada um dos componentes
    },

    {
        path: '/Product/:id',
        name: 'Product',
        component: Product, //trocar para o nome de cada um dos componentes
        props: true
    },

    {
        path: '/Contacts',
        name: 'Contacts',
        component: Contacts //trocar para o nome de cada um dos componentes
    },
]

router.beforeEach((to, from, next) => {
    // Check if the animation has already played
    const animationPlayed = localStorage.getItem('animationPlayed');

    // If the animation hasn't played, play it and set the flag
    if (!animationPlayed && to.path === '/') {

        //add on the homepage component (verify if animation has been played, if not play it)
        //mounted() {
        //     // Check if the animation has already played
        //     const animationPlayed = localStorage.getItem('animationPlayed');
        //
        //     // Update the local data property accordingly
        //     this.animationPlayed = animationPlayed === 'true';
        //   },

        // Set the flag in localStorage to indicate that the animation has played
        localStorage.setItem('animationPlayed', 'true');
    }

    next();
});

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes,
})

export default router;