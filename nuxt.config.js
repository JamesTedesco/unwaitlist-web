import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'viewport-fit=cover, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'UVM students, get notified when your class has availability.'
            }
            // { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            // { name: 'theme-color', content: '#008aff' },
            // { name: 'apple-mobile-web-app-title', content: 'proof' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    pwa: {
        manifest: {
            name: 'My Awesome App',
            lang: 'en',
            background_color: "#4DBA87",
            theme_color: "#4DBA87",
            appleStatusBarStyle: 'black-translucent'
        }
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#4DBA87' },
    /*
     ** Global CSS
     */
    css: [
        // CSS file in the project
        '@/assets/main.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    devModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}