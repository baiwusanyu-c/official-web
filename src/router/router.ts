import {createRouter, createWebHashHistory} from 'vue-router'
import main from '../views/main.vue'
import introduction from '../views/doc/introduction.vue'
import security from '../views/service/service-security.vue'
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
                path: '/index/service/security',
                component: security,
                name: 'security',
            },
        ],
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
