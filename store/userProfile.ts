export const state = () => ({
  userProfile: undefined,
  orgProfile: undefined
})

export const mutations = {
  SET_USER_PROFILE(state: any, data: any) {
    state.userProfile = data
  },
  SET_ORG_PROFILE(state: any, data: any) {
    state.orgProfile = data
  },
  LOGOUT(state: any) {
    state.userProfile = undefined
    state.orgProfile = undefined
  }
}

export const actions = {
  async fetchProfile({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/users/profile')
      commit('SET_USER_PROFILE', response.data.userProfile)
      commit('SET_ORG_PROFILE', response.data.orgProfile)
    } catch (err) {
      console.log('fetch profile: ' + err)
    }
  },

  async updatePassword({ _commit }: any, { path, data }: any) {
    try {
      const response = await (this as any).$axios.$put(path + '/users/password/update', { data })
      return Promise.resolve(response.status)
    } catch (err) {
      console.log('Update Password: ' + err)
      return Promise.resolve(err)
    }
  },

  async updateProfile({ commit }: any, { path, data }: any) {
    try {
      await (this as any).$axios.$put(path + '/users/profile', { data })
      const newProfile = await (this as any).$axios.$get(path + '/users/profile')
      commit('SET_USER_PROFILE', newProfile.data.userProfile)
      return Promise.resolve('Update Profile Success')
    } catch (err) {
      console.log('Update Password: ' + err)
      return Promise.reject(err)
    }
  }
}

export const getters = {
  getUserProfile: (state: any) => {
    return state.userProfile
  },
  getOrgProfile: (state: any) => {
    return state.orgProfile
  }
}
