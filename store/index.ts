// root store
// can be used to store global variables here
export const state = () => ({
  path: undefined,
  role: undefined,
  access: {
    STUDENT: { schoolSettings: false, chat: { disabled: true, show: true } },
    TEACHER: { schoolSettings: false },
    SCHOOL_ADMIN: { schoolSettings: false, chat: { disabled: true, show: true } },
    SUPER_ADMIN: { schoolSettings: true, chat: { disabled: true, show: true } },
    SITE_ADMIN: { schoolSettings: true }
  }
})

export const mutations = {
  SET_PATH(state: any, data: any) {
    state.path = data
  },
  SET_ROLE(state: any, role: any) {
    state.role = role
  },
  LOGOUT(state: any) {
    state.path = undefined
    state.role = undefined
  }
}

export const actions = {
  async fetchRole({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/users/role')
      if (response.status === 200) {
        commit('SET_ROLE', response.data.role)
        Promise.resolve('success')
      } else Promise.reject(response.message)
    } catch (err) {
      console.log('fetch role: ' + err)
      Promise.reject(err)
    }
  }
}

export const getters = {
  getPath: (state: any) => {
    return state.path
  },
  getRole: (state: any) => {
    return state.access[state.role]
  }
}
