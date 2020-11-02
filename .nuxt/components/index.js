export { default as AppLoading } from '../../components/AppLoading.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyAppLoading = import('../../components/AppLoading.vue' /* webpackChunkName: "components/AppLoading" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
