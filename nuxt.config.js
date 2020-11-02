export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '个人报告',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vant/lib/index.less',
    '~assets/css/common.css',
    '~assets/font-awesome-4.7.0/css/font-awesome.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '@/plugins/vant-ui', ssr: true},
    '@/plugins/i18n',
    '@/plugins/utils',
    '@/plugins/qs',
    '@/plugins/axios',
    '@/plugins/moment'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)

  axios: {
    credentials: true,
    proxy: true
  },
  proxy: [
    ['/proxy', {
      target: 'http://campus.9451.com',  //api请求路径
      pathRewrite: { '^/proxy' : '/' }  //重定向请求路径，防止路由、api路径的冲突
    }]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['i18n','utils', 'qs', 'axios', 'moment'], //为防止重复打包
  },
  router: {
    middleware: ['middleRouter']
  }
}
