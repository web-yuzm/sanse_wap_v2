import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home')
const brand = r => require.ensure([], () => r(require('../pages/brand/brand.vue')), 'brand')
const userIndex = r => require.ensure([], () => r(require('../pages/user/user_index.vue')), 'user')
const userInfo = r => require.ensure([], () => r(require('../pages/user/user_info.vue')), 'user')


export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        redirect: '/home',
        meta: {
            title: '首页'
        }
    }, {
        path: '/home',
        component: home,
        meta: {
            title: '首页'
        }
    }, {
        path: '/brand',
        component: brand,
        meta: {
            title: '品牌'
        }
    }, {
        path: '/user_index',
        component: userIndex,
        meta: {
            title: '会员中心'
        }
    }, {
        path: '/user_info',
        component: userInfo,
        meta: {
            title: '会员中心'
        }
    }]
}]