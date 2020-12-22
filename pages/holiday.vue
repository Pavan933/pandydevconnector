<template>
  <div class="custom-bodypad">
    <div class="row">
      <div class="col-lg-4 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center pb-3">
              <div class="wrapper d-flex align-items-center media-info text-facebook">
                <h4 class="card-title float-left">Holiday List</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex text-white">
                  <nuxt-link
                    class="btn btn-sm btn-primary btn-fw"
                    to="#"
                    data-toggle="modal"
                    data-target="#add-holiday"
                  >
                    <i class="mdi mdi-calendar-today btn-icon-prepend"></i> Add Holiday
                  </nuxt-link>
                </div>
              </div>
            </div>
            <!--Modal Add Holiday Starts-->
            <div id="add-holiday" class="modal fade" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header modal-bg">
                    <h5 class="modal-title">Add Holiday</h5>
                    <button ref="closeHolidayModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body modal-bg">
                    <form class="forms-sample" @submit.prevent="addHoliday">
                      <div class="form-group">
                        <label class="float-left" for="holiday">Date</label>
                        <input
                          id="date"
                          v-model="newHoliday.start"
                          type="date"
                          class="form-control"
                          placeholder="Date"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label class="float-left" for="holiday">Holiday</label>
                        <input
                          id="text"
                          v-model="newHoliday.title"
                          type="text"
                          class="form-control"
                          placeholder="Holiday"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <div class="form-group row">
                          <div class="col-sm-4">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input
                                  id="fullday"
                                  v-model="newHoliday.description"
                                  type="radio"
                                  name="day"
                                  value="Full Day"
                                  class="form-check-input"
                                  checked
                                />
                                Full Day
                                <i class="input-helper"></i>
                              </label>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input
                                  id="day1"
                                  v-model="newHoliday.description"
                                  type="radio"
                                  name="day"
                                  value="1st Half"
                                  class="form-check-input"
                                />
                                1st Half Only
                                <i class="input-helper"></i>
                              </label>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input
                                  id="day2"
                                  v-model="newHoliday.description"
                                  type="radio"
                                  name="day"
                                  value="2nd Half"
                                  class="form-check-input"
                                />
                                2nd Half Only
                                <i class="input-helper"></i>
                              </label>
                            </div>
                          </div>
                        </div>
                        <small class="font-italic text-danger">Warning: Adding a holiday will cancel scheduled classed for that day, if any</small>
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary mr-2">Add</button>
                        <button class="btn btn-light" data-dismiss="modal">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!--Modal Add Holiday  End-->
            <div class="flow-x">
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <th>Holidays</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                  <tr v-for="holiday in holidays" :key="holiday.id">
                    <td>{{ holiday.title }}</td>
                    <td>{{ holiday.start.substring(0, 10) }}</td>
                    <td>
                      <a
                        href="#"
                        class="actn-btn"
                        data-toggle="modal"
                        data-target="#delete-holiday"
                        @click="selectHoliday(holiday.id)"
                      >
                        <i class="mdi mdi-delete"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!--Modal delete holiday Starts-->
      <div id="delete-holiday" class="modal fade" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body modal-bg">
              <form class="forms-sample" @submit.prevent="removeHoliday">
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
                  <button ref="closeAlertModal" class="btn btn-light" data-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!--Modal delete holiday  End-->
      <div class="col-lg-8 col-sm-12">
        <div id="calendar" class="full-calendar"></div>
      </div>
      <b-modal id="addHolidayModal" ref="addHolidayModal" v-model="showModal" title="Add Holiday" hide-footer>
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <div class="form-group">
            <label for="holiday-title">Holiday</label>
            <input
              id="holiday-title"
              v-model="newHoliday.title"
              type="text"
              class="form-control"
              placeholder="Holiday"
              required
            />
          </div>
          <div class="form-group">
            <div class="form-group row">
              <div class="col-sm-4">
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      id="fullday"
                      v-model="newHoliday.description"
                      type="radio"
                      name="day"
                      value="0"
                      class="form-check-input"
                      checked
                    />
                    Full Day
                    <i class="input-helper"></i>
                  </label>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      id="day1"
                      v-model="newHoliday.description"
                      type="radio"
                      name="day"
                      value="1"
                      class="form-check-input"
                    />
                    1st Half Only
                    <i class="input-helper"></i>
                  </label>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      id="day2"
                      v-model="newHoliday.description"
                      type="radio"
                      name="day"
                      value="2"
                      class="form-check-input"
                    />
                    2nd Half Only
                    <i class="input-helper"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <b-button class="btn btn-primary mr-2" type="submit">Submit</b-button>
          <b-button class="btn btn-light" @click="$bvModal.hide('addHolidayModal')">Cancel</b-button>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { BModal } from 'bootstrap-vue'
