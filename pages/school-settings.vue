<template>
  <div class="custom-bodypad">
    <div class="row mt-3 mb-3">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="d-flex border-bottom pb-3">Features</h4>
            <div class="form-group row">
              <h3 for="chat" class="col-sm-10 col-form-label">Chat</h3>
              <div class="col-sm-2">
                <label class="switch" for="checkbox1">
                  <input id="checkbox1" type="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
            </div>
            <div class="form-group row">
              <h3 for="liveClass" class="col-sm-10 col-form-label">Live Class</h3>
              <div class="col-sm-2">
                <label class="switch" for="checkbox2">
                  <input id="checkbox2" type="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="d-flex border-bottom pb-3">Uploads</h4>
            <div class="form-group row">
              <h3 for="assessmentUpload" class="col-sm-10 col-form-label">Assessment Uploads</h3>
              <div class="col-sm-2">
                <label class="switch" for="checkbox3">
                  <input id="checkbox3" type="checkbox" disabled />
                  <div class="slider round"></div>
                </label>
              </div>
            </div>
            <div class="form-group row">
              <h3 for="elearningUpload" class="col-sm-10 col-form-label">E-learning Uploads</h3>
              <div class="col-sm-2">
                <label class="switch" for="checkbox4">
                  <input id="checkbox4" type="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
            </div>
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
                <h4 class="card-title float-left">Organization Request</h4>
              </div>
              <!-- <div class="wrapper ml-auto action-bar kanban-toolbar">
                        <div class="d-flex">                                
                        </div>
              </div>-->
            </div>
            <div class="table-responsive">
              <b-container fluid>
                <!-- User Interface controls -->
                <b-row>
                  <b-col sm="6" md="3" class="my-1">
                    <b-form-fieldset horizontal label="Rows per page" class="col-lg-6 col-sm-12" :label-size="6">
                      <b-form-select
                        id="perPageSelect"
                        v-model="perPage"
                        size="sm"
                        :options="pageOptions"
                      ></b-form-select>
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
                  bordered
                  show-empty
                  responsive="true"
                  sticky-header
                  head-variant="light"
                  :items="requests"
                  :fields="requestFields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filter-included-fields="filterOn"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  @filtered="onFiltered"
                >
                 <template v-slot:cell(schoolURL)="data">
                    <a v-bind:href="`${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`" target="_blank">url</a>
                 </template>
                  <template v-slot:cell(actions)="data">
                    <nuxt-link class="actn-btn" :to="{ name: 'edit-school-requests-id', params: { id: data.item.id } }">
                      <i class="mdi mdi-checkbox-marked"></i>
                    </nuxt-link>
                    <a
                      href="#"
                      class="actn-btn"
                      data-toggle="modal"
                      data-target="#reject-org"
                      @click="selectSchoolId(data.item.id, 'rejectSchoolRequest')"
                    >
                      <i class="mdi mdi-close-box"></i>
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
                      :total-rows="requests.length"
                      :per-page="perPage"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
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
                <h4 class="card-title float-left">School Accounts</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex text-white">
                  <nuxt-link class="btn btn-primary btn-fw" to="/add-school">
                    <i class="mdi mdi-bank btn-icon-prepend"></i> Add School
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <b-container fluid>
                <!-- User Interface controls -->
                <b-row>
                  <b-col sm="6" md="3" class="my-1">
                    <b-form-fieldset horizontal label="Rows per page" class="col-lg-6 col-sm-12" :label-size="6">
                      <b-form-select
                        id="perPageSelect"
                        v-model="perPage"
                        size="sm"
                        :options="pageOptions"
                      ></b-form-select>
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
                  bordered
                  show-empty
                  responsive="true"
                  sticky-header
                  head-variant="light"
                  :items="accounts"
                  :fields="schoolFields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filter-included-fields="filterOn"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  @filtered="onFiltered"
                >
                  <template v-slot:cell(enableDisable)>
                    <label class="switch" for="schoolcheck">
                      <input id="schoolcheck" type="checkbox" />
                      <div class="slider round"></div>
                    </label>
                  </template>
                  <template v-slot:cell(schoolURL)="data">
                    <a :href="`${data.value.replace(/[^a-z]+/i, '-').toLowerCase()}`" target="_blank">{{
                      data.value
                    }}</a>
                  </template>
                  <template v-slot:cell(resetAllData)>
                    <button class="btn small-icon btn btn-danger">RESET</button>
                  </template>
                  <template v-slot:cell(actions)="data">
                    <nuxt-link :to="{ name: 'edit-school-accounts-id', params: { id: data.item.id } }" class="actn-btn">
                      <i class="mdi mdi-pencil"></i>
                    </nuxt-link>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#reject-org"
                      class="actn-btn"
                      @click="selectSchoolId(data.item.id, 'deleteSchoolAccount')"
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
                      :total-rows="accounts.length"
                      :per-page="perPage"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Modal reject org Starts-->
    <div id="reject-org" class="modal fade" role="dialog">
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
                <button class="btn btn-danger mr-2" @click="deleteSchool">Reject</button>
                <button class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal reject End-->
    <!-- Modal delete scool Starts-->
    <!-- <div id="delete-school" class="modal fade" role="dialog">
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
                <button class="btn btn-danger mr-2" @click="deleteSchool">Delete</button>
                <button class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>-->
    <!--Modal delete school End -->
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card border-bottom">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center pb-3">
              <div class="wrapper d-flex align-items-center media-info">
                <h4 class="card-title float-left">Coupon</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex text-white">
                  <a class="btn btn-primary btn-fw" href="#" data-toggle="modal" data-target="#add-coupon">
                    <i class="mdi mdi-ticket btn-icon-prepend"></i> Add Coupon
                  </a>
                </div>
              </div>
            </div>
            <!--Modal Add Coupon Starts-->
            <div id="add-coupon" class="modal fade" role="dialog">
              <div class="modal-dialog modal-md" role="document">
                <div class="modal-content">
                  <div class="modal-header modal-bg">
                    <h5 class="modal-title">Add Coupon</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body modal-bg">
                    <form ref="passwordForm" class="forms-sample" @submit.prevent="changePassword">
                      <div class="modal-body modal-bg">
                        <div class="form-group">
                          <div class="clearfix">
                            <label class="float-left" for="school-name">School Name</label>
                          </div>
                          <SingleSelect
                            :options="options"
                            :initial-value="selectedCollege"
                            @onChange="onSelectedCollegeChange"
                          />
                        </div>
                        <div class="form-group">
                          <div class="clearfix">
                            <label class="float-left" for="discount">Discount(%)</label>
                          </div>
                          <input id="discount" type="number" class="form-control" placeholder="Discount(%)" />
                        </div>
                        <div class="form-group">
                          <div class="clearfix">
                            <label class="float-left" for="validity-day">Coupon Validity(days)</label>
                          </div>
                          <input id="validity-day" type="number" class="form-control" placeholder="Validity Date" />
                        </div>
                        <div class="form-group">
                          <div class="clearfix">
                            <label class="float-left" for="expiry-date">Expiry Date</label>
                          </div>
                          <input id="expiry-date" type="date" class="form-control" placeholder="Expiry Date" />
                        </div>
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
            <!--Modal Add Coupon Ends-->
            <div class="table-responsive">
              <b-container fluid>
                <!-- User Interface controls -->
                <b-row>
                  <b-col sm="6" md="3" class="my-1">
                    <b-form-fieldset horizontal label="Rows per page" class="col-lg-6 col-sm-12" :label-size="6">
                      <b-form-select
                        id="perPageSelect"
                        v-model="perPage"
                        size="sm"
                        :options="pageOptions"
                      ></b-form-select>
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
                  bordered
                  show-empty
                  responsive="true"
                  sticky-header
                  head-variant="light"
                  :items="couponData"
                  :fields="couponFields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filter-included-fields="filterOn"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  @filtered="onFiltered"
                >
                  <template v-slot:cell(enableDisable)>
                    <label class="switch" for="couponCheck">
                      <input id="couponCheck" type="checkbox" />
                      <div class="slider round"></div>
                    </label>
                  </template>

                  <template v-slot:cell(actions)>
                    <a href="#" data-toggle="modal" data-target="#delete-coupon" class="actn-btn">
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
                      :total-rows="accounts.length"
                      :per-page="perPage"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal delete scool Starts-->
    <div id="delete-coupon" class="modal fade" role="dialog">
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
                <button class="btn btn-danger mr-2" @click="deleteCoupon">Delete</button>
                <button class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal delete school End -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SingleSelect from '~/components/templates/common/SingleSelect'
