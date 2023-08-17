import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
const buildConfig = require('./build-user/config');
import { getPages, getBase } from './build-user/tool';
import { visualizer } from 'rollup-plugin-visualizer';
import type { IEnv } from './build-user/tool';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()]
      }),
      vueJsx(),
      visualizer({
        open: false,
        gzipSize: true, // 分析图生成的文件名
        brotliSize: true, // 收集 brotli 大小并将其显示
        filename: 'report.html' // 分析图生成的文件名
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['iOS >= 8', 'Android >= 4.0'],
            grid: true
          }),
          postCssPxToRem(buildConfig.px2rem)
        ]
      }
    },
    envDir: '../../',
    root: 'src/pages', //项目根路径
    base: getBase(env.VITE_ENV as IEnv),
    publicDir: '../../public', //相对于项目根路径root设置
    // 构建
    build: {
      emptyOutDir: true,
      outDir: '../../dist', //相对于项目根路径root设置
      assetsDir: 'assets',
      assetsInlineLimit: 10240, //小于10Kb的资源内联为base64编码
      rollupOptions: {
        input: getPages()
      }
    },
    server: buildConfig.devServer
  };
});
