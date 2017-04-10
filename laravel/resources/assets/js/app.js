import Vue from 'vue';

import VueRouter from 'vue-router';
import Homepage from './components/homepage.vue';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '',
            component: Homepage
        },
    ]
});

router.afterEach((to, from) => {
    console.log(to);
});

new Vue({
    components: {
        Navigation, PageFooter
    },
    router,
    template: `
   <main id="app">
     <navigation></navigation>
      <transition name="bounce" mode="out-in">
       <router-view id="page" class="view"></router-view>
     </transition>
     <page-footer></page-footer>
   </main>
 `
}).$mount('#app');