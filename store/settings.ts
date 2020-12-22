// school settings
export const state = () => ({
  schoolRequests: [],
  schoolAccounts: [],
  editRequest: {},
  editAccount: {}
})

export const mutations = {
  SET_SCHOOL_REQUESTS(state: any, data: any) {
    state.schoolRequests = data
  },
  SET_EDIT_REQUEST(state: any, data: any) {
    state.editRequest = data
  },
  SET_SCHOOL_ACCOUNTS(state: any, data: any) {
    state.schoolAccounts = data
  },
  SET_EDIT_ACCOUNT(state: any, data: any) {
    state.editAccount = data
  },
  LOGOUT(state: any) {
    state.schoolRequests = []
    state.schoolAccounts = []
  }
}

export const actions = {
  async fetchSchoolRequests({ commit }: any) {
    try {
      const response = await (this as any).$axios.$get('master/schoolrequests')
      commit('SET_SCHOOL_REQUESTS', response.data)
    } catch (err) {
      console.log('fetch school requests: ' + err)
    }
  },
  // for one school
  async fetchSchoolRequest({ commit, getters }: any, id: any) {
    try {
      const school = getters.findSchoolRequest(id)
      if (school) {
        commit('SET_EDIT_REQUEST', school)
      } else {
        const response = await (this as any).$axios.$get('master/schoolrequests/' + id)
        commit('SET_EDIT_REQUEST', response.data)
      }
    } catch (err) {
      console.log('fetch school request: ' + err)
    }
  },
  async fetchSchoolAccounts({ commit }: any) {
    try {
      const response = await (this as any).$axios.$get('master/schooldbs')
      commit('SET_SCHOOL_ACCOUNTS', response.data)
    } catch (err) {
      console.log('fetch school accounts: ' + err)
    }
  },
  // for one school
  async fetchSchoolAccount({ commit, getters }: any, id: any) {
    try {
      const school = getters.findSchoolAccount(id)
      if (school) {
        commit('SET_EDIT_ACCOUNT', school)
      } else {
        const response = await (this as any).$axios.$get('master/schooldbs/' + id)
        commit('SET_EDIT_ACCOUNT', response.data)
      }
    } catch (err) {
      console.log('fetch school account: ' + err)
    }
  },
  // approve school request or add new school
  async approveSchoolRequest({ _commit }: any, payload: any) {
    try {
      await (this as any).$axios.$post('master/schooldbs', payload)
    } catch (err) {
      console.log('fetch school request: ' + err)
    }
  },

  async updateSchoolAccount({ _commit }: any, payload: any) {
    try {
      await (this as any).$axios.$put('master/schooldbs/' + payload.id, payload)
    } catch (err) {
      console.log('update school accounts: ' + err)
    }
  },
  async deleteSchoolAccount({ _commit }: any, id: any) {
    try {
      await (this as any).$axios.$delete('master/schooldbs/' + id)
    } catch (err) {
      console.log('delete school account: ' + err)
    }
  },
  async rejectSchoolRequest({ _commit }: any, id: any) {
    try {
      await (this as any).$axios.$delete('master/schoolrequests/' + id)
    } catch (err) {
      console.log('delete school request: ' + err)
    }
  }
}

export const getters = {
  getSchoolRequests: (state: any) => {
    return state.schoolRequests
  },

  findSchoolRequest: (state: any) => (id: any) => {
    return state.schoolRequests.find((request: any) => request.id === id)
  },
  getSchoolAccounts: (state: any) => {
    return state.schoolAccounts
  },
  findSchoolAccount: (state: any) => (id: any) => {
    return state.schoolAccounts.find((request: any) => request.id === id)
  }
}
