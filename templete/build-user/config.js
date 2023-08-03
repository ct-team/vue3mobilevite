// eslint-disable-next-line no-undef
module.exports = {
  appVersion: '1.0.0', // 项目版本
  appUrl: '/static/vitetest/', // 项目路径  如   /static/mobile/test/
  envConfig: {
    development: {
      domainUrl: '',
      indexPath: ''
    },
    stable: {
      domainUrl: '//static.tcy365.org:1505',
      indexPath: '1505-stable'
    },
    dev: {
      domainUrl: '//static.tcy365.org:1506',
      indexPath: '1506-develop'
    },
    ctest: {
      domainUrl: '//static.tcy365.org:1507',
      indexPath: '1507-test'
    },
    pre: {
      domainUrl: '//static.tcy365.com:2505',
      indexPath: '2505-pre'
    },
    production: {
      domainUrl: '//static.tcy365.com',
      indexPath: '80-static'
    }
  },
  px2rem: {
    rootValue: 100, // 换算的基数
    selectorBlackList: ['van-'], // 忽略转换正则匹配项 ['van-']
    propList: ['*'],
    unitPrecision: 6,
    mediaQuery: true,
    replace: true,
    exclude: /node_modules/
  },
  devServer: {
    //host: 'localhost',
    //disableHostCheck: true,
    port: 1507, // 端口号
    open: '/',
    // 配置多个代理
    proxy: {
      '/api': {
        target: 'http://yapi.tcy365.org:3000/mock/1554/', // 本地模拟数据服务器
        changeOrigin: true
        //logLevel: 'debug', //是否输出请求log
      }
    }
  }
};

// export default config
