<template>
  <div>
    <!--Child Class-->
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card border-bottom">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center pb-3">
              <div class="wrapper d-flex align-items-center media-info text-facebook">
                <h4 class="card-title float-left">{{ title }} '{{ section }}'</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-icons btn-light d-none d-lg-block"
                    data-toggle="modal"
                    data-target="#clear_one"
                  >
                    <i class="mdi mdi-backspace"></i> Clear
                  </button>
                  <button type="button" class="btn btn-icons btn-light d-none d-lg-block" @click="publishTimetable">
                    <i class="mdi mdi-arrow-right-bold"></i> Publish
                  </button>
                </div>
              </div>
            </div>
            <div class="flow-x">
              <table class="table table-hover table-bordered">
                <tr class="mstr-tt-row-first">
                  <th>Days</th>
                  <th colspan="2">
                    Monday
                    <span
                      ><a
                        href="#"
                        class="actn-btn"
                        data-toggle="modal"
                        data-target="#edit-batch"
                        @click="selectDay(newTimeTable.monday, 'Monday')"
                        ><i class="mdi mdi-pencil"></i></a
                    ></span>
                  </th>
                  <th colspan="2">
                    Tuesday
                    <span
                      ><a
                        href="#"
                        class="actn-btn"
                        data-toggle="modal"
                        data-target="#edit-batch"
                        @click="selectDay(newTimeTable.tuesday, 'Tuesday')"
                        ><i class="mdi mdi-pencil"></i></a
                    ></span>
                  </th>
                  <th colspan="2">
                    Wednessday
                    <span
                      ><a
                        href="#"
                        class="actn-btn"
                        data-toggle="modal"
                        data-target="#edit-batch"
                        @click="selectDay(newTimeTable.wednesday, 'Wednessday')"
                        ><i class="mdi mdi-pencil"></i></a
                    ></span>
                  </th>
                  <th colspan="2">
                    Thursday
                    <span
                      ><a
                        href="#"
                        class="actn-btn"
                        data-toggle="modal"
                        data-target="#edit-batch"
                        @click="selectDay(newTimeTable.thursday, 'Thursday')"
                        ><i class="mdi mdi-pencil"></i></a
                    ></span>
                  </th>
                  <th colspan="2">
                    Friday
                    <span
                      ><a
                        href="#"
                        class="actn-btn"
                        data-toggle="modal"
                        data-target="#edit-batch"
                        @click="selectDay(newTimeTable.friday, 'Friday')"
                        ><i class="mdi mdi-pencil"></i></a
                    ></span>
                  </th>
                  <th colspan="2">
                    Saturday
                    <span
                      ><a
                        href="#"
                        class="actn-btn"
                        data-toggle="modal"
                        data-target="#edit-batch"
                        @click="selectDay(newTimeTable.saturday, 'Saturday')"
                        ><i class="mdi mdi-pencil"></i></a
                    ></span>
                  </th>
                  <th colspan="2">
                    Sunday
                    <span
                      ><a
                        href="#"
                        class="actn-btn"
                        data-toggle="modal"
                        data-target="#edit-batch"
                        @click="selectDay(newTimeTable.sunday, 'Sunday')"
                        ><i class="mdi mdi-pencil"></i></a
                    ></span>
                  </th>
                </tr>
                <tr v-for="(period, index) in masterTT.numOfPeriods" :key="period">
                  <th>Period {{ period }}</th>
                  <td class="cell-subject">
                    {{ newTimeTable.monday[index] ? newTimeTable.monday[index].subject : '' }}
                  </td>
                  <td class="cell-teacher">
                    {{ newTimeTable.monday[index] ? newTimeTable.monday[index].teacher.name : '' }}
                  </td>
                  <td class="cell-subject">
                    {{ newTimeTable.tuesday[index] ? newTimeTable.tuesday[index].subject : '' }}
                  </td>
                  <td class="cell-teacher">
                    {{ newTimeTable.tuesday[index] ? newTimeTable.tuesday[index].teacher.name : '' }}
                  </td>
                  <td class="cell-subject">
                    {{ newTimeTable.wednesday[index] ? newTimeTable.wednesday[index].subject : '' }}
                  </td>
                  <td class="cell-teacher">
                    {{ newTimeTable.wednesday[index] ? newTimeTable.wednesday[index].teacher.name : '' }}
                  </td>
                  <td class="cell-subject">
                    {{ newTimeTable.thursday[index] ? newTimeTable.thursday[index].subject : '' }}
                  </td>
                  <td class="cell-teacher">
                    {{ newTimeTable.thursday[index] ? newTimeTable.thursday[index].teacher.name : '' }}
                  </td>
                  <td class="cell-subject">
                    {{ newTimeTable.friday[index] ? newTimeTable.friday[index].subject : '' }}
                  </td>
                  <td class="cell-teacher">
                    {{ newTimeTable.friday[index] ? newTimeTable.friday[index].teacher.name : '' }}
                  </td>
                  <td class="cell-subject">
                    {{ newTimeTable.saturday[index] ? newTimeTable.saturday[index].subject : '' }}
                  </td>
                  <td class="cell-teacher">
                    {{ newTimeTable.saturday[index] ? newTimeTable.saturday[index].teacher.name : '' }}
                  </td>
                  <td class="cell-subject">
                    {{ newTimeTable.sunday[index] ? newTimeTable.sunday[index].subject : '' }}
                  </td>
                  <td class="cell-teacher">
                    {{ newTimeTable.sunday[index] ? newTimeTable.sunday[index].teacher.name : '' }}
                  </td>
                </tr>
                <tr>
                  <th class="mstr-tt-row-first text-center" colspan="16">Interval</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Class row Field Edit Starts-->
    <div v-if="selectedDay" id="edit-batch" class="modal fade" role="dialog">
      <div class="modal-dialog cstm-modal" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">{{ title }} '{{ section }}' - {{ selectedModalTitle }}</h5>
            <button ref="closeEditDayModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form class="forms-sample" @submit.prevent="saveTimeTable">
            <div class="modal-body modal-bg">
              <div v-for="(period, index) in masterTT.numOfPeriods" :key="period" class="row">
                <div class="col-md-2 label-align-middle">
                  <label class="col-form-label">Period {{ period }}</label>
                </div>
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="classname">Select Subject</label>
                    <v-select v-model="selectedDay[index].subject" :options="masterTT.subjectsSelected"></v-select>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="form-group">
                    <label for="teacher">Select Teacher</label>
                    <v-select v-model="selectedDay[index].teacher" label="name" :options="optionTeachers"></v-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <!-- <button type="submit" class="btn btn-primary mr-2">Validate</button> -->
              <button type="submit" class="btn btn-primary mr-2">Save</button>
              <button class="btn btn-light" data-dismiss="modal">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--Modal Row Field Edit Ends-->

    <!--Modal Clear all Starts-->
    <div id="clear_one" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body modal-bg">
            <form class="forms-sample" @submit.prevent="clearTimeTable">
              <div class="form-group text-center">
                <div class="alert-cst alert-cst--warning">
                  <span class="alert-cst--warning__body">
                    <span class="alert-cst--warning__dot"></span>
                  </span>
                </div>
                <div class="alert-cst-title">Are you sure?</div>
                <div class="alert-cst-text">You won't be able to revert this!</div>
              </div>
              <div class="alert-cst-footer">
                <button type="submit" class="btn btn-danger mr-2">Clear</button>
                <button class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Clear all  End-->
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { mapState, mapGetters } from 'vuex'

