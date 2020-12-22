<template>
  <div>
    <div class="d-flex align-items-center pb-3">
      <div class="wrapper d-flex align-items-center media-info text-facebook"></div>
      <div class="wrapper ml-auto action-bar kanban-toolbar">
        <div class="d-flex text-white">
          <a class="btn btn-primary btn-fw" href="#" data-toggle="modal" data-target="#add-admin">
            <i class="mdi mdi-account-key btn-icon-prepend"></i> Add Admin
          </a>
        </div>
      </div>
    </div>
    <!--Modal add admin  Starts-->
    <div id="add-admin" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Add Admin</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample">
              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="add-admin-role">Role</label>
                </div>
                <v-select :options="options"></v-select>
              </div>
              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="add-admin-fname">First Name</label>
                </div>
                <input id="add-admin-fname" type="text" class="form-control" placeholder="First Name" />
              </div>
              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="add-admin-lname">Last Name</label>
                </div>
                <input id="add-admin-lname" type="text" class="form-control" placeholder="Last Name" />
              </div>
              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="add-admin-emailid">Email ID</label>
                </div>
                <input id="add-admin-emailid" type="email" class="form-control" placeholder="Email ID" />
              </div>

              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="add-admin-contact-no">Contact No</label>
                </div>
                <input id="add-admin-contact-no" type="tel" class="form-control" placeholder="Contact No" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary mr-2">Add</button>
            <button class="btn btn-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!--Modal add admin End-->
    <div class="table-responsive">
      <b-container fluid>
        <!-- User Interface controls -->
        <b-row>
          <b-col sm="6" md="3" class="my-1">
            <b-form-fieldset horizontal label="Rows per page" class="col-lg-6 col-sm-12" :label-size="6">
              <b-form-select id="perPageSelect" v-model="perPage" size="sm" :options="pageOptions"></b-form-select>
            </b-form-fieldset>
          </b-col>

          <b-col sm="6" md="9" class="my-1 float-right">
            <b-form-fieldset horizontal label="Search" class="float-right col-lg-6 col-sm-12" :label-size="2">
              <b-input-group size="sm">
                <b-form-input
                  id="filterInput"
                  v-model="filter"
                  type="search"
                  placeholder="Type to Search"
                ></b-form-input>
              </b-input-group>
            </b-form-fieldset>
          </b-col>
        </b-row>
        <!-- Main table element -->
        <b-table
          striped
          hover
          outlined
          show-empty
          bordered
          selectable
          responsive="true"
          sticky-header
          head-variant="light"
          :items="items"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          :select-mode="selectMode"
          @filtered="onFiltered"
          @row-selected="onRowSelectedAdmin"
        >
          <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>
          <template v-slot:cell(checkListAdmin)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
          <template v-slot:cell(actions)>
            <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-admin">
              <i class="mdi mdi-pencil"></i>
            </a>
            <a href="#" class="actn-btn" data-toggle="modal" data-target="#delete-admin">
              <i class="mdi mdi-delete"></i>
            </a>
          </template>

          <template v-slot:row-details="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
              </ul>
            </b-card>
          </template>
        </b-table>
        <b-row>
          <b-col sm="12" md="12" class="my-1">
            <b-pagination
              v-model="currentPage"
              size="md"
              class="float-right"
              :total-rows="items.length"
              :per-page="perPage"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!--Modal Edit admin  Starts-->
    <div id="edit-admin" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Edit Admin</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample">
              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="edit-admin-role">Role</label>
                </div>
                <v-select :options="options"></v-select>
              </div>
              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="edit-admin-fname">First Name</label>
                </div>
                <input id="edit-admin-fname" type="text" class="form-control" placeholder="First Name" />
              </div>
              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="edit-admin-lname">Last Name</label>
                </div>
                <input id="edit-admin-lname" type="text" class="form-control" placeholder="Last Name" />
              </div>
              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="edit-admin-emailid">Email ID</label>
                </div>
                <input id="edit-admin-emailid" type="email" class="form-control" placeholder="Email ID" />
              </div>

              <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="edit-admin-contact-no">Contact No</label>
                </div>
                <input id="edit-admin-contact-no" type="tel" class="form-control" placeholder="Contact No" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary mr-2">Edit</button>
            <button class="btn btn-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Edit admin End-->
    <!--Modal Delete admin Starts-->
    <div id="delete-admin" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body modal-bg">
            <form class="forms-sample">
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
                <button class="btn btn-light">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Delete admin  End-->
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { mapState } from 'vuex'
import SingleSelect from '~/components/templates/common/SingleSelect'
import VueCsvImport from '@/components/templates/common/VueCsvImport'

