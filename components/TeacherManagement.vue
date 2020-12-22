<template>
  <div>
    <div class="d-flex align-items-center pb-3">
      <div class="wrapper ml-auto action-bar kanban-toolbar">
        <div class="d-flex text-white">
          <a class="btn btn-primary btn-fw" href="#" data-toggle="modal" data-target="#add-teacher">
            <i class="mdi mdi-account-plus btn-icon-prepend"></i> Add Teacher
          </a>
          <a class="btn btn-primary btn-fw" href="#" data-toggle="modal" data-target="#upload_csv_teacher">
            <i class="mdi mdi-upload btn-icon-prepend"></i> Bulk Upload
          </a>
          <a class="btn btn-primary btn-fw" href="#delete-teacher-bulk" data-toggle="modal">
            <i class="mdi mdi-delete btn-icon-prepend"></i> Bulk Delete
          </a>
        </div>
      </div>
    </div>
    <!--Modal Upload CSV  Starts-->
    <div id="upload_csv_teacher" class="modal fade" role="dialog">
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
                    :file-name-formatter="formatNamesTeacher"
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
    <!--Modal add teacher Starts-->
    <div id="add-teacher" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Add Teacher</h5>
            <button ref="closeAddTeacher" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form class="form sample" @submit.prevent="addTeacher">
            <div class="modal-body modal-bg">
              <div class="row flex-grow">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="employee-id">Employee ID</label>
                    <div class="input-group">
                      <input
                        id="employee-id"
                        v-model="teacherForm.usn"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Employee ID"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-class-enrolled">Class Enrolled</label>
                    <div class="input-group">
                      <input
                        id="teacher-class-enrolled"
                        v-model="teacherForm.classEnrolled"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Class Enrolled"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-class-section">Class Section</label>
                    <div class="input-group">
                      <input
                        id="teacher-class-section"
                        v-model="teacherForm.sectionEnrolled"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Class Section"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-board">Board</label>
                    <div class="input-group">
                      <input
                        id="teacher-board"
                        v-model="teacherForm.board"
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
                    <label for="teacher-school-name">School Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-school-name"
                        v-model="teacherForm.schoolName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="School Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-first-name">First Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-first-name"
                        v-model="teacherForm.fName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-middle-name">Middle Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-middle-name"
                        v-model="teacherForm.mName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Middle Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-last-name">Last Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-last-name"
                        v-model="teacherForm.lName"
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
                    <label for="teacher-gender">Gender</label>
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
                    <label for="teacher-dob">DOB</label>
                    <div class="input-group">
                      <input
                        id="teacher-dob"
                        v-model="teacherForm.dob"
                        type="date"
                        class="form-control form-control-lg"
                        placeholder="DOB"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-primary-phone-no">Primary Phone Number</label>
                    <div class="input-group">
                      <input
                        id="teacher-primary-phone-no"
                        v-model="teacherForm.phoneP"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Primary Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-primary-phone-no">Secondary Phone Number</label>
                    <div class="input-group">
                      <input
                        id="teacher-secondary-phone-no"
                        v-model="teacherForm.phoneS"
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
                    <label for="teacher-whatsapp-no">Whatsapp Number</label>
                    <div class="input-group">
                      <input
                        id="teacher-whatsapp-no"
                        v-model="teacherForm.phoneW"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Whatsapp Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-email-id">Email ID</label>
                    <div class="input-group">
                      <input
                        id="teacher-email-id"
                        v-model="teacherForm.email"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-address">Address</label>
                    <div class="input-group">
                      <input
                        id="teacher-address"
                        v-model="teacherForm.address"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-pin-code">PIN Code</label>
                    <div class="input-group">
                      <input
                        id="teacher-pin-code"
                        v-model="teacherForm.pinCode"
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
                    <label for="teacher-country">Country</label>
                    <div class="input-group">
                      <input
                        id="teacher-country"
                        v-model="teacherForm.country"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-state">State</label>
                    <div class="input-group">
                      <input
                        id="teacher-state"
                        v-model="teacherForm.state"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-city">City</label>
                    <div class="input-group">
                      <input
                        id="teacher-city"
                        v-model="teacherForm.city"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-site-uname">Site User Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-site-uname"
                        v-model="teacherForm.userName"
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
                <button class="btn btn-light">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--Modal add teacher Ends-->
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
          :select-mode="selectMode"
          responsive="true"
          sticky-header
          head-variant="light"
          :items="teachers"
          :fields="teacherFields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          @filtered="onFiltered"
          @row-selected="onRowSelectedTeacher"
        >
          <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>
          <template v-slot:cell(checkListTeacher)="{ rowSelected }">
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
            <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-teacher" @click="editUser(data.item)">
              <i class="mdi mdi-pencil"></i>
            </a>
            <a
              href="#"
              class="actn-btn"
              data-toggle="modal"
              data-target="#delete-teacher"
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
    <!--Modal Edit teacher Starts-->
    <div id="edit-teacher" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Edit Teacher</h5>
            <button ref="closeTeacherEdit" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form class="form sample" @submit.prevent="updateTeacher">
            <div class="modal-body modal-bg">
              <div class="row flex-grow">
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-employee-id">Employee ID</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-employee-id"
                        v-model="editTeacher.usn"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Employee ID"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-class-enrolled">Class Enrolled</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-class-enrolled"
                        v-model="editTeacher.classEnrolled"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Class Enrolled"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-class-section">Class Section</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-class-section"
                        v-model="editTeacher.sectionEnrolled"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Class Section"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-board">Board</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-board"
                        v-model="editTeacher.board"
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
                    <label for="teacher-edit-school-name">School Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-school-name"
                        v-model="editTeacher.schoolName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="School Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-first-name">First Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-first-name"
                        v-model="editTeacher.fName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-middle-name">Middle Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-middle-name"
                        v-model="editTeacher.mName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Middle Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-last-name">Last Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-last-name"
                        v-model="editTeacher.lName"
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
                    <label for="teacher-edit-gender">Gender</label>
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
                    <label for="teacher-edit-dob">DOB</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-dob"
                        v-model="editTeacher.dob"
                        type="date"
                        class="form-control form-control-lg"
                        placeholder="DOB"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-primary-phone-no">Primary Phone Number</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-primary-phone-no"
                        v-model="editTeacher.phoneP"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Primary Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-secondary-phone-no">Secondary Phone Number</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-secondary-phone-no"
                        v-model="editTeacher.phoneS"
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
                    <label for="teacher-edit-whatsapp-no">Whatsapp Number</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-whatsapp-no"
                        v-model="editTeacher.phoneW"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Whatsapp Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-email-id">Email ID</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-email-id"
                        v-model="editTeacher.email"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-address">Address</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-address"
                        v-model="editTeacher.address"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-pin-code">PIN Code</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-pin-code"
                        v-model="editTeacher.pinCode"
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
                    <label for="teacher-edit-country">Country</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-country"
                        v-model="editTeacher.country"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-state">State</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-state"
                        v-model="editTeacher.state"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-city">City</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-city"
                        v-model="editTeacher.city"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12">
                  <div class="form-group">
                    <label for="teacher-edit-site-uname">Site User Name</label>
                    <div class="input-group">
                      <input
                        id="teacher-edit-site-uname"
                        v-model="editTeacher.userName"
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
    <!--Modal Edit teacher Ends-->
    <!--Modal Delete Teacher Starts-->
    <div id="delete-teacher" class="modal fade" role="dialog">
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
                <button ref="closeDeleteTeacher" class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div id="delete-teacher-bulk" class="modal fade" role="dialog">
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
                  {{ selectedUsersList.length ? 'Delete selected Teachers' : 'Delete all Teachers' }}
                </div>
                <br />
                <div class="alert-cst-text">You won't be able to revert this!</div>
              </div>
              <div class="alert-cst-footer">
                <button type="submit" class="btn btn-danger mr-2">Clear</button>
                <button ref="closeDeleteTeacherBulk" class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Delete Teacher  End-->
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { mapState } from 'vuex'
import SingleSelect from '~/components/templates/common/SingleSelect'

