<template>
  <div class="custom-bodypad">
    <div class="row mb-3">
      <div class="col-lg-12">
        <div class="d-flex flex-column flex-md-row align-items-center mb-4">
          <div class="wrapper d-flex align-items-center">
            <div class="d-flex mt-4 mr-2 mt-md-0">
              <button type="button" class="btn btn-primary btn-fw">
                <i class="mdi mdi-download btn-icon-prepend"></i> CSV Template
              </button>
            </div>
            <div class="d-flex mt-4 mt-md-0">
              <button
                type="button"
                class="btn btn-primary btn-fw"
                data-toggle="modal"
                data-target="#upload_csv"
              >
                <i class="mdi mdi-upload btn-icon-prepend"></i> Upload CSV
              </button>
            </div>
          </div>
          <div
            class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
          >
            <div class="d-flex mt-4 mt-md-0">
              <button
                type="button"
                class="btn btn-primary btn-fw"
                data-toggle="modal"
                data-target="#clear_class_all"
              >
                <i class="mdi mdi-backspace btn-icon-prepend"></i> Clear All
              </button>
            </div>
            <div class="d-flex mt-4 mt-md-0">
              <button
                type="button"
                class="btn btn-primary btn-fw"
                data-toggle="modal"
                data-target="#publish_all"
              >
                <i class="mdi mdi-upload btn-icon-prepend"></i> Publish All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Upload CSV  Starts-->
    <div id="upload_csv" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Bulk Upload</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample">
              <div class="form-group">
                <div class="input-group col-xs-12">
                  <b-form-file
                    :file-name-formatter="formatNames"
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  ></b-form-file>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary mr-2">Upload</button>
            <button class="btn btn-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Upload CSV  End-->
    <!--Modal Publish All Starts-->
    <div id="publish_all" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Select all class to publish</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample w-100">
              <div class="form-group w-100">
                <div class="input-group col-xs-12 w-100">
                  <label>Class</label>
                  <MultiSelect
                    class="w-100"
                    :options="classList"
                    :initialValue="selectedClass"
                    @onChange="onSelectedClassChange"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary mr-2">Publish All</button>
            <button class="btn btn-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Publish All  End-->
    <!--Modal Clear All Starts-->
    <div id="clear_class_all" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Select classes to Clear</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample w-100">
              <div class="form-group w-100">
                <div class="input-group col-xs-12 w-100">
                  <label>Class</label>
                  <MultiSelect
                    class="w-100"
                    :options="classList"
                    :initialValue="selectedClass"
                    @onChange="onSelectedClassChange"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary mr-2">Clear All</button>
            <button class="btn btn-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Clear All  End-->
    <!--Modal Clear all Starts-->
    <div id="clear_all" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body modal-bg">
            <form class="forms-sample" @submit.prevent="clearAllTimetables">
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
    <!--Parent Class-->
    <div class="master-group">
      <div class="page-header">
        <div class="row w-100">
          <div class="col-lg-2 col-sm-12">
            <div class="form-group">
              <label>Select Class</label>
              <v-select
               
                class="class_dropdown"
                :options="classList"
                 :initialValue="selectedClass"
              ></v-select>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 grid-margin stretch-card border-bottom">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center pb-3">
                <div class="wrapper d-flex align-items-center media-info text-facebook">
                  <h4 class="card-title float-left">Class X 'A'</h4>
                </div>
                <div class="wrapper ml-auto action-bar kanban-toolbar">
                  <div class="d-flex">
                    <button type="button" class="btn btn-icons btn-light d-none d-lg-block">
                      <i class="mdi mdi-backspace"></i> Clear
                    </button>
                    <button type="button" class="btn btn-icons btn-light d-none d-lg-block">
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
                      <span>
                        <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-batch">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </span>
                    </th>
                    <th colspan="2">
                      Tuesday
                      <span>
                        <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-batch">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </span>
                    </th>
                    <th colspan="2">
                      Wednessday
                      <span>
                        <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-batch">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </span>
                    </th>
                    <th colspan="2">
                      Thursday
                      <span>
                        <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-batch">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </span>
                    </th>
                    <th colspan="2">
                      Friday
                      <span>
                        <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-batch">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </span>
                    </th>
                    <th colspan="2">
                      Saturday
                      <span>
                        <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-batch">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </span>
                    </th>
                    <th colspan="2">
                      Sunday
                      <span>
                        <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-batch">
                          <i class="mdi mdi-pencil"></i>
                        </a>
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th>Period 1</th>
                    <td class="cell-subject">Mathematics</td>
                    <td class="cell-teacher">Mathew Andrews</td>
                    <td class="cell-subject">Social Science</td>
                    <td class="cell-teacher">Jane Williams</td>
                    <td class="cell-subject">English</td>
                    <td class="cell-teacher">Martha D</td>
                    <td class="cell-subject">Science</td>
                    <td class="cell-teacher">Steve Austin</td>
                    <td class="cell-subject">Arts and Design</td>
                    <td class="cell-teacher">Muhamed Bilal</td>
                    <td class="cell-subject">French</td>
                    <td class="cell-teacher">Martina</td>
                    <td class="cell-subject"></td>
                    <td class="cell-teacher"></td>
                  </tr>
                  <tr>
                    <th>Period 2</th>
                    <td class="cell-subject">Arts and Design</td>
                    <td class="cell-teacher">Muhamed Bilal</td>
                    <td class="cell-subject">French</td>
                    <td class="cell-teacher">Martina</td>
                    <td class="cell-subject">Mathematics</td>
                    <td class="cell-teacher">Mathew Andrews</td>
                    <td class="cell-subject">Social Science</td>
                    <td class="cell-teacher">Jane Williams</td>
                    <td class="cell-subject">English</td>
                    <td class="cell-teacher">Martha D</td>
                    <td class="cell-subject">Science</td>
                    <td class="cell-teacher">Steve Austin</td>
                    <td class="cell-subject"></td>
                    <td class="cell-teacher"></td>
                  </tr>
                  <tr>
                    <th>Period 3</th>
                    <td class="cell-subject">Arts and Design</td>
                    <td class="cell-teacher">Muhamed Bilal</td>
                    <td class="cell-subject">English</td>
                    <td class="cell-teacher">Martha D</td>
                    <td class="cell-subject">Science</td>
                    <td class="cell-teacher">Steve Austin</td>
                    <td class="cell-subject">French</td>
                    <td class="cell-teacher">Martina</td>
                    <td class="cell-subject">Mathematics</td>
                    <td class="cell-teacher">Mathew Andrews</td>
                    <td class="cell-subject">Social Science</td>
                    <td class="cell-teacher">Jane Williams</td>
                    <td class="cell-subject"></td>
                    <td class="cell-teacher"></td>
                  </tr>
                  <tr>
                    <th class="mstr-tt-row-first text-center" colspan="16">Interval</th>
                  </tr>
                  <tr>
                    <th>Period 4</th>
                    <td class="cell-subject">French</td>
                    <td class="cell-teacher">Martina</td>
                    <td class="cell-subject">Mathematics</td>
                    <td class="cell-teacher">Mathew Andrews</td>
                    <td class="cell-subject">Arts and Design</td>
                    <td class="cell-teacher">Muhamed Bilal</td>
                    <td class="cell-subject">English</td>
                    <td class="cell-teacher">Martha D</td>
                    <td class="cell-subject">Science</td>
                    <td class="cell-teacher">Steve Austin</td>
                    <td class="cell-subject">Social Science</td>
                    <td class="cell-teacher">Jane Williams</td>
                    <td class="cell-subject"></td>
                    <td class="cell-teacher"></td>
                  </tr>
                  <tr>
                    <th>Period 5</th>
                    <td class="cell-subject">English</td>
                    <td class="cell-teacher">Martha D</td>
                    <td class="cell-subject">Science</td>
                    <td class="cell-teacher">Steve Austin</td>
                    <td class="cell-subject">French</td>
                    <td class="cell-teacher">Martina</td>
                    <td class="cell-subject">Mathematics</td>
                    <td class="cell-teacher">Mathew Andrews</td>
                    <td class="cell-subject">Arts and Design</td>
                    <td class="cell-teacher">Muhamed Bilal</td>
                    <td class="cell-subject">Social Science</td>
                    <td class="cell-teacher">Jane Williams</td>
                    <td class="cell-subject"></td>
                    <td class="cell-teacher"></td>
                  </tr>
                  <tr>
                    <th>Period 6</th>
                    <td class="cell-subject">Arts and Design</td>
                    <td class="cell-teacher">Muhamed Bilal</td>
                    <td class="cell-subject">English</td>
                    <td class="cell-teacher">Martha D</td>
                    <td class="cell-subject">Science</td>
                    <td class="cell-teacher">Steve Austin</td>
                    <td class="cell-subject">French</td>
                    <td class="cell-teacher">Martina</td>
                    <td class="cell-subject">Mathematics</td>
                    <td class="cell-teacher">Mathew Andrews</td>
                    <td class="cell-subject">Social Science</td>
                    <td class="cell-teacher">Jane Williams</td>
                    <td class="cell-subject"></td>
                    <td class="cell-teacher"></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Modal Class row Field Edit Starts-->
      <div id="edit-batch" class="modal fade" role="dialog">
        <div class="modal-dialog cstm-modal" role="document">
          <div class="modal-content">
            <div class="modal-header modal-bg">
              <h5 class="modal-title">Class X 'A' - Monday</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form class="forms-sample">
              <div class="modal-body modal-bg">
                <div class="row">
                  <div class="col-md-2 label-align-middle">
                    <label class="col-form-label">Period 1</label>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="classname">Select Subject</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathematics</option>
                        <option>Science</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="teacher">Select Teacher</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathew Andrews</option>
                        <option>Steve Austin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2 label-align-middle">
                    <label class="col-form-label">Period 2</label>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="classname">Select Subject</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathematics</option>
                        <option>Science</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="teacher">Select Teacher</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathew Andrews</option>
                        <option>Steve Austin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2 label-align-middle">
                    <label class="col-form-label">Period 3</label>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="classname">Select Subject</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathematics</option>
                        <option>Science</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="teacher">Select Teacher</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathew Andrews</option>
                        <option>Steve Austin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2 label-align-middle">
                    <label class="col-form-label">Period 4</label>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="classname">Select Subject</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathematics</option>
                        <option>Science</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="teacher">Select Teacher</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathew Andrews</option>
                        <option>Steve Austin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2 label-align-middle">
                    <label class="col-form-label">Period 5</label>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="classname">Select Subject</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathematics</option>
                        <option>Science</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="teacher">Select Teacher</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathew Andrews</option>
                        <option>Steve Austin</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2 label-align-middle">
                    <label class="col-form-label">Period 6</label>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="classname">Select Subject</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathematics</option>
                        <option>Science</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="teacher">Select Teacher</label>
                      <select class="js-example-basic-single" style="width:100%">
                        <option>Mathew Andrews</option>
                        <option>Steve Austin</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary mr-2">Save</button>
                <button class="btn btn-light">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--Modal Row Field Edit Ends-->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { mapState, mapGetters } from 'vuex'
