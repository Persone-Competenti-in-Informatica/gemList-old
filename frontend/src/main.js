import { createApp } from 'vue'
import { createStore } from 'vuex'

import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('./components/Home.vue') },
    { path: '/game/:id', component: () => import('./components/Game.vue') },

//     TODO: change the path to the correct components
    { path: '/explore', component: () => import('./components/PageNotFound.vue') },
    { path: '/calendar', component: () => import('./components/PageNotFound.vue') },
    { path: '/library', component: () => import('./components/PageNotFound.vue') },
    { path: '/community', component: () => import('./components/PageNotFound.vue') },
    { path: '/friends', component: () => import('./components/PageNotFound.vue') },

    { path: '/login', component: () => import('./components/PageNotFound.vue') },
    { path: '/register', component: () => import('./components/PageNotFound.vue') },
    { path: '/profile', component: () => import('./components/PageNotFound.vue') },

    { path: '/:pathMatch(.*)*', component: () => import('./components/PageNotFound.vue') },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const store = createStore({
    state() {
        return {
            // only the username and avatar are stored because all the other stuff page related
            // like the games and the user's friends are loaded from the server when the page is loaded
            user: {
                username: '',
                avatar: ''
            }
        }
    },
    mutations: {
        setUser(state, userdata) {
            state.user = userdata
        },
    },
    actions: {
        setUser(context, userdata) {
            context.commit('setUser', userdata)
        },
    }
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
