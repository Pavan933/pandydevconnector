<template>
  <div class="custom-bodypad">
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Master Timetable Wizard</h4>
            <div class="multisteps-form">
              <!--progress bar-->
              <div class="row">
                <div class="col-12 col-lg-8 ml-auto mr-auto mb-4">
                  <div class="multisteps-form__progress" @click="stepsBarClick($event)">
                    <button
                      class="multisteps-form__progress-btn js-active"
                      type="button"
                      title="Step 1"
                    >Step 1</button>
                    <button
                      class="multisteps-form__progress-btn"
                      type="button"
                      title="Step 2"
                    >Step 2</button>
                    <button
                      class="multisteps-form__progress-btn"
                      type="button"
                      title="Comments"
                    >Step 3</button>
                  </div>
                </div>
              </div>
              <!--form panels-->
              <div class="row">
                <div class="col-12 grid-margin col-lg-8 m-auto">
                  <form class="multisteps-form__form form-group" @submit.prevent="createTimetable">
                    <!--single form panel-->
                    <div
                      class="multisteps-form__panel shadow p-4 rounded bg-white js-active form-group"
                      data-animation="scaleIn"
                    >
                      <h3 class="multisteps-form__title">Class Period Details</h3>
                      <div class="multisteps-form__content">
                        <div class="form-row mt-4">
                          <div class="col-12 col-sm-6">
                            <div class="form-group">
                              <label>Periods per Day*</label>
                              <input
                                v-model="newTimetable.numOfPeriods"
                                class="multisteps-form__input form-control"
                                type="number"
                                placeholder="Periods per Day"
                                min="1"
                                max="8"
                                pattern="/^-?\d+\.?\d*$/"
                                onkeypress="if(this.value.length==1) return false;"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-12 col-sm-6 mt-4 mt-sm-0">
                            <div class="form-group">
                              <label>Start time of first period in HHMM(24 hrs format)*</label>
                              <input
                                v-model="newTimetable.startTime"
                                class="multisteps-form__input form-control"
                                type="time"
                                placeholder="07:00 AM"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col-12 col-sm-6">
                            <div class="form-group">
                              <label>Each period duration in *</label>
                              <input
                                v-model="newTimetable.periodDuration"
                                class="multisteps-form__input form-control"
                                type="number"
                                placeholder="Each period duration in Minutes"
                                min="1"
                                max="120"
                                pattern="/^-?\d+\.?\d*$/"
                                onkeypress="if(this.value.length==3) return false;"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-12 col-sm-6 mt-4 mt-sm-0">
                            <div class="form-group">
                              <label>Break Duration in Minutes*</label>
                              <input
                                v-model="newTimetable.breakDuration"
                                class="multisteps-form__input form-control"
                                type="number"
                                placeholder="Break Duration in Minutes"
                                min="1"
                                max="120"
                                pattern="/^-?\d+\.?\d*$/"
                                onkeypress="if(this.value.length==3) return false;"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col-12 col-sm-6">
                            <div class="form-group">
                              <label>Break after number of periods*</label>
                              <select
                                v-model="newTimetable.breakAfterPeriod"
                                required
                                class="multisteps-form__input form-control"
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="button-row d-flex mt-4">
                          <button
                            class="btn btn-secondary ml-auto js-btn-next"
                            type="button"
                            title="Next"
                            @click="stepsFormClick($event)"
                          >Next</button>
                        </div>
                      </div>
                    </div>
                    <!--single form panel-->
                    <div
                      class="multisteps-form__panel shadow p-4 rounded bg-white form-group"
                      data-animation="scaleIn"
                    >
                      <h3 class="multisteps-form__title">Class Details*</h3>
                      <div class="multisteps-form__content">
                        <div class="form-row mt-4">
                          <div class="col-12 col-sm-10">
                            <div
                              v-for="(classObj, index) in newTimetable.classList"
                              :key="index"
                              class="form-row mt-4"
                            >
                              <div class="col-12 col-sm-5">
                                <div class="form-group">
                                  <label>Enter the Class</label>
                                  <SingleSelect
                                    v-model="classObj.class"
                                    :options="classOptions"
                                    @onChange="onSelectedClassChange"
                                    :required="!selectedClass.length"
                                  />
                                </div>
                              </div>
                              <div class="col-12 col-sm-5">
                                <div class="form-group">
                                  <label>Enter Number of sections in Class*</label>
                                  <input
                                    v-model="classObj.sections"
                                    class="multisteps-form__input form-control"
                                    type="number"
                                    placeholder="Enter Number of sections in Class"
                                    min="1"
                                    max="15"
                                    pattern="/^-?\d+\.?\d*$/"
                                    onkeypress="if(this.value.length==2) return false;"
                                  />
                                </div>
                              </div>
                              <div  class="col-12 col-sm-2">
                                <button
                                  data-repeater-create
                                  type="button"
                                  class="btn btn-gradient-info btn-sm icon-btn ml-2 mb-2"
                                  @click="deleteClassRow(index)"
                                >
                                  <i class="mdi mdi-minus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="col-12 col-sm-2">
                            <button
                              data-repeater-create
                              type="button"
                              class="btn btn-gradient-info btn-sm icon-btn ml-2 mb-2"
                              @click="addClassRow"
                            >
                              <i class="mdi mdi-plus"></i>
                            </button>
                          </div>
                        </div>
                        <div class="button-row d-flex mt-4">
                          <button
                            class="btn btn-secondary js-btn-prev"
                            type="button"
                            title="Prev"
                            @click="stepsFormClick($event)"
                          >Prev</button>
                          <button
                            class="btn btn-secondary ml-auto js-btn-next"
                            type="button"
                            title="Next"
                            @click="stepsFormClick($event)"
                          >Next</button>
                        </div>
                      </div>
                    </div>
                    <!--single form panel-->
                    <div
                      class="multisteps-form__panel shadow p-4 rounded bg-white form-group"
                      data-animation="scaleIn"
                    >
                      <h3 class="multisteps-form__title">Subjects</h3>
                      <div class="multisteps-form__content">
                        <div class="form-row mt-4">
                          <div class="col-12 col-sm-6">
                            <div class="input-group">
                              <input
                                v-model="newSubject"
                                class="multisteps-form__input form-control"
                                type="text"
                                placeholder="Add Subject"
                                required
                                minlength="1"
                                maxlength="20"
                              />
                              <div class="input-group-append">
                                <button
                                  data-repeater-create
                                  type="button"
                                  class="btn btn-gradient-info btn-sm icon-btn"
                                  @click="addNewSubject"
                                >
                                  <i class="mdi mdi-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-row mt-4">
                          <div class="col-md-6 stretch-card">
                            <div class="bg-grey p-4 w-100">
                              <h6 class="card-title">List</h6>
                              <div id="subject-list-left" class="py-2">
                                <draggable :list="subjectsList" group="subject">
                                  <div
                                    v-for="subject in subjectsList"
                                    :key="subject"
                                    class="card rounded mb-2 list-group"
                                  >
                                    <div class="bgdrop bg-uncheck card-body p-1 list-group-item">
                                      <div class="media">
                                        <div class="media-body">
                                          <h6 class="mb-1">{{ subject }}</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </draggable>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 stretch-card">
                            <div class="bg-grey p-4 w-100">
                              <h6 class="card-title">Subject Selected</h6>
                              <div id="subject-list-right" class="py-2">
                                <draggable
                                  :list="newTimetable.subjectsSelected"
                                  group="subject"
                                  class="divDragContainer"
                                >
                                  <div
                                    v-for="subject in newTimetable.subjectsSelected"
                                    :key="subject"
                                    class="card rounded mb-2 list-group"
                                  >
                                    <div class="bgdrop bg-check card-body p-1 list-group-item">
                                      <div class="media">
                                        <div class="media-body">
                                          <h6 class="mb-1">{{ subject }}</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </draggable>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="button-row d-flex mt-4">
                          <button
                            class="btn btn-secondary js-btn-prev"
                            type="button"
                            title="Prev"
                            @click="stepsFormClick($event)"
                          >Prev</button>
                          <button
                            class="btn btn-secondary ml-auto"
                            type="submit"
                            title="Finish"
                          >Finish</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Master Timetable</h4>
            <div class="flow-x">
              <table class="table table-hover table-bordered">
                <tr class="mstr-tt-row-first">
                  <th>Days</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
                <tr>
                  <td>Period 1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Period 2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Period 3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th class="mstr-tt-row-first text-center" colspan="8">Interval</th>
                </tr>
                <tr>
                  <td>Period 4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Period 5</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Period 6</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import SingleSelect from '~/components/templates/common/SingleSelect'

