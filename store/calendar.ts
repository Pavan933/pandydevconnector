// holidays and class schedules here

export const state = () => ({
  holidays: [],
  schedules: []
})

export const mutations = {
  SET_SCHEDULES(state: any, data: any) {
    state.schedules = data
  },
  SET_HOLIDAYS(state: any, data: any) {
    state.holidays = data
  },
  ADD_HOLIDAY(state: any, data: any) {
    state.holidays.push(data)
  },
  REMOVE_HOLIDAY(state: any, id: any) {
    const holidayObj = state.holidays.find((holiday: any) => holiday.id === id)
    const index = state.holidays.indexOf(holidayObj)
    state.holidays.splice(index, 1)
  },
  LOGOUT(state: any) {
    state.holidays = []
    state.schedules = []
  }
}

export const actions = {
  async fetchSchedules({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/schedule')
      if (response.status === 200) commit('SET_SCHEDULES', response.data)
    } catch (err) {
      console.log('fetch holidays : ' + err)
    }
  },
  async fetchHolidays({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/holidays')
      commit('SET_HOLIDAYS', response.data)
    } catch (err) {
      console.log('fetch holidays : ' + err)
    }
  },
  async addHoliday({ commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$post(payload.path + '/holidays', payload)
      if (response.status === 200) {
        const holidays = await (this as any).$axios.$get(payload.path + '/holidays')
        commit('SET_HOLIDAYS', holidays.data)
      }
      Promise.resolve()
    } catch (err) {
      console.log('fetch holidays : ' + err)
      Promise.reject(err)
    }
  },
  async removeHoliday({ commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$delete(payload.path + '/holidays/' + payload.id)
      if (response.status === 200) commit('REMOVE_HOLIDAY', payload.id)
    } catch (err) {
      console.log('fetch holidays : ' + err)
    }
  }
}

export const getters = {
  findHoliday: (state: any) => (id: any) => {
    return state.holidays.find((holiday: any) => holiday.id === id)
  }
}
