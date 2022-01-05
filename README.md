<p align="center">
  <img width="144px" src="https://lianantech.com/commonImg/mail/hermit-logo.png" />
</p>

#hermit-front 新加坡官網
##主要技術依賴  
**Vue3.2 + Vue-router4 + Vite2.x + typeScript4.5**

|  名称   |  版本   | 説明  |
|  ---- |  ----  | ----  |
|  Vue |  ^2.2.3  | 前端開發框架  |  
|  axios |  ^0.24.0  | Ajax封裝庫  |
|  vite |  ^2.2.3  | 工程化開發打包框架  |
|  vue-router |  4  | vue3.x 路由  |
|  vue-i18n |  ^9.2.0-beta.23  | vue3.x 國際化插件  |
|  @vueuse/core |  ^7.3.0  | vue3.x 的composition Api 方法庫  |
|  animate.css |  ^4.1.1  | 動畫庫  |
|  swiper | ^7.3.2  | 走馬燈插件  |
|  tailwind.css | npm:@tailwindcss/postcss7-compat  | css原子化樣式庫  |
|  naive-ui |  ^2.22.0  | UI組件庫  |
|  be-ui |  -  | 内部UI組件庫  |
##package指令

`"serve:dev": "vite --host --mode development",`  
**以開發環境後臺運行項目**  

`"serve:stage": "vite --host --mode staging",`  
**以測試環境後臺運行項目**  

`"serve:pretest": "vite --host --mode pretest",`  
**以預發佈環境後臺運行項目**  

`"serve:prod": "vite --host --mode production",`  
**以正式發佈環境後臺運行項目**  

`"build:dev": "vite build --mode development",`  
**以開發環境後臺打包項目**

`"build:stage": "vite build --mode staging",`  
**以測試環境後臺打包項目**

`"build:prod": "vite build --mode production",`  
**以預發佈環境後臺打包項目**

`"build:pretest": "vite build --mode pretest",`  
**以正式發佈環境後臺打包項目**  

`"lint:style": "stylelint src/**/*.{html,vue,css}",`  
**styleLint校驗**  

`"lint:style-fix": "stylelint --fix src/**/*.{html,vue,css}"`  
**styleLint樣式代碼修復**  

## 目錄結構
* node_modules  項目依賴
* public 公共文件
* src 
  api  Api封裝

  assets  存放静态文件

  components 存放公用组件

  config  环境配置枚舉，包含後臺幾口，第三方鏈接  

  router  路由

  utils  配置与公共方法  

  views  页面  

  App.vue 入口vue文件

  main.ts  入口ts

* .gitignore 指定文件无需提交到git上

* package.json 项目描述及依赖

* package-lock.json 版本管理使用的文件

* vite.config.ts vite配置文件

### 火狐浏览器兼容汇总
* 登录页需要兼容  √
* 产品页与about us 过长 （偶现）
### Safari浏览器兼容汇总