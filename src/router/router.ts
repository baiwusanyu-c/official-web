import {
  createRouter as _createRouter,
  createWebHistory,
  createMemoryHistory,
  RouteRecordRaw,
} from 'vue-router'
const main = () => import('../views/main.vue')
const security = () => import('../views/service/service-security.vue')
const contracts = () => import('../views/service/service-contract.vue')
const productVass = () => import('../views/product/product-vass.vue')
const productEagle = () => import('../views/product/product-eagle-eye.vue')
const personal = () => import('../views/personal/user-center.vue')
const login = () => import('../views/login/login.vue')
const aboutUs = () => import('../views/about-us/about-us.vue')
const report = () => import('../views/report/report.vue')
const home = () => import('../views/home/home.vue')
const test = () => import('../views/test.vue')
const page404 = () => import('../views/404/404.vue')
const research = () => import('../views/research/research.vue')
const trace = () => import('../views/trace/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    component: main,
    children: [
      {
        path: 'report',
        component: report,
        name: 'report',
      },
      {
        path: '/index/home',
        component: home,
        name: 'home',
      },
      {
        path: '/index/research',
        component: research,
        name: 'research',
      },
      {
        path: '/index/service/trace',
        component: trace,
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
        path: '/index/product/productVaaS',
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
    path: '/test',
    component: test,
    name: 'test',
  },
  {
    path: '/',
    redirect: '/index/home',
  },
  {
    path: '/:w+',
    component: page404,
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const createRouter = () => {
  const router = _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })

  !import.meta.env.SSR &&
    router.afterEach(() => {
      window.scrollTo(0, 0)
    })
  return router
}
