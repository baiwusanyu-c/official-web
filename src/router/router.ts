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
const resource = () => import('../views/resource/index.vue')
const articleView = () => import('../views/resource/ArticleView/index.vue')
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
        meta: {
          title: 'Beosin Smart Contract Security Audit Service | Code Review and Report',
          keywords:
            'Smart Contract Audit, Formal Verification, Cryptocurrency Recovery,Web3.0 Security, DeFi Code Review',
          description:
            'Beosin is the best Web3 security company providing blockchain audit services for NFT, DeFi, GameFi projects and help you recover stolen or scam cryptocurrency.',
        },
      },
      {
        path: '/index/resource',
        component: resource,
        name: 'research',
        meta: {
          title: 'Blog - Beosin Smart Contract Security Audit Service | Code Review and Report',
          keywords:
            'Resource，Security Incident，Research Report，Event Update，Partnership Announcement， Web3.0 Classroom',
          description:
            'Beosin offers resources like Web 3.0 security incident analysis, research report, event update, partnership and cooperation announcement, and Web 3.0 classroom for users to get full information of Web 3.0.',
        },
      },
      {
        path: '/index/article-preview',
        component: articleView,
        name: 'articleView',
      },
      {
        path: '/index/service/trace',
        component: trace,
        meta: {
          title: 'Crypto Trace - Beosin Cryptocurrency Tracing Service',
          keywords:
            'Cryptocurrency Trace，Asset Recover，Transaction Analysis，Crypto Address Monitoring，Forensics Analysis Report，into Tornado Cash',
          description:
            'Beosin Cryptocurrency Tracing Service provides one-stop on-chain transaction and asset flow analysis with detailed investigation covering transaction behavior analysis, asset flow tracing, address monitoring, forensics reports etc, and provides capabilities to trace stolen assets and mixed coins; assess wallet addresses and transactions security; and monitor suspicious wallet addresses. The product can be used for performing KYT and AML compliance assessments.',
        },
      },
      {
        path: '/index/service/contracts',
        component: contracts,
        name: 'contracts',
        meta: {
          title:
            'Security Audit - Beosin Smart Contract Security Audit Service | Code Review and Report',
          keywords:
            'Smart Contract Audit, Formal Verification,  Audit Report，NFT Contract，DeFi Contracts，GameFi Contract',
          description:
            "Beosin's auditing service supports multiple blockchains. With the help of formal verification tools and manual code audit by security experts, Beosin security audit can identify security vulnerabilities in the source code and ensure consistency between the smart contract code and the business logic it has implemented.",
        },
      },
      {
        path: '/index/service/security',
        component: security,
        name: 'security',
        meta: {
          title:
            'Blockchain Audit - Beosin Smart Contract Security Audit Service | Code Review and Report',
          keywords:
            'Blockchain Platform Security Audit，Code Review，White Box Testing，Grey Box Testing，Black Box Testing',
          description:
            'Beosin Blockchain Platform Audit Service ensures the safe operation of the chain platform by conducting code security audits on the modules of chain platform node communication, storage, consensus and authority management through different security audits such as black box, gray box and white box. This includes language coding security audit, block production and governance audit, account system security audit, asset security audit, application layer security audit, etc.',
        },
      },
      {
        path: '/index/product/productVaaS',
        component: productVass,
        name: 'productVass',
        meta: {
          title:
            'About Vaas - Beosin Smart Contract Security Audit Service | Code Review and Report',
          keywords:
            'Formal Verification, developers，High-accuracy security testing，fuzzy testing，vulnerabilitie，business logic vulnerabilitie',
          description:
            'Beosin VaaS is a SaaS-based smart contract verification tool based on formal verification technology. It can automatically identify known and unknown vulnerabilities and business logic issues in smart contracts and recommend solutions to fix any existing problems.',
        },
      },
      {
        path: '/index/product/productEagle',
        component: productEagle,
        name: 'productEagle',
        meta: {
          title:
            'About Beosin EagleEye - Web3 Security Monitor. Security Assessment, Risk Transactions Identification, and Security Sentiment',
          keywords:
            'web3 security，DAPP security，security score，security assessment，flash loan, rugpull，Identify phishing sites，Identify fake sites，Identify malicious websites',
          description:
            'Beosin EagleEye is a Web 3.0 security service that protects crypto assets 24by7 through multi-dimensional project security assessment, continuous smart contract scanning and assessment, real-time risk transaction identification with behavior analysis, and crypto address monitoring with early warning capabilities.',
        },
      },
      {
        path: '/index/user/personal',
        component: personal,
        name: 'personal',
        meta: {
          title: '',
          keywords: '',
          description: '',
        },
      },
      {
        path: '/index/aboutUs',
        component: aboutUs,
        name: 'aboutUs',
        meta: {
          title: 'About Beosin - Smart Contract Security Audit Service | Code Review and Report',
          keywords: 'About Us，Contact Us，Social Media，Web3.0 Blockchain Ecosystem',
          description:
            'Beosin is a Web3 security company headquartered in Singapore, with 100+ team members and 85% of technical staff. It has over 40 engineers, security researchers, and analysts with Ph.D. and postdoc degrees. Beosin offers a comprehensive suite of security products and services covering smart contract and blockchain security auditing, blockchain transaction monitoring and risk alert, cryptocurrency tracing, and KYT and AML. It has audited over 2,000 smart contracts and over 100 blockchain platforms globally. Its Tracing service has helped investors recover hundreds of millions of stolen cryptos, including those laundered through Tornado Cash.',
        },
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

const setDocumentInformation = (to: RouteRecordRaw) => {
  if (!Object.keys(to.meta || {}).length) return

  document.title = to.meta?.title || ('' as any)
  document
    .querySelector('meta[name="keywords"]')
    ?.setAttribute('content', to.meta?.keywords || ('' as any))
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', to.meta?.description || ('' as any))
}

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const createRouter = () => {
  const router = _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })

  !import.meta.env.SSR &&
    router.afterEach((to: any) => {
      window.scrollTo(0, 0)
      setDocumentInformation(to)
    })
  return router
}
