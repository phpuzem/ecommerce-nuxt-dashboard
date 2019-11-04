
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
  ],

  proxy: {
    '/api': {
      target: "http://www.boilerplate.test",
      pathRewrite: {
        '^/api': '/api'
      }
    }
  },

  router: {
    middleware: ['auth']
  },


  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'api/auth/login', method: 'post', propertyName: 'meta.accessToken' },
          logout: { url: 'api/auth/logout', method: 'post' },
          user: { url: 'api/auth/me', method: 'get', propertyName: 'data' }
        }
      }
    },
    resetOnError: true // If enabled, user will be automatically logged out if an error happens. (For example when token expired)
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
