import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    vueJsx(),
  ], /**
     * 在生产中服务时的基本公共路径。
     * @default '/'
     */
    base: './',
    /**
     * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
     * @default 'dist'
     */
    // outDir: 'dist',
    server: {
        // hostname: '0.0.0.0',
        host: "localhost",
        port: 3010,
        // // 是否自动在浏览器打开
        // open: true,
        // // 是否开启 https
        // https: false,
        // // 服务端渲染
        // ssr: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3333/',
                changeOrigin: true,
                ws: true,
                rewrite: (pathStr) => pathStr.replace('/api', '')
            },
        },
    },
    // 定义环境变量
    define: {
        __DEV__: process.env.NODE_ENV == 'production',
        __TEST_PROD__: process.env.NODE_ENV === 'staging',
        __PROD__: process.env.NODE_ENV === 'development',
        __PRE_PROD__: process.env.NODE_ENV === 'pretest'
    },
    resolve: {
        // 导入文件夹别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
            /* views: path.resolve(__dirname, './src/views'),
             components: path.resolve(__dirname, './src/components'),
             utils: path.resolve(__dirname, './src/utils'),
             less: path.resolve(__dirname, "./src/less"),
             assets: path.resolve(__dirname, "./src/assets"),
             com: path.resolve(__dirname, "./src/components"),
             store: path.resolve(__dirname, "./src/store"),
             mixins: path.resolve(__dirname, "./src/mixins")*/
        },
    },
  /*  build: {
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: [  path.resolve( __dirname, 'public/be-ui/be-ui.es.js' ),],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },*/
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    }
})
