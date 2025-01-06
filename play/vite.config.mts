import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { LimoUIResolver } from './resolever/limo-ui'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import glob from 'fast-glob'
import VueMacros from 'unplugin-vue-macros/vite'
import {
  epPackage,
  epRoot,
  getPackageDependencies,
  pkgRoot,
  projRoot,
} from '@limo-ui/build-utils'

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  let { dependencies } = getPackageDependencies(epPackage)
  dependencies = dependencies.filter((dep) => !dep.startsWith('@types/')) // exclude dts deps
  const optimizeDeps = await glob(['dayjs/(locale|plugin)/*.js'], {
    cwd: path.resolve(projRoot, 'node_modules'),
  })

  return {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "/styles/custom.scss" as *;`,
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    resolve: {
      alias: [
        {
          find: /^limo-ui(\/(es|lib))?$/,
          replacement: path.resolve(epRoot, 'index.ts'),
        },
        {
          find: /^limo-ui\/(es|lib)\/(.*)$/,
          replacement: `${pkgRoot}/$2`,
        },
      ],
    },
    server: {
      port: 3000,
      host: true,
      https: !!env.HTTPS ? {} : false,
    },
    build: {
      sourcemap: true,
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue(),
          vueJsx: vueJsx(),
        },
      }),
      Components({
        include: `${__dirname}/**`,
        resolvers: LimoUIResolver({
          importStyle: 'sass', // 自动导入 CSS 样式
        }),
        dts: false,
      }),
      mkcert(),
      Inspect(),
    ],

    optimizeDeps: {
      include: ['vue', '@vue/shared', ...dependencies, ...optimizeDeps],
    },
    esbuild: {
      target: 'chrome64',
    },
  }
})
