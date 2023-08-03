const buildConfig = require('./config')
import { globSync } from 'glob'

export type IEnv = 'stable' | 'dev' | 'ctest' | 'pre' | 'production' | 'development'

export const getEnvConfig = (viteEnv: IEnv) => {
  return buildConfig.envConfig[viteEnv as IEnv]
}

// 设置base
export const getBase = (viteEnv: IEnv) => {
  return viteEnv === 'development' ? '/' : getEnvConfig(viteEnv).domainUrl + buildConfig.appUrl
}

interface IPageConfig {
  entry: string //入口文件
  filename: string //指定打包输出的index.html路径
  template: string //模版页面
}
interface IPages {
  [key: string]: string
}
const getMulu = function (filePath: string) {
  const filename1 = filePath.substring(0, filePath.lastIndexOf('\\'))
  const filename2 = filename1.substring(filename1.lastIndexOf('\\') + 1)
  return filename2
}
// 多页配置
export const getPages = () => {
  const pages: IPages = {
    index: 'src/pages/index.html'
  }
  const entryFiles = globSync('src/pages/*/index.html')

  entryFiles.forEach((filePath: string) => {
    const filename = getMulu(filePath)
    pages[filename] = filePath.replace(/\\/g, '/')
  })
  console.log('pages===', pages)
  return pages
}