Vue.component('v-select', vSelect)
export default {
  components: {
    SingleSelect
  },
  data() {
    return {
      selectedUser: '',
      editTeacher: '',
      teacherForm: {
        role: 'TEACHER'
      },
      selectMode: 'multi',
      selectedUsersList: [],
      checkListTeacher: [],

      optionsGender: ['Please select an option', 'Male', 'Female'],
      selectedGender: 'Please select an option',

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
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 25],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      teacherCSV: null,
      teachersFieldsMap: {
        fName: 'First Name',
        mName: 'Middle Name',
        lName: 'Last Name',
        usn: 'Employee ID',
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
      teachers: (state) => state.userManagement.teachers
    }),
    totalRows() {
      return this.teachers ? this.teachers.length : 1
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
    async addTeacher() {
      if (this.selectedGender === 'Please select an option') {
        return
      }
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
    async importTeachers() {
      if (!this.teacherCSV) {
        console.log('select file first')
        return
      }
      try {
        const teachersList = this.teacherCSV.slice(1)
        const response = await this.$store.dispatch('userManagement/importUsers', {
          path: this.$store.getters.getPath,
          data: teachersList,
          role: 'TEACHER'
        })
        console.log('import students ' + response)
        await this.$store.dispatch('userManagement/fetchStudents', this.$store.getters.getPath)
        this.$refs.upload_csv_std.click()
      } catch (err) {
        console.log(err)
      }
    },
    async updateTeacher() {
      try {
        const response = await this.$store.dispatch('userManagement/updateUser', {
          path: this.$store.getters.getPath,
          data: this.editTeacher,
          id: this.editTeacher.id
        })
        console.log(response)
        this.$refs.closeTeacherEdit.click()
      } catch (err) {
        console.log(err)
      }
    },
    editUser(teacher) {
      this.editTeacher = teacher ? JSON.parse(JSON.stringify(teacher)) : {}
      this.selectedGender = teacher ? teacher.gender : this.selectedGender
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
        this.$refs.closeDeleteTeacher.click()
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
        } else if (this.teachers) {
          this.teachers.forEach((user) => {
            userIds.push(user.id)
          })
        }
        await this.$store.dispatch('userManagement/deleteUsersBulk', {
          path: this.$store.getters.getPath,
          data: userIds,
          role: 'TEACHER'
        })
        this.$refs.closeDeleteTeacherBulk.click()
      } catch (err) {
        console.log(err)
      }
    },

    onRowSelectedTeacher(items) {
      this.selectedUsersList = items
    }
  }
}
</script>
<style></style>