export default {
  components: {
    SingleSelect
  },
  data() {
    return {
      options: ['Jain Univeristy', 'Christ University', 'Expert College'],
      selectedCollege: 'Jain Univeristy',
      schoolSelectedId: undefined,
      schoolSelectedAction: '',
      requestFields: [
        { key: 'name', label: 'Institution Full Name', sortable: true, sortDirection: 'desc' },
        { key: 'contactName', label: 'Contact Person/Principal name', sortable: true, sortDirection: 'desc' },
        { key: 'numOfStudents', label: 'Number of Students', sortable: true, sortDirection: 'desc' },
        { key: 'email', label: 'Email Address', sortable: true, sortDirection: 'desc' },
        { key: 'contactPhone', label: 'Contact Phone Number 1', sortable: true, sortDirection: 'desc' },
        { key: 'board', label: 'Affiliated Board', sortable: true, sortDirection: 'desc' },
        { key: 'schoolURL', label: 'School Website Url', sortable: true, sortDirection: 'desc' },
        { key: 'contactMobile', label: 'Contact Mobile Number', sortable: true, sortDirection: 'desc' },
        { key: 'date', label: 'Date', sortable: true, sortDirection: 'desc' },
        { key: 'actions', label: 'Actions' }
      ],
      schoolFields: [
        { key: 'enableDisable', label: 'Enable/Disable' },
        { key: 'name', label: 'Institution Full Name', sortable: true, sortDirection: 'desc' },
        { key: 'shortCode', label: 'School Short Code', sortable: true, sortDirection: 'desc' },
        { key: 'email', label: 'Email Address', sortable: true, sortDirection: 'desc' },
        { key: 'contactPhone', label: 'Contact Phone Number', sortable: true, sortDirection: 'desc' },
        { key: 'board', label: 'Affiliated Board', sortable: true, sortDirection: 'desc' },
        { key: 'schoolURL', label: 'School Website Url', sortable: true, sortDirection: 'desc' },
        { key: 'contactMobile', label: 'Contact Mobile Number', sortable: true, sortDirection: 'desc' },
        { key: 'resetAllData', label: 'Reset' },
        { key: 'actions', label: 'Actions' }
      ],
      couponData: [
        { key: 'schoolName', label: 'Jain University', sortable: true, sortDirection: 'desc' },
        { key: 'couponCode', label: 'SKPLCE100', sortable: true, sortDirection: 'desc' },
        { key: 'discount', label: '10%', sortable: true, sortDirection: 'desc' },
        { key: 'validity', label: '30', sortable: true, sortDirection: 'desc' },
        { key: 'expiryDate', label: '05-09-2020', sortable: true, sortDirection: 'desc' },
        { key: 'status', label: 'Active', sortable: true, sortDirection: 'desc' }
      ],
      couponFields: [
        { key: 'enableDisable', label: 'Enable/Disable' },
        { key: 'schoolName', label: 'School Name', sortable: true, sortDirection: 'desc' },
        { key: 'couponCode', label: 'Coupon Code', sortable: true, sortDirection: 'desc' },
        { key: 'discount', label: 'Discount', sortable: true, sortDirection: 'desc' },
        { key: 'validity', label: 'Coupon Validity(Days)', sortable: true, sortDirection: 'desc' },
        { key: 'expiryDate', label: 'Expiry Date', sortable: true, sortDirection: 'desc' },
        { key: 'status', label: 'Status', sortable: true, sortDirection: 'desc' },
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
      filterOn: []
    }
  },
  computed: {
    ...mapGetters({
      requests: 'settings/getSchoolRequests',
      accounts: 'settings/getSchoolAccounts'
    })
  },
  created() {
    this.$store.dispatch('settings/fetchSchoolRequests')
    this.$store.dispatch('settings/fetchSchoolAccounts')
  },
  methods: {
    deleteCoupon() {},
    onFiltered() {},
    // used to delete both school requests and accounts
    deleteSchool() {
      this.$store.dispatch(`settings/${this.schoolSelectedAction}`, this.schoolSelectedId)
    },
    selectSchoolId(id, action) {
      this.schoolSelectedId = id
      this.schoolSelectedAction = action
    },
    onSelectedCollegeChange(value) {
      this.selectedCollege = value
    }
  }
}
</script>

<style scoped>
.table-responsive .table td:last-child {
  border-right: 2px solid;
}
.table-responsive .table {
  border: 2px solid;
}
</style>
