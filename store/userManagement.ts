export const state = () => ({
  students: [],
  teachers: [],
  staff: [],
  admins: [],
  editUser: {}
})

export const mutations = {
  SET_STUDENTS(state: any, data: any) {
    state.students = data
  },
  SET_TEACHERS(state: any, data: any) {
    state.teachers = data
  },
  SET_STAFF(state: any, data: any) {
    state.staff = data
  },
  SET_ADMINS(state: any, data: any) {
    state.admins = data
  },
  ADD_USER(state: any, data: any) {
    if (data.role === 'STUDENT') {
      state.students.push(data)
    }
    if (data.role === 'TEACHER') {
      state.teachers.push(data)
    }
    if (data.role === 'SCHOOL_ADMIN') {
      state.admins.push(data)
    }
  },
  UPDATE_USER(state: any, payload: any) {
    if (payload.data.role === 'STUDENT') {
      const oldStudent = state.students.find((student: any) => student.id === payload.id)
      const index = state.students.indexOf(oldStudent)
      state.students.splice(index, 1, payload.data)
    }
    if (payload.data.role === 'TEACHER') {
      const oldTeacher = state.teachers.find((teacher: any) => teacher.id === payload.id)
      const index = state.teachers.indexOf(oldTeacher)
      state.teachers.splice(index, 1, payload.data)
    }
    if (payload.data.role === 'SCHOOL_ADMIN') {
      const oldAdmin = state.admins.find((admin: any) => admin.id === payload.id)
      const index = state.admins.indexOf(oldAdmin)
      state.admins.splice(index, 1, payload.data)
    }
  },
  DELETE_USER(state: any, payload: any) {
    if (payload.data.role === 'STUDENT') {
      const oldStudent = state.students.find((student: any) => student.id === payload.id)
      const index = state.students.indexOf(oldStudent)
      state.students.splice(index, 1)
    }
    if (payload.data.role === 'TEACHER') {
      const oldTeacher = state.teachers.find((teacher: any) => teacher.id === payload.id)
      const index = state.teachers.indexOf(oldTeacher)
      state.teachers.splice(index, 1)
    }
    if (payload.data.role === 'SCHOOL_ADMIN') {
      const oldAdmin = state.admins.find((admin: any) => admin.id === payload.id)
      const index = state.admins.indexOf(oldAdmin)
      state.admins.splice(index, 1)
    }
  },

  LOGOUT(state: any) {
    state.students = []
    state.teachers = []
    state.staff = []
    state.admins = []
    state.editUser = {}
  }
}

export const actions = {
  // import teacher/student

  async importUsers({ _commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$post(payload.path + '/users/import', payload)
      if (response.status === 200) return Promise.resolve(response.status)
      return Promise.reject(response.data)
    } catch (err) {
      console.log('import school users: ' + err)
      return Promise.reject(err)
    }
  },
  // add admin,teacher,student
  async addUser({ commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$post(payload.path + '/users', payload)
      if (response.status === 200) commit('ADD_USER', response.data)
      return Promise.resolve(response.status)
    } catch (err) {
      console.log('fetch school users: ' + err)
      return Promise.reject(err)
    }
  },

  async updateUser({ commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$put(payload.path + '/users/' + payload.id, payload)
      if (response.status === 200) commit('UPDATE_USER', payload)
      return Promise.resolve(response.status)
    } catch (err) {
      console.log('update school user: ' + err)
      return Promise.reject(err)
    }
  },
  async deleteUser({ commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$delete(payload.path + '/users/' + payload.id)
      if (response.status === 200) commit('DELETE_USER', payload)
      return Promise.resolve(response.status)
    } catch (err) {
      console.log('delete user: ' + err)
      return Promise.reject(err)
    }
  },
  async deleteUsersBulk({ commit }: any, payload: any) {
    try {
      const response = await (this as any).$axios.$delete(payload.path + '/users/all', payload)
      console.log(JSON.stringify(response))
      if (response.status === 200) {
        payload.data.forEach((element: any) => {
          const data = { id: element, role: payload.role }
          commit('DELETE_USER', { data })
        })
      }
      return Promise.resolve(response.status)
    } catch (err) {
      console.log('delete users bulk: ' + err)
      return Promise.reject(err)
    }
  },
  async fetchAllUsers({ commit }: any, path: any) {
    try {
      const studentPromise = (this as any).$axios.$get(path + '/users?role=STUDENT')
      const teacherPromise = (this as any).$axios.$get(path + '/users?role=TEACHER')
      const adminPromise = (this as any).$axios.$get(path + '/users?role=SCHOOL_ADMIN')
      const response = await Promise.all([studentPromise, teacherPromise, adminPromise])
      if (response && response.length >= 3) {
        commit('SET_STUDENTS', response[0].data)
        commit('SET_TEACHERS', response[1].data)
        commit('SET_ADMINS', response[2].data)
      }
    } catch (err) {
      console.log('fetch school accounts: ' + err)
    }
  },
  async fetchStudents({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/users?role=STUDENT')
      if (response.status === 200) {
        commit('SET_STUDENTS', response.data)
      }
    } catch (err) {
      console.log('fetch school students: ' + err)
    }
  },
  async fetchTeachers({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/users?role=TEACHER')
      if (response.status === 200) {
        commit('SET_TEACHERS', response.data)
      }
    } catch (err) {
      console.log('fetch school teachers: ' + err)
    }
  },
  async fetchAdmins({ commit }: any, path: any) {
    try {
      const response = await (this as any).$axios.$get(path + '/users?role=SCHOOL_ADMIN')
      if (response.status === 200) {
        commit('SET_ADMINS', response.data)
      }
    } catch (err) {
      console.log('fetch school admins: ' + err)
    }
  }
}

export const getters = {
  getTeacherList: (state: any) => {
    if (state.teachers && state.teachers.length) {
      const teacherList: any = []
      state.teachers.forEach((teacher: any) => {
        const teacherObj = { name: teacher.fName + ' ' + teacher.lName, id: teacher.id }
        teacherList.push(teacherObj)
      })
      return teacherList
    }
    return state.teachers
  }
}
