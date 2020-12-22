<template>
  <div>
    <div class="d-flex align-items-center pb-3">
      <div class="wrapper ml-auto action-bar kanban-toolbar">
        <div class="d-flex text-white">
          <a class="btn btn-primary btn-fw" href="#" data-toggle="modal" data-target="#add-student">
            <i class="mdi mdi-account-plus btn-icon-prepend"></i> Add Student
          </a>
          <a class="btn btn-primary btn-fw" href="#" data-toggle="modal" data-target="#upload_csv_std">
            <i class="mdi mdi-upload btn-icon-prepend"></i> Bulk Upload
            <b-form-file v-model="file2" hidden class="mt-3" plain></b-form-file>
          </a>
          <a class="btn btn-primary btn-fw" href="#delete-student-bulk" data-toggle="modal">
            <i class="mdi mdi-delete btn-icon-prepend"></i> Bulk Delete
          </a>
        </div>
      </div>
    </div>
    <!--Modal Upload CSV  Starts-->
    <div id="upload_csv_std" ref="upload_csv_std" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
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
                  <VueCsvImport v-model="studentCSV" :map-fields="studentFieldsMap">
                    <template slot="hasHeaders" slot-scope="{ headers, toggle }">
                      <label>
                        Select CSV File:
                      </label>
                    </template>
                  </VueCsvImport>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary mr-2" @click="importStudents">Upload</button>
            <button data-dismiss="modal" class="btn btn-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Upload CSV  End-->
    <!--Modal add student Starts-->
    <div id="add-student" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Add Student</h5>
            <button ref="closeAddStudent" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form class="form sample" @submit.prevent="addStudent">
            <div class="modal-body modal-bg">
              <div class="row flex-grow">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-roll-no">Roll Number</label>
                    <div class="input-group">
                      <input
                        id="add-student-roll-no"
                        v-model="studentForm.usn"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Roll Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-class-enrolled">Class Enrolled</label>
                    <div class="input-group">
                      <input
                        id="add-student-class-enrolled"
                        v-model="studentForm.classEnrolled"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Class Enrolled"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-class-section">Class Section</label>
                    <div class="input-group">
                      <input
                        id="add-student-class-section"
                        v-model="studentForm.sectionEnrolled"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Class Section"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-board">Board</label>
                    <div class="input-group">
                      <input
                        id="add-student-board"
                        v-model="studentForm.board"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Board"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-school-name">School Name</label>
                    <div class="input-group">
                      <input
                        id="add-student-school-name"
                        v-model="studentForm.schoolName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="School Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-first-name">First Name</label>
                    <div class="input-group">
                      <input
                        id="add-student-first-name"
                        v-model="studentForm.fName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-middle-name">Middle Name</label>
                    <div class="input-group">
                      <input
                        id="add-student-middle-name"
                        v-model="studentForm.mName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Middle Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-last-name">Last Name</label>
                    <div class="input-group">
                      <input
                        id="add-student-last-name"
                        v-model="studentForm.lName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-gender">Gender</label>
                    <div class="input-group">
                      <SingleSelect
                        :options="optionsGender"
                        :initial-value="selectedGender"
                        @onChange="onSelectedGenderChange"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-dob">DOB</label>
                    <div class="input-group">
                      <input
                        id="add-student-dob"
                        v-model="studentForm.dob"
                        type="date"
                        class="form-control form-control-lg"
                        placeholder="DOB"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-primary-phone-no">Primary Phone Number</label>
                    <div class="input-group">
                      <input
                        id="add-student-primary-phone-no"
                        v-model="studentForm.phoneP"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Primary Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-primary-phone-no">Secondary Phone Number</label>
                    <div class="input-group">
                      <input
                        id="add-student-secondary-phone-no"
                        v-model="studentForm.phoneS"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Secondary Phone Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-whatsapp-no">Whatsapp Number</label>
                    <div class="input-group">
                      <input
                        id="add-student-whatsapp-no"
                        v-model="studentForm.phoneW"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Whatsapp Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-email-id">Email ID</label>
                    <div class="input-group">
                      <input
                        id="add-student-email-id"
                        v-model="studentForm.email"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-address">Address</label>
                    <div class="input-group">
                      <input
                        id="add-student-address"
                        v-model="studentForm.address"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-pin-code">PIN Code</label>
                    <div class="input-group">
                      <input
                        id="add-student-pin-code"
                        v-model="studentForm.pinCode"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="PIN Code"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-country">Country</label>
                    <div class="input-group">
                      <input
                        id="add-student-country"
                        v-model="studentForm.country"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-state">State</label>
                    <div class="input-group">
                      <input
                        id="add-student-state"
                        v-model="studentForm.state"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-city">City</label>
                    <div class="input-group">
                      <input
                        id="add-student-city"
                        v-model="studentForm.city"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="add-student-site-uname">Site User Name</label>
                    <div class="input-group">
                      <input
                        id="add-student-site-uname"
                        v-model="studentForm.userName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Site User Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary mr-2">Add</button>
                <button class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--Modal add student Ends-->
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
          selectable
          bordered
          :select-mode="selectMode"
          responsive="true"
          sticky-header
          head-variant="light"
          :items="students"
          :fields="studentFields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          @filtered="onFiltered"
          @row-selected="onRowSelectedStudent"
        >
          <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>
          <template v-slot:cell(checkListStudent)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">&check;</span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">&nbsp;</span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
          <template v-slot:cell(actions)="data">
            <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-student" @click="editUser(data.item)">
              <i class="mdi mdi-pencil"></i>
            </a>
            <a
              href="#"
              class="actn-btn"
              data-toggle="modal"
              data-target="#delete-student"
              @click="selectUser(data.item)"
            >
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
              :total-rows="totalRows"
              :per-page="perPage"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!--Modal Edit student Starts-->
    <div id="edit-student" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Edit Student</h5>
            <button ref="closeStudentEdit" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form class="form sample" @submit.prevent="updateStudent">
            <div class="modal-body modal-bg">
              <div class="row flex-grow">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-roll-no">Roll Number</label>
                    <div class="input-group">
                      <input
                        id="edit-student-roll-no"
                        v-model="editStudent.usn"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Roll Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="class-enrolled">Class Enrolled</label>
                    <div class="input-group">
                      <input
                        id="class-enrolled"
                        v-model="editStudent.classEnrolled"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Class Enrolled"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-class-section">Class Section</label>
                    <div class="input-group">
                      <input
                        id="edit-student-class-section"
                        v-model="editStudent.sectionEnrolled"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Class Section"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-board">Board</label>
                    <div class="input-group">
                      <input
                        id="edit-student-board"
                        v-model="editStudent.board"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Board"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-school-name">School Name</label>
                    <div class="input-group">
                      <input
                        id="edit-student-school-name"
                        v-model="editStudent.schoolName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="School Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-first-name">First Name</label>
                    <div class="input-group">
                      <input
                        id="edit-student-first-name"
                        v-model="editStudent.fName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-middle-name">Middle Name</label>
                    <div class="input-group">
                      <input
                        id="edit-student-middle-name"
                        v-model="editStudent.mName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Middle Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-last-name">Last Name</label>
                    <div class="input-group">
                      <input
                        id="edit-student-last-name"
                        v-model="editStudent.lName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-gender">Gender</label>
                    <div class="input-group">
                      <SingleSelect
                        :options="optionsGender"
                        :initial-value="selectedGender"
                        @onChange="onSelectedGenderChange"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-dob">DOB</label>
                    <div class="input-group">
                      <input
                        id="edit-student-dob"
                        v-model="editStudent.dob"
                        type="date"
                        class="form-control form-control-lg"
                        placeholder="DOB"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-primary-phone-no">Primary Phone Number</label>
                    <div class="input-group">
                      <input
                        id="edit-student-primary-phone-no"
                        v-model="editStudent.phoneP"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Primary Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-secondary-phone-no">Secondary Phone Number</label>
                    <div class="input-group">
                      <input
                        id="edit-student-secondary-phone-no"
                        v-model="editStudent.phoneS"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Secondary Phone Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-whatsapp-no">Whatsapp Number</label>
                    <div class="input-group">
                      <input
                        id="edit-student-whatsapp-no"
                        v-model="editStudent.phoneW"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Whatsapp Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-email-id">Email ID</label>
                    <div class="input-group">
                      <input
                        id="edit-student-email-id"
                        v-model="editStudent.email"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-address">Address</label>
                    <div class="input-group">
                      <input
                        id="edit-student-address"
                        v-model="editStudent.address"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-pin-code">PIN Code</label>
                    <div class="input-group">
                      <input
                        id="edit-student-pin-code"
                        v-model="editStudent.pinCode"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="PIN Code"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-country">Country</label>
                    <div class="input-group">
                      <input
                        id="edit-student-country"
                        v-model="editStudent.country"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-state">State</label>
                    <div class="input-group">
                      <input
                        id="edit-student-state"
                        v-model="editStudent.state"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-city">City</label>
                    <div class="input-group">
                      <input
                        id="edit-student-city"
                        v-model="editStudent.city"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="edit-student-site-uname">Site User Name</label>
                    <div class="input-group">
                      <input
                        id="edit-student-site-uname"
                        v-model="editStudent.userName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Site User Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary mr-2">Edit</button>
                <button class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--Modal Edit student Ends-->
    <!--Modal Delete student Starts-->
    <div id="delete-student" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body modal-bg">
            <form class="forms-sample" @submit.prevent="deleteUser">
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
                <button ref="closeDeleteStudent" class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Delete student  End-->

    <div id="delete-student-bulk" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body modal-bg">
            <form class="forms-sample" @submit.prevent="deleteUsersBulk">
              <div class="form-group text-center">
                <div class="alert-cst alert-cst--warning">
                  <span class="alert-cst--warning__body">
                    <span class="alert-cst--warning__dot"></span>
                  </span>
                </div>
                <div class="alert-cst-title">Are you sure?</div>
                <div class="alert-cst-text">
                  {{ selectedUsersList.length ? 'Delete selected Students' : 'Delete all Students' }}
                </div>
                <br />
                <div class="alert-cst-text">You won't be able to revert this!</div>
              </div>
              <div class="alert-cst-footer">
                <button type="submit" class="btn btn-danger mr-2">Clear</button>
                <button ref="closeDeleteStudentBulk" class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
      selectedUsersList: [],
      studentForm: {
        role: 'STUDENT'
      },
      selectMode: 'multi',
      checkListStudent: [],
      optionsGender: ['Please select an option', 'Male', 'Female'],
      selectedGender: 'Please select an option',
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
      students: (state) => state.userManagement.students
    }),
    totalRows() {
      return this.students ? this.students.length : 1
    }
  },
  watch: {
    checkListStudent(_val) {
      console.log('rows selected: ' + val)
    }
  },
  created() {
    this.$store.dispatch('userManagement/fetchAllUsers', this.$store.getters.getPath)
  },
  mounted() {},
  methods: {
    onSelectedGenderChange(value) {
      this.selectedGender = value
    },
    onFiltered() {},

    async addStudent() {
      if (!this.studentForm.dob || this.studentForm.dob.length > 10) {
        return
      }
      if (this.selectedGender === 'Please select an option') {
        return
      }
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
      this.selectedGender = student ? student.gender : this.selectedGender
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
    async deleteUsersBulk() {
      try {
        const userIds = []
        if (this.selectedUsersList && this.selectedUsersList.length) {
          this.selectedUsersList.forEach((user) => {
            userIds.push(user.id)
          })
        } else if (this.students) {
          this.students.forEach((user) => {
            userIds.push(user.id)
          })
        }
        await this.$store.dispatch('userManagement/deleteUsersBulk', {
          path: this.$store.getters.getPath,
          data: userIds,
          role: 'STUDENT'
        })
        this.$refs.closeDeleteStudentBulk.click()
      } catch (err) {
        console.log(err)
      }
    },
    onRowSelectedStudent(items) {
      this.selectedUsersList = items
      console.log(items.length)
    }
  }
}
</script>
<style></style>
