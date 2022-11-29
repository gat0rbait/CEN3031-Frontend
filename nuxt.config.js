export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'projectName',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/tasks',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  auth: {
    redirect: {
      login: '/login',
      logout: false,
      callback: '/login',
      home: false //login page redirects manually
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: process.env.API_URL + 'users/login',
            method: 'post',
            propertyName: "auth.accessToken"
          },
          forgotPassword: {
            url: process.env.API_URL + 'users/forgot',
            method: 'post',
          },
          resetPassword: {
            url: process.env.API_URL + 'users/reset',
            method: 'post',
          },
          userInfo: { 
            url: process.env.API_URL + 'users', 
            method: 'get'
          },
          businessInfo: { 
            url: process.env.API_URL + 'business', 
            method: 'get'
          },
          taskInfo: {
            url: process.env.API_URL + 'tasks',
          },
          announcementInfo: {
            url: process.env.API_URL + 'announcements',
          },
          commentInfo: {
            url: process.env.API_URL + 'comments',
          },
          portalInfo: { 
            url: process.env.API_URL + 'business/portal', 
            method: 'post'
          },
          invoiceInfo: { 
            url: process.env.API_URL + 'business/bills', 
            method: 'get'
          },
          logout: false,
          user: false
        },
        // tokenRequired: false,
        // tokenType: false
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
