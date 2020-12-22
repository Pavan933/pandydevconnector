<template>
  <div class="custom-bodypad">
    <div class="row mt-3 mb-3">
      <div class="col-12">
        <div class="multisteps-form">
          <!--progress bar-->
          <div class="row mt-2">
            <div class="col-12 col-lg-8 ml-auto mr-auto mb-4">
              <div class="multisteps-form__progress" @click="stepsBarClick($event)">
                <button class="multisteps-form__progress-btn js-active" type="button">Select Plan</button>
                <button class="multisteps-form__progress-btn" type="button">User Licenses</button>
              </div>
            </div>
          </div>
          <!--form panels-->
          <div class="row">
            <div class="col-12 grid-margin col-lg-12 m-auto">
              <form class="multisteps-form__form form-group" @submit.prevent="createTimetable">
                <!--single form panel-->
                <div
                  class="multisteps-form__panel shadow p-4 rounded bg-white js-active form-group"
                  data-animation="scaleIn"
                >
                  <div class="multisteps-form__content">
                    <div class="container text-center pt-5">
                      <h4 class="mb-5">Start your on-demand learning platform subscription today</h4>
                      <!--  <p
                class="w-75 mx-auto mb-5"
              >Choose a plan that suits you the best. If you are not fully satisfied, we offer 30-day money-back guarantee no questions asked!!</p>
                      -->
                      <div class="row pricing-table">
                        <div class="col-md-6 col-sm-12 grid-margin stretch-card pricing-card">
                          <div
                            class="card border pricing-card-body plan-head-a"
                            :class="{'plan-selected':selected=='planA'}"
                          >
                            <div class="text-center pricing-card-head .plan-head-a">
                              <div class="plan-head-a pt-2 pb-2">
                                <h3
                                  class="m-0"
                                  :class="{'text-selected':selected=='planA'}"
                                >STANDARD PLAN</h3>
                                <small class="font-weight-bold">Monthly pricing</small>
                              </div>
                              <div class="price-head-a pt-3 pb-3 border-bottom">
                                <div class="wrapper d-flex p-2">
                                  <div class="wrapper ml-3">
                                    <h6 class="mb-1 font-weight-bold">Primary Classes</h6>
                                    <small class="mb-0">(Nursery to 5th Std)</small>
                                  </div>
                                  <div class="ml-auto mr-3 px-1 py-1 text-rupee-center">
                                    <span class="text-rupee">₹</span> 50 per user
                                  </div>
                                </div>
                                <div class="wrapper d-flex p-2">
                                  <div class="wrapper ml-3">
                                    <h6 class="mb-1 font-weight-bold">Junior Classes</h6>
                                    <small class="mb-0">
                                      (6
                                      <sup>th</sup> Std to 8
                                      <sup>th</sup> Std)
                                    </small>
                                  </div>
                                  <div class="ml-auto mr-3 px-1 py-1 text-rupee-center">
                                    <span class="text-rupee">₹</span> 80 per user
                                  </div>
                                </div>
                                <div class="wrapper d-flex p-2">
                                  <div class="wrapper ml-3">
                                    <h6 class="mb-1 font-weight-bold">Senior Classes</h6>
                                    <small class="mb-0">
                                      (9
                                      <sup>th</sup> Std to 12
                                      <sup>th</sup> Std)
                                    </small>
                                  </div>
                                  <div class="ml-auto mr-3 px-1 py-1 text-rupee-center">
                                    <span class="text-rupee">₹</span> 100 per user
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="row">
                                <div class="col-md-8">
                                  <!--  <h5>Keywords</h5> -->
                                  <ul class="list-unstyled plan-features">
                                    <li class="font-weight-bold mb-1">Keywords</li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Host 100+ online classes
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>E-learning functionality
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>On-demand Assessments
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Real-time evaluations
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Chat & QA features
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Screen share and white-board
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Personalized Dashboard
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Detailed reporting
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Alerts and Notifications
                                    </li>
                                  </ul>
                                </div>
                                <div class="col-md-4 d-flex align-items-center mt-md-0">
                                  <div class="border-circle-wrap">
                                    <p class="font-weight-normal text-center border-circle">
                                      560 GB Storage
                                      <sup>*</sup>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="text-center mx-auto">
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    @click="onPriceClick('planA')"
                                    type="radio"
                                    class="form-check-input"
                                    name="optionsRadios"
                                    id="optionsRadios1"
                                    value
                                  />
                                  <i class="input-helper"></i>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12 grid-margin stretch-card pricing-card">
                          <div
                            class="card border pricing-card-body plan-head-b"
                            :class="{'plan-selected':selected=='planB'}"
                          >
                            <div class="text-center pricing-card-head .plan-head-b">
                              <div class="plan-head-b pt-2 pb-2">
                                <h3
                                  class="m-0"
                                  :class="{'text-selected':selected=='planB'}"
                                >PREMIUM PLAN</h3>
                                <small class="font-weight-bold">Monthly pricing</small>
                              </div>
                              <div class="price-head-a pt-3 pb-3 border-bottom">
                                <div class="wrapper d-flex p-2">
                                  <div class="wrapper ml-3">
                                    <h6 class="mb-1 font-weight-bold">Primary Classes</h6>
                                    <small class="mb-0">(Nursery to 5th Std)</small>
                                  </div>
                                  <div class="ml-auto mr-3 px-1 py-1 text-rupee-center">
                                    <span class="text-rupee">₹</span> 100 per user
                                  </div>
                                </div>
                                <div class="wrapper d-flex p-2">
                                  <div class="wrapper ml-3">
                                    <h6 class="mb-1 font-weight-bold">Junior Classes</h6>
                                    <small class="mb-0">
                                      (6
                                      <sup>th</sup> Std to 8
                                      <sup>th</sup> Std)
                                    </small>
                                  </div>
                                  <div class="ml-auto mr-3 px-1 py-1 text-rupee-center">
                                    <span class="text-rupee">₹</span> 120 per user
                                  </div>
                                </div>
                                <div class="wrapper d-flex p-2">
                                  <div class="wrapper ml-3">
                                    <h6 class="mb-1 font-weight-bold">Senior Classes</h6>
                                    <small class="mb-0">
                                      (9
                                      <sup>th</sup> Std to 12
                                      <sup>th</sup> Std)
                                    </small>
                                  </div>
                                  <div class="ml-auto mr-3 px-1 py-1 text-rupee-center">
                                    <span class="text-rupee">₹</span> 150 per user
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div class="row">
                                <div class="col-md-7">
                                  <!--  <h5>Keywords</h5> -->
                                  <ul class="list-unstyled plan-features">
                                    <li class="font-weight-bold mb-1">Keywords</li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Host un-limited online Live classes
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>E-learning functionality
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>On-demand Assessments
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Real-time evaluations
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Chat & QA features
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Screen share and white-board
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Personalized Dashboard
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Detailed reporting
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Alerts and Notifications
                                    </li>
                                    <li>
                                      <i class="mdi mdi-check m-2"></i>Personalized url for schools
                                    </li>
                                  </ul>
                                </div>
                                <div class="col-md-5 d-flex align-items-center mt-md-0">
                                  <div class="border-circle-wrap">
                                    <p class="font-weight-normal text-center border-circle-green">
                                      1020 GB Storage
                                      <sup>*</sup>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="text-center mx-auto">
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    @click="onPriceClick('planB')"
                                    type="radio"
                                    class="form-check-input"
                                    name="optionsRadios"
                                    id="optionsRadios1"
                                    value
                                  />
                                  <i class="input-helper"></i>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-0 text-center">
                        <button
                          class="btn btn-primary ml-auto js-btn-next text-center"
                          type="button"
                          title="Next"
                          @click="stepsFormClick($event)"
                        >Next</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--single form panel-->
                <div
                  class="multisteps-form__panel shadow p-4 rounded bg-white form-group"
                  data-animation="scaleIn"
                >
                  <h3 class="multisteps-form__title">User Licenses</h3>
                  <div class="multisteps-form__content">
                    <div class="form-row mt-4 pt-5 pricing-table">
                      <div class="col-lg-3 col-sm-12 pricing-card">
                        <div
                          class="card border pricing-card-body plan-head-a"
                          :class="{'plan-selected':selected=='planA'}"
                        >
                          <div class="text-center pricing-card-head .plan-head-a">
                            <div class="plan-head-a pt-3 pb-3">
                              <h4 class="m-0">PLAN SELECTED</h4>
                            </div>
                            <div class="price-head-a pt-5 pb-3">
                              <div class="pt-3 pb-3">
                                <h3
                                  class="m-0"
                                  :class="{'text-selected':selected=='planA'}"
                                >STANDARD PLAN</h3>
                                <small class="font-weight-bold">Monthly pricing</small>
                              </div>
                              <button
                                type="button"
                                title="Change Plan"
                                class="btn btn-primary js-btn-prev"
                                @click="stepsFormClick($event)"
                              >Change Plan</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-12 pricing-card">
                        <div class="card border pricing-card-body plan-head-a">
                          <div class="pricing-card-head .plan-head-a p-2 pt-5">
                            <p>Select the no of licneses required for each category</p>
                            <div class="row mt-2 mb-2">
                              <div class="col-lg-8 col-sm-12">
                                <div class="wrapper ml-3">
                                  <h6 class="mb-1 font-weight-bold">Primary Classes</h6>
                                  <small class="mb-0">(Nursery to 5th Std)</small>
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-12">
                                <input
                                  class="form-control-sm"
                                  maxlength="99"
                                  type="number"
                                  min="1"
                                  placeholder="1"
                                />
                              </div>
                            </div>
                            <div class="row mt-2 mb-2">
                              <div class="col-lg-8 col-sm-12">
                                <div class="wrapper ml-3">
                                  <h6 class="mb-1 font-weight-bold">Junior Classes</h6>
                                  <small class="mb-0">
                                    (6
                                    <sup>th</sup> Std to 8
                                    <sup>th</sup> Std)
                                  </small>
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-12">
                                <input
                                  class="form-control-sm"
                                  maxlength="99"
                                  type="number"
                                  min="1"
                                  placeholder="1"
                                />
                              </div>
                            </div>
                            <div class="row mt-2 mb-2">
                              <div class="col-lg-8 col-sm-12">
                                <div class="wrapper ml-3">
                                  <h6 class="mb-1 font-weight-bold">Senior Classes</h6>
                                  <small class="mb-0">
                                    (9
                                    <sup>th</sup> Std to 12
                                    <sup>th</sup> Std)
                                  </small>
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-12">
                                <input
                                  class="form-control-sm"
                                  maxlength="99"
                                  type="number"
                                  min="1"
                                  placeholder="1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-sm-12">
                        <div class="card card-default border">
                          <div class="card-header header-sm">
                            <div class="d-flex align-items-center">
                              <div class="wrapper d-flex align-items-center">
                                <img
                                  src="~/assets/images/PRISMM.png"
                                  alt="logo"
                                  class="w-24px"
                                />
                              </div>
                              <div class="wrapper ml-auto">
                                <h3 class="card-title text-center ml-5 mb-0">Checkout Summary</h3>
                              </div>
                              <div class="wrapper ml-auto">
                                <small class="float-right">04-July-2020</small>
                              </div>
                            </div>
                          </div>
                          <div class="card-body">
                            <div
                              class="container-fluid d-flex justify-content-between border-bottom pb-3"
                            >
                              <div class="col-lg-6 pl-0">
                                <p class="mt-2 mb-2">
                                  <b>BILLING DETAILS</b>
                                  <a
                                    class="pl-1 text-danger"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#edit-bill-details"
                                  >
                                    <small class="font-weight-bold">(Edit)</small>
                                  </a>
                                </p>
                                <p class="mb-0">
                                  <b>School Name:</b>
                                </p>
                                <p class="mt-0 mb-0">
                                  Jain University
                                  <br />Kormanagala, Bangalore
                                  <br />560100
                                  <br />
                                </p>
                              </div>
                              <div class="col-lg-6 pr-0">
                                <div>
                                  <p class="mt-2 mb-0 text-right">
                                    <b>School Email address:</b>
                                  </p>
                                  <p class="text-right mt-0">jainuniv@gmail.com</p>
                                </div>
                                <div>
                                  <p class="mt-2 mb-0 text-right">
                                    <b>School Phone number:</b>
                                  </p>
                                  <p class="text-right mt-0">+91 9008642315</p>
                                </div>
                              </div>
                            </div>
                            <div class="container-fluid mt-5 d-flex justify-content-center w-100">
                              <div class="table-responsive w-100">
                                <table class="table">
                                  <thead>
                                    <tr class="bg-dark text-white">
                                      <th>#</th>
                                      <th>Description</th>
                                      <th class="text-right">Plan Code</th>
                                      <th class="text-right">Qty</th>
                                      <th class="text-right">Unit Price</th>
                                      <th class="text-right"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr class="text-right">
                                      <td class="text-left">1</td>
                                      <td class="text-left">Primary licenses</td>
                                      <td>STD</td>
                                      <td>280</td>
                                      <td>50</td>
                                      <td>₹ 14,000</td>
                                    </tr>
                                    <tr class="text-right">
                                      <td class="text-left">2</td>
                                      <td class="text-left">Junior licenses</td>
                                      <td>STD</td>
                                      <td>120</td>
                                      <td>80</td>
                                      <td>₹ 9,600</td>
                                    </tr>
                                    <tr class="text-right">
                                      <td class="text-left">3</td>
                                      <td class="text-left">Senior licenses</td>
                                      <td>STD</td>
                                      <td>100</td>
                                      <td>100</td>
                                      <td>₹ 10,000</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div class="container-fluid mt-5 w-100">
                              <p class="text-right mb-0">
                                Sub - Total in INR:
                                <span class="pl-3">₹ 36,600</span>
                              </p>
                              <div class="form-inline mt-2 mb-1" style="justify-content:flex-end;">
                                <p>Have a coupon code ?</p>
                                <input
                                  type="text"
                                  class="form-control form-control-sm ml-2 mb-2 mr-sm-2 w-100px"
                                  placeholder="COU12"
                                />
                                <a href="#" class="btn btn-primary btn-sm">Apply</a>
                              </div>
                                <p class="text-right mb-0 text-danger mb-2 font-italic">Inavlid Coupon</p>
                              <p class="text-right mb-0">
                                SGST @9% :
                                <span class="pl-3">₹ 3294</span>
                              </p>
                              <p class="text-right mb-0">
                                CGST @9% :
                                <span class="pl-3">₹ 3294</span>
                              </p>
                              <p class="text-right mb-0">
                                Total in INR:
                                <span class="pl-3">₹ 43,188</span>
                              </p>
                              <p class="text-right text-muted mb-0">
                                Discount applied
                                <span class="pl-3">₹ 4,318</span>
                              </p>
                              <h4 class="text-right text-danger mt-2 mb-5">₹ 38,318</h4>
                              <hr />
                            </div>
                            <button
                              class="btn btn-primary btn-block js-btn-next"
                              type="button"
                              title="Next"
                              @click="stepsFormClick($event)"
                            >
                              Check out
                              <i class="mdi mdi-cart"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Billing Details Starts-->
    <div id="edit-bill-details" class="modal fade" role="dialog">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Edit Billing Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample">
              <div class="modal-body modal-bg">
                <div class="form-group">
                  <div class="clearfix">
                    <label class="float-left" for="school-name">School Name</label>
                  </div>
                  <input type="text" class="form-control" placeholder="School Name" />
                </div>
                <div class="form-group">
                  <div class="clearfix">
                    <label class="float-left" for="school-name">School Phone Number</label>
                  </div>
                  <input type="tel" class="form-control" placeholder="School Phone Number" />
                </div>
                <div class="form-group">
                  <div class="clearfix">
                    <label class="float-left" for="school-name">School Email ID</label>
                  </div>
                  <input type="text" class="form-control" placeholder="School Email ID" />
                </div>
                <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="form-check form-check-flat form-check-primary">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" /> Keep billing address same as school address
                        <i class="input-helper"></i>
                        <small
                          class
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Keep billing address same as school address"
                        >
                        </small>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
                <div class="form-group">
                  <div class="clearfix">
                    <label class="float-left" for="school-address">School Address</label>
                  </div>
                  <textarea  class="form-control" placeholder="School Address" row=4 maxlength="256"></textarea>
                </div>
                <div class="form-group">
                  <div class="clearfix">
                    <label class="float-left" for="city">City</label>
                  </div>
                  <input type="text" class="form-control" placeholder="City" />
                </div>
                 <div class="form-group">
                  <div class="clearfix">
                    <label class="float-left" for="state">State</label>
                  </div>
                  <input type="text" class="form-control" placeholder="State" />
                </div>
                 <div class="form-group">
                  <div class="clearfix">
                    <label class="float-left" for="pincode">Pincode</label>
                  </div>
                  <input type="text" class="form-control" placeholder="Pincode" />
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary mr-2">Save</button>
                <button class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Billing Details Ends-->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected: 'none',
      current: 'none',
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
      }
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
  },
  methods: {
    onPriceClick: function(plan) {
      this.selected = plan
    },
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
.text-rupee-center {
  display: inline-flex;
  align-items: center;
}
.text-rupee {
  font-size: 26px;
  color: #cdcdcd;
  font-weight: 600;
  padding-right: 5px;
}
.border-circle-wrap {
  padding: 10%;
  margin-left: auto;
  display: flex;
}
.border-circle {
  background: #3e5378;
  border-radius: 100%;
  padding: 10%;
  -moz-box-shadow: 2px 2px 17px 0px #445a81;
  -webkit-box-shadow: 2px 2px 17px 0px #445a81;
  box-shadow: 2px 2px 17px 0px #445a81;
  font-size: 18px;
  width: 100px;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.border-circle-green {
  background: #5c8d3b;
  border-radius: 100%;
  padding: 10%;
  -moz-box-shadow: 2px 2px 17px 0px #6e7f6370;
  -webkit-box-shadow: 2px 2px 17px 0px #6e7f6370;
  box-shadow: 2px 2px 17px 0px #6e7f6370;
  font-size: 18px;
  width: 100px;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-check .form-check-label input[type='radio'] + .input-helper:after {
  top: 8px !important;
  left: 8px !important;
  width: 20px !important;
  height: 20px !important;
}
.form-check .form-check-label input[type='radio'] + .input-helper:before {
  width: 36px !important;
  height: 36px !important;
}
bg-card {
  background: #eccd9d;
}
@media screen and (max-width: 1024px) {
  .multisteps-form__form .multisteps-form__panel {
    padding: 0 !important;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .pricing-table .pricing-card .pricing-card-body .plan-features {
      width: 100%;
      padding: 10px;
      text-align: left;
      font-size: 12px;
    }
    .pricing-table .pricing-card {
      padding: 5px;
    }
  }
}
</style>