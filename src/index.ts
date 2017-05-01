'use strict'

import * as Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Axios from 'axios';

import App from './components/app.vue';
import Home from './components/routes/home.vue';

import State from './store/state';
import mutations from './store/mutations';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home }
    ]
});

const state = new State();
const store = new Vuex.Store({
    state: state,
    mutations: mutations
});

// let api = Axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// });

new Vue({
    router: router,
    store: store,
    el: '#app',
    render: h => h(App)
});