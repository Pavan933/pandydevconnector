// for create and manage time table
export const state = () => ({
  masterTimetable: undefined,
  savedTimetables: []
})

export const mutations = {
  SET_MASTER_TIMETABLE(state: any, data: any) {
    state.masterTimetable = data
  },
  SET_SAVED_TIMETABLES(state: any, data: any) {
    state.savedTimetables = data
  },
  ADD_SAVED_TIMETABLE(state: any, data: any) {
    const oldObject = state.savedTimetables.find((timetable: any) => timetable.id === data.id)
    const index = state.savedTimetables.indexOf(oldObject)
    if (index !== -1) state.savedTimetables.splice(index, 1, data)
    else state.savedTimetables.push(data)
  },
  LOGOUT(state: any) {
    state.masterTimetable = undefined
    state.savedTimetables = []
  }
}

export const actions = {
  async fetchMasterTimetable({ commit }: any, path: any) {
    try {
      const timetable = await (this as any).$axios.$get(path + '/timetable/master')
      commit('SET_MASTER_TIMETABLE', timetable.data)
    } catch (err) {
      console.log('fetch master timetable : ' + err)
    }
  },
  async createMasterTimetable({ commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$put(payload.path + '/timetable/master', payload)
      if (response.status === 200) {
        const timetable = await (this as any).$axios.$get(payload.path + '/timetable/master')
        commit('SET_MASTER_TIMETABLE', timetable.data)
        Promise.resolve('Success')
      } else Promise.reject(response)
    } catch (err) {
      console.log('create master timetable : ' + err)
      Promise.reject(err)
    }
  },
  async fetchSavedTimetables({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/timetable/saved')
      commit('SET_SAVED_TIMETABLES', response.data)
    } catch (err) {
      console.log('fetch saved timetable : ' + err)
    }
  },
  async saveTimetable({ commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$put(payload.path + '/timetable/saved', payload)
      if (response.status === 200) {
        commit('ADD_SAVED_TIMETABLE', response.data)
        Promise.resolve('Success')
      } else {
        Promise.reject(response)
      }
    } catch (err) {
      console.log('save timetable : ' + err)
    }
  },
  async publishTimetable({ _commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$put(payload.path + '/timetable/published', payload)
      if (response.status === 200) {
        Promise.resolve('Publish Success')
      } else {
        Promise.reject(response)
      }
    } catch (err) {
      console.log('publish timetable : ' + err)
      Promise.reject(err)
    }
  },
  async publishAllTimetable({ _commit }: any, payload: any) {
    try {
      // use savedTimetable state as payload
      const response = await (this as any).$axios.$post(payload.path + '/timetable/published', payload)
      if (response.status === 200) {
        Promise.resolve('Publish Success')
      } else {
        Promise.reject(response)
      }
    } catch (err) {
      console.log('publish timetable : ' + err)
      Promise.reject(err)
    }
  }
}

export const getters = {
  getClassList: (state: any) => {
    return state.masterTimetable ? state.masterTimetable.classList : state.masterTimetable
  },
  getSavedTimeTable: (state: any) => (classNsection: any) => {
    return state.savedTimetables.find((timetable: any) => timetable.classNsection === classNsection)
  }
}
