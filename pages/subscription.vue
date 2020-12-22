<template>
  <div class="custom-bodypad">
    <div class="row mt-3 mb-3">
      <div class="col-lg-6 m-auto">
        <div class="card">
          <div class="card-body">
            <div class="form-group m-auto text-center p-5 pt-5">
              <h6 for="total-licenses">Subscribe for a plan to get started</h6>
              <nuxt-link
                to="select-plan"
                class="btn btn-primary ml-auto"
                type="button"
              >Subscribe now</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 mb-3">
      <div class="col-lg-6 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center mb-2 pb-3 border-bottom">
              <div class="wrapper d-flex align-items-center media-info text-facebook">
                <h4 class="card-title float-left">User Licenses</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex text-white">
                  <nuxt-link class="btn btn-primary btn-fw" to="select-plan">
                    <i class="mdi mdi-account-card-details btn-icon-prepend"></i> Manage
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <h2 for="total-licenses" class="col-sm-8 col-form-label">Plan Selected</h2>
              <div class="col-sm-4">
                <h4 class="card-text mb-0 text-right">Plan A</h4>
              </div>
            </div>
            <div class="form-group row">
              <h2 for="total-licenses" class="col-sm-8 col-form-label">Total Available Licenses</h2>
              <div class="col-sm-4">
                <h3 class="card-text mb-0 text-right">56</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center mb-2 pb-3 border-bottom">
              <div class="wrapper d-flex align-items-center media-info text-facebook">
                <h4 class="card-title float-left">Payment Subscription</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex text-white">
                  <a
                    class="btn btn-primary btn-fw"
                    data-toggle="modal"
                    data-target="#clear_all"
                    href="#"
                  >
                    <i class="mdi mdi-account-card-details btn-icon-prepend"></i> Cancel Subscription
                  </a>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <h2 for="subscription-amount" class="col-sm-8 col-form-label">Subscription Amount</h2>
              <div class="col-sm-4">
                <h3 class="card-text mb-0 text-right">5000</h3>
              </div>
            </div>
            <div class="form-group row">
              <h3 for="renewal-on" class="col-sm-8 col-form-label">Payment Cycle</h3>
              <div class="col-sm-4">
                <h5 class="card-text mb-0 text-right">Yearly</h5>
              </div>
            </div>
            <div class="form-group row">
              <h3 for="renewal-on" class="col-sm-8 col-form-label">Renewal on</h3>
              <div class="col-sm-4">
                <h5 class="card-text mb-0 text-right">05/06/2020</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Clear all Starts-->
    <div id="clear_all" class="modal fade" role="dialog">
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
                <button type="submit" class="btn btn-danger mr-2">Cancel</button>
                <button class="btn btn-light">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Clear all  End-->
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card border-bottom">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center pb-3">
              <div class="wrapper d-flex align-items-center media-info text-facebook">
                <h4 class="card-title float-left">Transaction History</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex text-white"></div>
              </div>
            </div>
            <div class="table-responsive">
              <b-container fluid>
                <!-- User Interface controls -->
                <b-row>
                  <b-col sm="6" md="3" class="my-1">
                    <b-form-fieldset
                      horizontal
                      label="Rows per page"
                      class="col-lg-6 col-sm-12"
                      :label-size="6"
                    >
                      <b-form-select
                        v-model="perPage"
                        id="perPageSelect"
                        size="sm"
                        :options="pageOptions"
                      ></b-form-select>
                    </b-form-fieldset>
                  </b-col>

                  <b-col sm="6" md="9" class="my-1 float-right">
                    <b-form-fieldset
                      horizontal
                      label="Search"
                      class="float-right col-lg-6 col-sm-12"
                      :label-size="2"
                    >
                      <b-input-group size="sm">
                        <b-form-input
                          v-model="filter"
                          type="search"
                          id="filterInput"
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
                  responsive="true"
                  sticky-header
                  head-variant="light"
                  :items="items"
                  :fields="fields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filterIncludedFields="filterOn"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  @filtered="onFiltered"
                >
                  <template v-slot:cell(enableDisable)>
                    <label class="switch" for="schoolcheck">
                      <input type="checkbox" id="schoolcheck" />
                      <div class="slider round"></div>
                    </label>
                  </template>
                  <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>
                  <template v-slot:cell(actions)>
                    <a href="#" class="actn-btn">
                      <i class="mdi mdi-download"></i>
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
                      size="md"
                      class="float-right"
                      :total-rows="this.items.length"
                      :per-page="perPage"
                      v-model="currentPage"
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
                <h4 class="card-title float-left">Payment History</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex text-white"></div>
              </div>
            </div>
            <div class="table-responsive">
              <b-container fluid>
                <!-- User Interface controls -->
                <b-row>
                  <b-col sm="6" md="3" class="my-1">
                    <b-form-fieldset
                      horizontal
                      label="Rows per page"
                      class="col-lg-6 col-sm-12"
                      :label-size="6"
                    >
                      <b-form-select
                        v-model="perPage"
                        id="perPageSelect"
                        size="sm"
                        :options="pageOptions"
                      ></b-form-select>
                    </b-form-fieldset>
                  </b-col>

                  <b-col sm="6" md="9" class="my-1 float-right">
                    <b-form-fieldset
                      horizontal
                      label="Search"
                      class="float-right col-lg-6 col-sm-12"
                      :label-size="2"
                    >
                      <b-input-group size="sm">
                        <b-form-input
                          v-model="filter"
                          type="search"
                          id="filterInput"
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
                  responsive="true"
                  sticky-header
                  head-variant="light"
                  :items="paymentHistoryData"
                  :fields="paymentHistoryFields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filterIncludedFields="filterOn"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  @filtered="onFiltered"
                >
                  <template v-slot:cell(enableDisable)>
                    <label class="switch" for="schoolcheck">
                      <input type="checkbox" id="schoolcheck" />
                      <div class="slider round"></div>
                    </label>
                  </template>
                  <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>
                  <template v-slot:cell(actions)>
                    <a href="#" class="actn-btn">
                      <i class="mdi mdi-download"></i>
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
                      size="md"
                      class="float-right"
                      :total-rows="this.items.length"
                      :per-page="perPage"
                      v-model="currentPage"
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
                <h4 class="card-title float-left">Subscription Methods Activated</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex text-white"></div>
              </div>
            </div>
            <div class="table-responsive">
              <b-container fluid>
                <!-- User Interface controls -->
                <b-row>
                  <b-col sm="6" md="3" class="my-1">
                    <b-form-fieldset
                      horizontal
                      label="Rows per page"
                      class="col-lg-6 col-sm-12"
                      :label-size="6"
                    >
                      <b-form-select
                        v-model="perPage"
                        id="perPageSelect"
                        size="sm"
                        :options="pageOptions"
                      ></b-form-select>
                    </b-form-fieldset>
                  </b-col>

                  <b-col sm="6" md="9" class="my-1 float-right">
                    <b-form-fieldset
                      horizontal
                      label="Search"
                      class="float-right col-lg-6 col-sm-12"
                      :label-size="2"
                    >
                      <b-input-group size="sm">
                        <b-form-input
                          v-model="filter"
                          type="search"
                          id="filterInput"
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
                  responsive="true"
                  sticky-header
                  head-variant="light"
                  :items="subscriptionData"
                  :fields="subscriptionFields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filterIncludedFields="filterOn"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  @filtered="onFiltered"
                >
                  <template v-slot:cell(enableDisable)>
                    <label class="switch" for="schoolcheck">
                      <input type="checkbox" id="schoolcheck" />
                      <div class="slider round"></div>
                    </label>
                  </template>
                  <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>
                  <template v-slot:cell(actions)>
                    <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-subMethod">
                      <i class="mdi mdi-pencil"></i>
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
                      size="md"
                      class="float-right"
                      :total-rows="this.items.length"
                      :per-page="perPage"
                      v-model="currentPage"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Modal edit  Starts-->
    <div id="edit-subMethod" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Choose Subscription Method</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample">
              <h3 for="assessmentUpload" class="col-sm-10 col-form-label">Payment Method</h3>
              <div class="form-group row pl-3">
                <div class="col-sm-6">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="membershipRadios"
                        id="subscription-neftrtgs"
                        value
                      /> NEFT/RTGS
                      <i class="input-helper"></i>
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="membershipRadios"
                        id="subscription-razorpay"
                        value
                        checked
                      /> RazorPay
                      <i class="input-helper"></i>
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </div>
              </div>
              <h3 for="assessmentUpload" class="col-sm-10 col-form-label">Cycle Duration</h3>
              <div class="form-group row pl-3">
                <div class="col-sm-6">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="cycleRadios"
                        id="cycle-monthly"
                        value
                        checked
                      /> Monthly
                      <i class="input-helper"></i>
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="cycleRadios"
                        id="cycle-quarterly"
                        value
                        checked
                      /> Quarterly
                      <i class="input-helper"></i>
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="cycleRadios"
                        id="cycle-halfly"
                        value
                        checked
                      /> Halfly
                      <i class="input-helper"></i>
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="cycleRadios"
                        id="cycle-yearly"
                        value
                        checked
                      /> Yearly
                      <i class="input-helper"></i>
                      <i class="input-helper"></i>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary mr-2">Save</button>
            <button class="btn btn-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!--Modal edit  End-->
    <!--Modal manage licenses  Starts-->
    <div id="manage-licenses" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--progress bar-->
          <div class="row">
            <div class="col-12 col-lg-8 ml-auto mr-auto mb-4" style="display: none;">
              <div class="multisteps-form__progress">
                <button
                  class="multisteps-form__progress-btn js-active"
                  type="button"
                  title="Step 1"
                >Step 1</button>
                <button class="multisteps-form__progress-btn" type="button" title="Step 2">Step 2</button>
              </div>
            </div>
          </div>
          <form class="multisteps-form__form" @submit.prevent="createTimetable">
            <!--single form panel-->
            <div
              class="multisteps-form__panel shadow p-4 rounded bg-white js-active"
              data-animation="scaleIn"
            >
              <h3 class="multisteps-form__title">Manage Licenes</h3>
              <div class="multisteps-form__content">
                <div class="form-row mt-4">
                  <div class="col-12 col-sm-12">
                    <div class="form-group">
                      <label>Licenses</label>
                      <input
                        class="multisteps-form__input form-control"
                        type="number"
                        placeholder="Licenses"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
                <div class="button-row d-flex mt-4">
                  <button
                    @click="stepsFormClick($event)"
                    class="btn btn-primary ml-auto js-btn-next"
                    type="button"
                    title="Next"
                  >Next</button>
                </div>
              </div>
            </div>
            <!--single form panel-->
            <div
              class="multisteps-form__panel shadow p-4 rounded bg-white"
              data-animation="scaleIn"
            >
              <h3 class="multisteps-form__title">Subscription Details</h3>
              <div class="multisteps-form__content">
                <div class="form-group row">
                  <div class="col-sm-3">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="membershipRadios"
                          id="membershipMonthly"
                          value
                          checked
                        /> Monthly
                        <i class="input-helper"></i>
                        <i class="input-helper"></i>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="membershipRadios"
                          id="membershipQuarterly"
                          value
                          checked
                        /> Quarterly
                        <i class="input-helper"></i>
                        <i class="input-helper"></i>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="membershipRadios"
                          id="membershipYearly"
                          value="option2"
                        /> Yearly
                        <i class="input-helper"></i>
                        <i class="input-helper"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-row mt-4">
                  <div class="col-12 col-sm-12">
                    <div class="form-group">
                      <label>Subscription Amount</label>
                      <h4 class="text-muted">5000</h4>
                    </div>
                  </div>
                </div>
                <div class="button-row d-flex mt-4">
                  <button
                    @click="stepsFormClick($event)"
                    class="btn btn-primary js-btn-prev"
                    type="button"
                    title="Prev"
                  >Prev</button>
                  <button
                    @click="stepsFormClick($event)"
                    class="btn btn-primary ml-auto"
                    type="button"
                    title="Finish"
                  >Confirm</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--Modal reject all  End-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      DOMstrings: {
        stepsBtnClass: 'multisteps-form__progress-btn',
        stepsBtns: null,
        stepsBar: null,
        stepsForm: null,
        stepsFormTextareas: null,
        stepFormPanelClass: 'multisteps-form__panel',
        stepFormPanels: null,
        stepPrevBtnClass: 'js-btn-prev',
        stepNextBtnClass: 'js-btn-next'
      },
      items: [
        {
          isActive: true,
          transactionId: 'RAZ1012',
          orderId: 'OD56000',
          amount: '50000',
          paymentMethod: 'RazorPay',
          status: 'Paid',
          date: '05-06-2020'
        },
        {
          isActive: true,
          transactionId: '7895620',
          orderId: 'OD58000',
          amount: '90000',
          paymentMethod: 'NEFT/RTGS',
          status: 'Paid',
          date: '09-06-2020'
        }
      ],
      fields: [
        { key: 'transactionId', label: 'Transaction ID', sortable: true, sortDirection: 'desc' },
        { key: 'orderId', label: 'Order ID', sortable: true, sortDirection: 'desc' },
        { key: 'amount', label: 'Amount (INR)', sortable: true, sortDirection: 'desc' },
        { key: 'paymentMethod', label: 'Payment Method', sortable: true, sortDirection: 'desc' },
        { key: 'status', label: 'Status', sortable: true, sortDirection: 'desc' },
        { key: 'date', label: 'Date', sortable: true, sortDirection: 'desc' },
        { key: 'actions', label: 'Actions' }
      ],
      paymentHistoryData: [
        {
          isActive: true,
          schoolName: 'Christ University',
          transactionId: 'RAZ1012',
          orderId: 'OD56000',
          amount: '50000',
          paymentMethod: 'RazorPay',
          status: 'Paid',
          date: '05-06-2020'
        },
        {
          isActive: true,
          schoolName: 'Jain University',
          transactionId: '78956200',
          orderId: 'OD58000',
          amount: '90000',
          paymentMethod: 'NEFT/RTGS',
          status: 'Paid',
          date: '09-06-2020'
        }
      ],
      paymentHistoryFields: [
        { key: 'schoolName', label: 'Transaction ID', sortable: true, sortDirection: 'desc' },
        { key: 'transactionId', label: 'Transaction ID', sortable: true, sortDirection: 'desc' },
        { key: 'orderId', label: 'Order ID', sortable: true, sortDirection: 'desc' },
        { key: 'amount', label: 'Amount (INR)', sortable: true, sortDirection: 'desc' },
        { key: 'paymentMethod', label: 'Payment Method', sortable: true, sortDirection: 'desc' },
        { key: 'status', label: 'Status', sortable: true, sortDirection: 'desc' },
        { key: 'date', label: 'Date', sortable: true, sortDirection: 'desc' },
        { key: 'actions', label: 'Actions' }
      ],
      subscriptionData: [
        {
          isActive: true,
          schoolName: 'Christ University',
          subscriptionMethods: 'RazorPay',
          cycleDuration: 'Monthly'
        },
        {
          isActive: true,
          schoolName: 'Jain University',
          subscriptionMethods: 'NEFT/RTGS',
          cycleDuration: 'Yearly'
        }
      ],
      subscriptionFields: [
        { key: 'schoolName', label: 'Transaction ID', sortable: true, sortDirection: 'desc' },
        { key: 'subscriptionMethods', label: 'Subscription Methods', sortable: true, sortDirection: 'desc' },
        { key: 'cycleDuration', label: 'Cycle Duration', sortable: true, sortDirection: 'desc' },
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
  destroyed() {
    window.removeEventListener('load', this.setFormHeight, false)

    window.removeEventListener('resize', this.setFormHeight, false)
  },
  mounted() {
    this.initDomStrings()
    // SETTING PROPER FORM HEIGHT ONLOAD
    window.addEventListener('load', this.setFormHeight, false)
    // SETTING PROPER FORM HEIGHT ONRESIZE
    window.addEventListener('resize', this.setFormHeight, false)

    this.totalRows = this.items.length
  },
  methods: {
    // form submit
    createTimetable() {
      // validate the details and store it in db
    },

    // get dome references after loaded
    initDomStrings() {
      this.DOMstrings.stepsBtns = document.querySelectorAll('.multisteps-form__progress-btn')
      this.DOMstrings.stepsBar = document.querySelector('.multisteps-form__progress')
      this.DOMstrings.stepsForm = document.querySelector('.multisteps-form__form')
      this.DOMstrings.stepsFormTextareas = document.querySelectorAll('.multisteps-form__textarea')
      this.DOMstrings.stepFormPanels = document.querySelectorAll('.multisteps-form__panel')
    },
    // remove class from a set of items
    removeClasses(elemSet, className) {
      elemSet.forEach(function(elem) {
        elem.classList.remove(className)
      })
    },
    // return exect parent node of the element
    findParent(elem, parentClass) {
      let currentNode = elem
      while (!currentNode.classList.contains(parentClass)) {
        currentNode = currentNode.parentNode
      }
      return currentNode
    },

    // get active button step number
    getActiveStep(elem) {
      return Array.from(this.DOMstrings.stepsBtns).indexOf(elem)
    },
    // set all steps before clicked (and clicked too) to active
    setActiveStep(activeStepNum) {
      // remove active state from all the state
      this.removeClasses(this.DOMstrings.stepsBtns, 'js-active')

      // set picked items to active
      this.DOMstrings.stepsBtns.forEach((elem, index) => {
        if (index <= activeStepNum) {
          elem.classList.add('js-active')
        }
      })
    },
    // get active panel
    getActivePanel() {
      let activePanel = null
      this.DOMstrings.stepFormPanels.forEach((elem) => {
        if (elem.classList.contains('js-active')) {
          activePanel = elem
        }
      })
      return activePanel
    },

    // open active panel (and close unactive panels)
    setActivePanel(activePanelNum) {
      // remove active class from all the panels
      this.removeClasses(this.DOMstrings.stepFormPanels, 'js-active')
      // show active panel
      this.DOMstrings.stepFormPanels.forEach((elem, index) => {
        if (index === activePanelNum) {
          elem.classList.add('js-active')
          this.setFormHeight(elem)
        }
      })
    },

    // set form height equal to current panel height
    formHeight(activePanel) {
      const activePanelHeight = activePanel.offsetHeight
      this.DOMstrings.stepsForm.style.height = activePanelHeight + 'px'
    },

    setFormHeight() {
      const activePanel = this.getActivePanel()
      this.formHeight(activePanel)
    },

    // STEPS BAR CLICK FUNCTION
    stepsBarClick(e) {
      // check if click target is a step button
      const eventTarget = e.target
      if (!eventTarget.classList.contains('' + this.DOMstrings.stepsBtnClass)) {
        return
      }
      // get active button step number
      const activeStep = this.getActiveStep(eventTarget)
      // set all steps before clicked (and clicked too) to active
      this.setActiveStep(activeStep)
      // open active panel
      this.setActivePanel(activeStep)
    },

    // PREV/NEXT BTNS CLICK
    stepsFormClick(e) {
      const eventTarget = e.target
      // check if we clicked on `PREV` or NEXT` buttons
      if (
        !(
          eventTarget.classList.contains('' + this.DOMstrings.stepPrevBtnClass) ||
          eventTarget.classList.contains('' + this.DOMstrings.stepNextBtnClass)
        )
      ) {
        return
      }
      // find active panel
      const activePanel = this.findParent(eventTarget, '' + this.DOMstrings.stepFormPanelClass)
      let activePanelNum = Array.from(this.DOMstrings.stepFormPanels).indexOf(activePanel)
      // set active step and active panel onclick
      if (eventTarget.classList.contains('' + this.DOMstrings.stepPrevBtnClass)) {
        activePanelNum--
      } else {
        activePanelNum++
      }
      this.setActiveStep(activePanelNum)
      this.setActivePanel(activePanelNum)
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
