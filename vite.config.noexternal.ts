import config from './vite.config'
import path from 'path'
export default Object.assign({}, config, {
  ssr: {
    noExternal: /./,
  },
  resolve: {
    // necessary because vue.ssrUtils is only exported on cjs modules
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@vue/runtime-dom',
        replacement: '@vue/runtime-dom/dist/runtime-dom.cjs.js',
      },
      {
        find: '@vue/runtime-core',
        replacement: '@vue/runtime-core/dist/runtime-core.cjs.js',
      },
    ],
  },
  optimizeDeps: {
    exclude: [''],
  },
})