import TimeTableCard from '@/components/TimetableCard.vue'
import MultiSelect from '~/components/templates/common/MultiSelect'
Vue.component('v-select', vSelect)
export default {
  components: {
    TimeTableCard,
    MultiSelect
  },
  data() {
    return {
      classList: ['Class VII', 'Class VIII', 'Class IX', 'Class X'],
      selectedClass: 'Class X'
    }
  },
  computed: {
    ...mapState({
      masterTT: (state) => state.timetable.masterTimetable
    }),
    ...mapGetters({
      classList: 'timetable/getClassList',
      teacherList: 'userManageMent/getTeacherList'
    }),
    defaultClass() {
      if (this.classList && this.classList.length) {
        return this.classList[0]
      }
      return ''
    }
  },
  watch: {
    defaultClass(val) {
      this.selectedClass = val
    }
  },
  created() {
    this.$store.dispatch('timetable/fetchMasterTimetable', this.$store.getters.getPath)
    this.$store.dispatch('timetable/fetchSavedTimetables', this.$store.getters.getPath)
    this.$store.dispatch('userManagement/fetchTeachers', this.$store.getters.getPath)
  },
  mounted() {
    this.selectedClass = this.defaultClass
  },

  methods: {
    onSelectedClassChange: function(value) {
      this.selectedClass = value
    },
    clearAllTimetables() {},
    onClassSelected(value) {
      this.selectedClass = value
      console.log(JSON.stringify(this.selectedClass))
    },
    formatNames(files) {
      if (files.length === 1) {
        return files[0].name
      } else {
        return `${files.length} files selected`
      }
    }
  }
}
</script>

<style scoped>
.class_dropdown .vs__search::placeholder {
  width: 100% !important;
}
</style>
