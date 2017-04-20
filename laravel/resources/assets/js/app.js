import Vue from 'vue';

import VueRouter from 'vue-router';
import Axios from 'axios';
Vue.use(VueRouter);
import Homepage from './components/Homepage.vue';
import Navigation from './components/Navigation.vue';
import Music from './components/Music.vue';
import { Relevancy } from './relevancy-tracking.js';


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
window.Relevancy = new Relevancy();

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '',
            component: Homepage
        },
        {
            path: '/music',
            component: Music,
        }
    ]
});

new Vue({
    components: {
        Navigation
    },
    router,
    template: `
   <div id="app">
     <navigation></navigation>
     
      <transition name="bounce" mode="out-in">
            <router-view id="page" class="view"></router-view> 
     </transition>
   </div>
 `
}).$mount('#app');