import moment from 'moment'

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
export default {
  components: {
    'b-modal': BModal
  },
  data() {
    return {
      showModal: false,
      holidayTitle: '',
      calendar: undefined,
      selectedHoliday: '',
      newHoliday: {
        start: '',
        title: '',
        holidayDate: '',
        allDay: true,
        description: 'Full Day'
      }
    }
  },

  created() {
    this.$store.dispatch('calendar/fetchHolidays', this.$store.getters.getPath)
  },
  mounted(){
  this.reloadCalendar()
  },
  methods: {
    selectHoliday(id) {
      this.selectedHoliday = id
    },
    async addHoliday() {
      try {
        if (!this.newHoliday.title) {
          return
        }
        // check for full day or half day here
        this.newHoliday.start = moment(this.newHoliday.start).toISOString()
        this.newHoliday.holidayDate = this.newHoliday.start.substring(0, 10)
        // if (this.newHoliday.description !== 'Full Day') this.newHoliday.allDay = false
        await this.$store.dispatch('calendar/addHoliday', {
          path: this.$store.getters.getPath,
          data: this.newHoliday
        })
        this.newHoliday = {
          start: '',
          title: '',
          holidayDate: '',
          description: 'Full Day',
          allDay: true
        }
        this.$refs.closeHolidayModal.click()
      } catch (err) {
        console.log(err)
      }
    },
    async removeHoliday() {
      try {
        await this.$store.dispatch('calendar/removeHoliday', {
          path: this.$store.getters.getPath,
          id: this.selectedHoliday
        })

        this.$refs.closeAlertModal.click()
      } catch (err) {
        console.log(err)
      }
    },
    reloadCalendar() {
      if (this.calendar) {
        this.calendar.destroy()
        this.calendar = undefined
      }

      this.loadCalendar()
    },

    loadCalendar() {
      const self = this

      const calendarEl = document.getElementById('calendar')

      this.calendar = new FullCalendar.Calendar(calendarEl, {
        aspectRatio: 2,
        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],

        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        eventLimit: true,
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectMirror: true,
        select({ start }) {
          self.showModal = true
          self.newHoliday.start = start
        },
        events: this.holidays
      })

      this.calendar.render()
    },
    async handleSubmit() {
      try {
        if (!this.newHoliday.title) {
          return
        }
        this.newHoliday.start = moment(this.newHoliday.start).toISOString()
        this.newHoliday.holidayDate = this.newHoliday.start.substring(0, 10)
        await this.$store.dispatch('calendar/addHoliday', {
          path: this.$store.getters.getPath,
          data: this.newHoliday
        })
        this.newHoliday = {
          start: '',
          title: '',
          description: 'Full Day',
          holidayDate: '',
          allDay: true
        }
        this.calendar.unselect()
        this.$refs.addHolidayModal.hide()
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.table.table-striped tr:nth-of-type(odd) {
  background-color: #f2edf3;
}
.table td,
.table th {
  text-align: left;
}
.disableClass {
  background: #0000;
}
</style>
