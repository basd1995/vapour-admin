import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    AutoImport({
      imports: [
        // presets
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      vueTemplate: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      dirs: [
        'src/components',
        'src/pages',
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Icons({
      // experimental
      // compiler: 'vue3',
      autoInstall: true,
    }),
  ],
})