Vue.component('v-select', vSelect)
export default {
  props: ['title', 'section', 'forClass'],
  data() {
    return {
      selectedModalTitle: undefined,
      selectedDay: undefined,
      selectedSubject: 'English',
      selectedTeacher: {
        name: 'Mohit Suri',
        id: '5f084ee6875fcb145ca62695'
      },
      // optionTeachers: [
      //   { name: 'Mohit Suri', id: '5f084ee6875fcb145ca62695' },
      //   { name: 'Vijalaxmi H', id: '5f084ee6875fcb145ca62696' },
      //   { name: 'Rahul Sharma', id: '5f084ee6875fcb145ca62697' }
      // ],

      // new class time table
      newTimeTable: {
        forClass: '',
        forSection: '',
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
      }
    }
  },
  computed: {
    ...mapState({
      masterTT: (state) => state.timetable.masterTimetable
    }),
    ...mapGetters({
      savedTimetable: 'timetable/getSavedTimeTable',
      optionTeachers: 'userManagement/getTeacherList'
    })
  },
  watch: {
    masterTT(_val) {
      this.initNewTimetable()
    },
    savedTimetable(_val) {
      this.initNewTimetable()
    }
  },
  mounted() {
    this.initNewTimetable()
  },
  methods: {
    async saveTimeTable() {
      // validate here

      try {
        this.newTimeTable.forClass = this.forClass
        this.newTimeTable.forSection = this.section
        await this.$store.dispatch('timetable/saveTimetable', {
          path: this.$store.getters.getPath,
          data: this.newTimeTable
        })
        this.$refs.closeEditDayModal.click()
        console.log('success')
      } catch (err) {
        console.log(err)
      }
    },
    async publishTimetable() {
      // perform validation here
      try {
        this.newTimeTable.forClass = this.forClass
        this.newTimeTable.forSection = this.section
        const response = await this.$store.dispatch('timetable/publishTimetable', {
          path: this.$store.getters.getPath,
          data: this.newTimeTable
        })
        console.log(response.status)
      } catch (err) {
        console.log(err)
      }
    },
    selectDay(day, title) {
      this.selectedDay = day
      this.selectedModalTitle = title
    },
    initNewTimetable() {
      const savedTimeTable = this.savedTimetable(this.forClass + '_' + this.section)
      if (savedTimeTable) {
        this.newTimeTable = JSON.parse(JSON.stringify(savedTimeTable))
      } else if (this.masterTT && !this.newTimeTable.monday.length) {
        for (let i = 0; i < this.masterTT.numOfPeriods; i++) {
          const EmptyObject = {
            subject: '',
            teacher: { label: '', name: '', id: '' }
          }
          this.newTimeTable.monday.push(JSON.parse(JSON.stringify(EmptyObject)))
          this.newTimeTable.tuesday.push(JSON.parse(JSON.stringify(EmptyObject)))
          this.newTimeTable.wednesday.push(JSON.parse(JSON.stringify(EmptyObject)))
          this.newTimeTable.thursday.push(JSON.parse(JSON.stringify(EmptyObject)))
          this.newTimeTable.friday.push(JSON.parse(JSON.stringify(EmptyObject)))
          this.newTimeTable.saturday.push(JSON.parse(JSON.stringify(EmptyObject)))
          this.newTimeTable.sunday.push(JSON.parse(JSON.stringify(EmptyObject)))
        }
      }
    },

    clearTimeTable() {}
  }
}
</script>

<style scoped>
.table td:last-child {
  border-right: 2px solid;
}
.table {
  border: 2px solid;
}
.table td.cell-teacher {
  border-right: 2px solid;
}
.table td.cell-subject {
  border-left: 2px solid;
}
</style>