Vue.component('v-select', vSelect)
export default {
  components: {
    SingleSelect,
    VueCsvImport
  },
  data() {
    return {
      editStudent: {},
      selectedUser: '',
      studentForm: {
        role: 'STUDENT'
      },
      teacherForm: {
        role: 'TEACHER'
      },
      selectMode: 'multi',
      checkListAdmin: [],
      checkListTeacher: [],
      checkListStudent: [],
      options: ['School Admin', 'Site Admin', 'Super Admin'],
      optionsGender: ['Please select an option', 'Male', 'Female'],
      selectedGender: 'Please select an option',
      items: [
     {
          isActive: true,
          role: 'School Admin',
          fname: 'David',
          lname: 'Mathew',
          emailId: 'david35@gmail.com',
          phoneNo: '001254850'
        },
        {
          isActive: true,
          role: 'Super Admin',
          fname: 'George',
          lname: 'Mathew',
          emailId: 'mathew09@gmail.com',
          phoneNo: '0189652389'
        }
      ],
      fields: [
        { key: 'checkListAdmin', label: 'Select' },
        { key: 'role', label: 'Role', sortable: true, sortDirection: 'desc' },
        { key: 'fname', label: 'First Name', sortable: true, sortDirection: 'desc' },
        { key: 'lname', label: 'Last Name', sortable: true, sortDirection: 'desc' },
        { key: 'emailId', label: 'Email Address', sortable: true, sortDirection: 'desc' },
        { key: 'phoneNo', label: 'Phone No', sortable: true, sortDirection: 'desc' },
        { key: 'actions', label: 'Actions' }
      ],
      teacherFields: [
        { key: 'checkListTeacher', label: 'Select' },
        { key: 'usn', label: 'Employee ID', sortable: true, sortDirection: 'desc' },
        { key: 'classEnrolled', label: 'Class Enrolled', sortable: true, sortDirection: 'desc' },
        { key: 'sectionEnrolled', label: 'Class Section', sortable: true, sortDirection: 'desc' },
        { key: 'board', label: 'Board', sortable: true, sortDirection: 'desc' },
        { key: 'schoolName', label: 'School Name', sortable: true, sortDirection: 'desc' },
        { key: 'fName', label: 'First Name', sortable: true, sortDirection: 'desc' },
        { key: 'mName', label: 'Middle Name', sortable: true, sortDirection: 'desc' },
        { key: 'lName', label: 'Last Name', sortable: true, sortDirection: 'desc' },
        { key: 'gender', label: 'Gender', sortable: true, sortDirection: 'desc' },
        { key: 'dob', label: 'DOB', sortable: true, sortDirection: 'desc' },
        { key: 'phoneP', label: 'Primary Phone Number', sortable: true, sortDirection: 'desc' },
        { key: 'phoneS', label: 'Secondary Phone Number', sortable: true, sortDirection: 'desc' },
        { key: 'phoneW', label: 'Whatsapp Number', sortable: true, sortDirection: 'desc' },
        { key: 'email', label: 'Email ID', sortable: true, sortDirection: 'desc' },
        { key: 'address', label: 'Address', sortable: true, sortDirection: 'desc' },
        { key: 'pinCode', label: 'PIN Code', sortable: true, sortDirection: 'desc' },
        { key: 'country', label: 'Country', sortable: true, sortDirection: 'desc' },
        { key: 'state', label: 'State', sortable: true, sortDirection: 'desc' },
        { key: 'city', label: 'City', sortable: true, sortDirection: 'desc' },
        { key: 'userName', label: 'Site User Name', sortable: true, sortDirection: 'desc' },
        { key: 'actions', label: 'Actions' }
      ],
      studentFields: [
        { key: 'checkListStudent', label: 'Select' },
        { key: 'usn', label: 'Roll Number', sortable: true, sortDirection: 'desc' },
        { key: 'classEnrolled', label: 'Class Enrolled', sortable: true, sortDirection: 'desc' },
        { key: 'sectionEnrolled', label: 'Class Section', sortable: true, sortDirection: 'desc' },
        { key: 'board', label: 'Board', sortable: true, sortDirection: 'desc' },
        { key: 'schoolName', label: 'School Name', sortable: true, sortDirection: 'desc' },
        { key: 'fName', label: 'First Name', sortable: true, sortDirection: 'desc' },
        { key: 'mName', label: 'Middle Name', sortable: true, sortDirection: 'desc' },
        { key: 'lName', label: 'Last Name', sortable: true, sortDirection: 'desc' },
        { key: 'gender', label: 'Gender', sortable: true, sortDirection: 'desc' },
        { key: 'dob', label: 'DOB', sortable: true, sortDirection: 'desc' },
        { key: 'phoneP', label: 'Primary Phone Number', sortable: true, sortDirection: 'desc' },
        { key: 'phoneS', label: 'Secondary Phone Number', sortable: true, sortDirection: 'desc' },
        { key: 'phoneW', label: 'Whatsapp Number', sortable: true, sortDirection: 'desc' },
        { key: 'email', label: 'Email ID', sortable: true, sortDirection: 'desc' },
        { key: 'address', label: 'Address', sortable: true, sortDirection: 'desc' },
        { key: 'pinCode', label: 'PIN Code', sortable: true, sortDirection: 'desc' },
        { key: 'country', label: 'Country', sortable: true, sortDirection: 'desc' },
        { key: 'state', label: 'State', sortable: true, sortDirection: 'desc' },
        { key: 'city', label: 'City', sortable: true, sortDirection: 'desc' },
        { key: 'userName', label: 'Site User Name', sortable: true, sortDirection: 'desc' },
        { key: 'actions', label: 'Actions' }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 25],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      studentCSV: null,
      studentFieldsMap: {
        fName: 'First Name',
        mName: 'Middle Name',
        lName: 'Last Name',
        usn: 'Roll number',
        classEnrolled: 'Class',
        sectionEnrolled: 'Section',
        phoneP: 'Primary phone',
        phoneS: 'Secondary Phone',
        phoneW: 'Whatsapp Number',
        email: 'Email ID',
        dob: 'DOB(DD-MM-YYYY)',
        board: 'Board',
        schoolName: 'School Name',
        gender: 'Gender',
        address: 'Address',
        pinCode: 'PIN Code',
        country: 'Country',
        state: 'State',
        city: 'City',
        userName: 'Site User Name'
      }
    }
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.userProfile.userProfile,
      students: (state) => state.userManagement.students,
      teachers: (state) => state.userManagement.teachers
    })
  },
  created() {
    this.$store.dispatch('userManagement/fetchAllUsers', this.$store.getters.getPath)
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    formatNamesStd(files) {
      if (files.length === 1) {
        return files[0].name
      } else {
        return `${files.length} files selected`
      }
    },
    formatNamesTeacher(files) {
      if (files.length === 1) {
        return files[0].name
      } else {
        return `${files.length} files selected`
      }
    },
    onSelectedGenderChange(value) {
      this.selectedGender = value
    },
    onFiltered() {},
    async addTeacher() {
      this.teacherForm.schoolId = this.userProfile.schoolId
      this.teacherForm.gender = this.selectedGender
      // this.teacherForm.classSection
      try {
        const response = await this.$store.dispatch('userManagement/addUser', {
          path: this.$store.getters.getPath,
          data: this.teacherForm
        })

        console.log(response)
        this.$refs.closeAddTeacher.click()
      } catch (err) {
        console.log(err)
      }
    },
    async addStudent() {
      if (!this.studentForm.dob || this.studentForm.dob.length > 10) {
        return
      }

      this.studentForm.schoolId = this.userProfile.schoolId
      this.studentForm.gender = this.selectedGender

      try {
        const response = await this.$store.dispatch('userManagement/addUser', {
          path: this.$store.getters.getPath,
          data: this.studentForm
        })
        console.log(response)
        this.$refs.closeAddStudent.click()
      } catch (err) {
        console.log(err)
      }
    },
    async importStudents() {
      if (!this.studentCSV) {
        console.log('select file first')
        return
      }
      try {
        const studentsList = this.studentCSV.slice(1)
        const response = await this.$store.dispatch('userManagement/importUsers', {
          path: this.$store.getters.getPath,
          data: studentsList,
          role: 'STUDENT'
        })
        console.log('import students ' + response)
        await this.$store.dispatch('userManagement/fetchStudents', this.$store.getters.getPath)
        this.$refs.upload_csv_std.click()
      } catch (err) {
        console.log(err)
      }
    },
    async updateStudent() {
      try {
        const response = await this.$store.dispatch('userManagement/updateUser', {
          path: this.$store.getters.getPath,
          data: this.editStudent,
          id: this.editStudent.id
        })
        console.log(response)
        this.$refs.closeStudentEdit.click()
      } catch (err) {
        console.log(err)
      }
    },
    editUser(student) {
      this.editStudent = student ? JSON.parse(JSON.stringify(student)) : {}
    },
    selectUser(user) {
      this.selectedUser = user
    },
    async deleteUser() {
      try {
        await this.$store.dispatch('userManagement/deleteUser', {
          path: this.$store.getters.getPath,
          data: this.selectedUser,
          id: this.selectedUser.id
        })
        this.$refs.closeDeleteStudent.click()
      } catch (err) {
        console.log(err)
      }
    },
    onRowSelectedAdmin(items) {
      this.selected = items
    },
    onRowSelectedTeacher(items) {
      this.selected = items
    },
    onRowSelectedStudent(items) {
      this.selected = items
    }
  }
}
</script>
<style></style>
