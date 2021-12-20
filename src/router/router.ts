import {createRouter, createWebHashHistory} from 'vue-router'
import main from '../views/main.vue'
import security from '../views/service/service-security.vue'
import contracts from '../views/service/service-contract.vue'
import productVass from '../views/product/product-vass.vue'
import productEagle from '../views/product/product-eagle-eye.vue'
import personal from '../views/personal/user-center.vue'
import login from '../views/login/login.vue'
import aboutUs from '../views/about-us/about-us.vue'
import report from '../views/report/report.vue'
import home from '../views/home/home.vue'
const routes = [
    {
        path: '/index',
        component: main,
        children: [
            {
                path: '/index/home',
                component: home,
                name: 'home',
            },
            {
                path: '/index/service/contracts',
                component: contracts,
                name: 'contracts',
            },
            {
                path: '/index/service/security',
                component: security,
                name: 'security',
            },
            {
                path: '/index/product/productVass',
                component: productVass,
                name: 'productVass',
            },
            {
                path: '/index/product/productEagle',
                component: productEagle,
                name: 'productEagle',
            },
            {
                path: '/index/user/personal',
                component: personal,
                name: 'personal',
            },
            {
                path: '/index/aboutUs',
                component: aboutUs,
                name: 'aboutUs',
            },
        ],
    },
    {
        path: '/login',
        component: login,
        name: 'login',
    },
    {
        path: '/report',
        component: report,
        name: 'report',
    },
    {
        path: '/',
        redirect: '/index/home'
    }

]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
router.afterEach((to, from) => {
    window.scrollTo(0,0);
})