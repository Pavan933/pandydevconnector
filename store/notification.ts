export const state = () => ({
  notifications: [],
  announcements: []
})

export const mutations = {
  SET_NOTIFICATIONS(state: any, data: any) {
    state.notifications = data
    state.notifications.reverse()
  },
  SET_ANNOUNCEMENTS(state: any, data: any) {
    state.announcements = data
    state.announcements.reverse()
  },
  ADD_ANNOUNCEMENT(state: any, data: any) {
    state.announcements.unshift(data)
  },
  LOGOUT(state: any) {
    state.notifications = []
    state.announcements = []
  }
}

export const actions = {
  async sendAnnouncement({ commit }: any, payload: any) {
    try {
      let headers = {}
      if (payload.file) {
        headers = {
          'Content-Type': 'multipart/form-data'
        }
      }
      const response = await (this as any).$axios.$post(payload.path + '/notificationschedule', payload, headers)
      if (response.status === 200) {
        commit('ADD_ANNOUNCEMENT', response.data)
        Promise.resolve(response.status)
      } else Promise.reject(response.status)
    } catch (err) {
      console.log('send announcement : ' + err)
      Promise.reject(err)
    }
  },
  // fetch notification schedules
  async fetchAnnouncements({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/notificationschedule')
      if (response.status === 200) {
        commit('SET_ANNOUNCEMENTS', response.data)
      }
    } catch (err) {
      console.log('fetch announcements : ' + err)
    }
  },
  // fetch notifications received
  async fetchNotifications({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/notifications')
      if (response.status === 200) {
        commit('SET_NOTIFICATIONS', response.data)
      }
    } catch (err) {
      console.log('fetch notifications : ' + err)
    }
  }
}

export const getters = {}
