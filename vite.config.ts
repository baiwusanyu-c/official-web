import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { transformScript } from 'vite-plugin-svg-transform-script'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    transformScript({
      input: './icon/',
      output: './src/utils/',
      name: 'svg-dict',
      type: 'ts',
      format: 'default',
    }),
  ],
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  // base: './',

  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  // outDir: 'dist',
  server: {
    host: 'localhost',
    port: 3010,
    proxy: {
      '/api': {
        target: 'http://localhost:3333/',
        changeOrigin: true,
        ws: true,
        rewrite: pathStr => pathStr.replace('/api', ''),
      },
    },
  },
  // 定义环境变量
  define: {
    __DEV__: `true`,
    __TEST_PROD__: process.env.NODE_ENV === 'staging',
    __PROD__: process.env.NODE_ENV === 'development',
    __PRE_PROD__: process.env.NODE_ENV === 'pretest',
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: ['es2015'],
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
})
