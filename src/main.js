import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import FastClick from 'fastclick'
import $ from 'jquery'
import './styles/common.css'
import './config/flexible_css.js'
import './config/flexible.js'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.HOST = '/api'


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
})

new Vue({
    router,
    store,
}).$mount('#app')