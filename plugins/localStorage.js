import createPersistedstate from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedstate({})(store)
  })
}