export default {
  name: 'TwoLists',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable,
    SingleSelect
  },
  data() {
    return {
      subjectsList: [
         'English Literature',
        'Mathematics',
        'Arts and Design',
        'History',
        'Geography',
        'Business Studies',
        'Economics'
      ],
      list2: [],
      newSubject: '',
      newTimetable: {
        numOfPeriods: '',
        periodDuration: '',
        startTime: '',
        breakDuration: '',
        breakAfterPeriod: '',
        durationBetweenPeriods: 0,
        subjectsSelected: [],
        classList: [{ class: '', sections: '' }]
      },
      optionClass: ['Class XI', 'Class X'],
      selectedClass: 'Class X',
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
  computed: {
  
    classOptions() {
      if (this.subscription && this.subscription.classList) {
        return this.subscription.classList
      }
      return []
    }
  },
  created() {
    this.$store.dispatch('subscriptions/fetchSubscription', this.$store.getters.getPath)
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
    onSelectedClassChange(value) {
      this.selectedClass = value
    },
    // backend form methods start
    // form submit
    async createTimetable() {
      try {
        // validate the details and store it in db
        const tt = this.newTimetable
        let isClassValid = true
        const onlyClasses = [] // for duplicate classes
        tt.classList.forEach((element) => {
          onlyClasses.push(element.class)
          if (element.class === '' || element.sections === '') {
            isClassValid = false
          }
        })
        const classSet = new Set(onlyClasses)
        if (
          !isClassValid ||
          tt.classList.length !== classSet.size ||
          tt.numOfPeriods === '' ||
          tt.periodDuration === '' ||
          tt.breakDuration === '' ||
          tt.breakAfterPeriod === '' ||
          tt.startTime === '' ||
          !tt.subjectsSelected.length
        ) {
          // show validation error
          return
        }

        // proceed with storing time table
        tt.numOfPeriods = parseInt(tt.numOfPeriods)
        tt.periodDuration = parseInt(tt.periodDuration)
        tt.breakDuration = parseInt(tt.breakDuration)
        tt.breakAfterPeriod = parseInt(tt.breakAfterPeriod)

        tt.classList.forEach((element) => {
          element.class = parseInt(element.class)
          element.sections = parseInt(element.sections)
        })

        await this.$store.dispatch('timetable/createMasterTimetable', {
          path: this.$store.getters.getPath,
          data: this.newTimetable
        })
        console.log('Success')
      } catch (err) {
        console.log(err)
      }
    },
    addClassRow() {
      this.newTimetable.classList.push({ class: '', sections: '' })
    },
    deleteClassRow(index) {
      this.newTimetable.classList.splice(index, 1)
    },
    addNewSubject() {
      if (!this.newSubject || this.newSubject === '') return
      this.subjectsList.push(this.newSubject)
      this.newSubject = ''
    },

    // backend form methods end

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
.list-group-item {
  cursor: move !important;
}
#subject-list-right,
#subject-list-right .divDragContainer {
  position: relative;
  height: 100%;
}
.success-cst i {
  font-size: 65px;
  color: #6bc709;
}
</style>
