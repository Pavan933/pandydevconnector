<template>
  <div class="custom-bodypad">
    <div class="row mb-3">
      <div class="col-lg-12">
        <div class="d-flex flex-column flex-md-row align-items-center">
          <div class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0">
            <div class="d-flex mt-4 mt-md-0">
              <button type="button" class="btn btn-primary btn-fw" data-toggle="modal" data-target="#add-announcement">
                <i class="mdi mdi-bell btn-icon-prepend"></i> Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Modal announcement Field Edit Starts-->
    <div id="add-announcement" class="modal fade" role="dialog">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Create Announcement</h5>
            <button ref="notificationModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form class="forms-sample" @submit.prevent="sendNotification">
            <div class="modal-body modal-bg">
              <div class="form-group">
                <label>Select Group</label>
                <MultiSelect :options="options" :initial-value="initialValue" @onChange="onSelectedClassChange" />
              </div>
              <div class="form-group">
                <label>Notification Medium</label>
                <div class="form-group row">
                  <div class="col-sm-4">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          v-model="newNotification.medium"
                          type="checkbox"
                          class="form-check-input"
                          name="membershipRadios"
                          value="WEB"
                          checked
                          disabled
                        />
                        Web
                        <i class="input-helper"></i>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          v-model="newNotification.medium"
                          type="checkbox"
                          class="form-check-input"
                          name="membershipRadios"
                          value="SMS"
                          checked
                        />
                        SMS
                        <i class="input-helper"></i>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          v-model="newNotification.medium"
                          type="checkbox"
                          class="form-check-input"
                          name="membershipRadios"
                          value="EMAIL"
                          disabled
                        />
                        Email
                        <i class="input-helper"></i>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          v-model="newNotification.medium"
                          type="checkbox"
                          class="form-check-input"
                          name="membershipRadios"
                          value="WHATSAPP"
                          disabled
                        />
                        Whatsapp
                        <i class="input-helper"></i>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          v-model="newNotification.medium"
                          type="checkbox"
                          class="form-check-input"
                          name="membershipRadios"
                          value="PHONE CALL"
                          disabled
                        />
                        Phone Call
                        <i class="input-helper"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="form-group">
                <div class="clearfix">
                  <label class="float-left" for="subject">Subject</label>
                </div>
                <input
                  id="subject"
                  v-model="newNotification.subject"
                  type="text"
                  class="form-control"
                  placeholder="Subject"
                  required
                />
              </div> -->
              <div class="form-group">
                <div class="clearfix">
                  <label for="messageid1">Message</label>
                  <small id="subjectNote" class="form-text float-right text-muted">Limit 1/160</small>
                </div>
                <textarea id="messageid1" v-model="newNotification.message" class="form-control" rows="4"></textarea>
              </div>
              <!-- <div class="form-group">
                <label>File upload</label>
                <div class="input-group col-xs-12">
                  <b-form-file
                    :file-name-formatter="formatNames"
                    accept="image/png, image/jpeg, .csv, .pdf, .doc, .docx, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  ></b-form-file>
                </div>
                <small class="form-text text-muted"
                  >Supports .csv, .dat, .doc, .docx, .jpg, .jpeg, .pdf, .png, .ppt, .xls, .xlsx</small
                >
                <small class="form-text text-muted">Max Size 2MB</small>
              </div>-->
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary mr-2">Announce</button>
              <button class="btn btn-light" data-dismiss="modal">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <!--Modal Aduio announcement Field Edit Ends-->
    <div class="row">
      <div class="col-md-4 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">My School Notifications</h4>
            <div class="rounded-legend legend-horizontal legend-top-right float-right">
              <ul>
                <li>
                  <span class="legend-dots" style="background:#ac6ac2"></span>
                  Announcement
                </li>
                <li>
                  <span class="legend-dots" style="background:#00ff37"></span>
                  Assignment
                </li>
              </ul>
            </div>
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <td>Today</td>
                    <td>Learning material updated</td>
                  </tr>
                  <tr class="unread-notification">
                    <td>06-06-2020</td>
                    <td>COVID 19 Updates</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title"><img class="mr-2" src="~/assets/images/icons/bell.png" />COVID 19 Updates</h4>
            <div class="alert alert-secondary" role="alert">
              A record number of children and youth are not attending school because of closures mandated by governments
              in an attempt to slow the spread of COVID-19.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MultiSelect from '~/components/templates/common/MultiSelect'

export default {
  components: {
    MultiSelect
  },
  data() {
    return {
      blobUrl: true,
      record: false,
      recorder: null,
      audioStream: null,
      audioBlob: null,
      selectedNotification: undefined,
      newNotification: {
        subject: '',
        message: '',
        medium: ['SMS'],
        type: 'ANNOUNCEMENT',
        targetAudience: []
      },
      options: [
        { label: 'class X A', type: 'STUDENT', class: 10, section: 'A' },
        { label: 'class X B', type: 'STUDENT', class: 10, section: 'B' },
        { label: 'class IX A', type: 'STUDENT', class: 9, section: 'A' },
        { label: 'class IX B', type: 'STUDENT', class: 9, section: 'B' },
        { label: 'Teacher group 1', type: 'TEACHER', class: 10, section: 'A' }
      ],
      initialValue: { label: 'class X A', type: 'STUDENT', class: 10, section: 'A' },
      selectedClass: [{ label: 'class X A', type: 'STUDENT', class: 10, section: 'A' }]
    }
  },
  computed: {
    ...mapState({
      notifications: (state) => state.notification.announcements
    }),
    todaysDate() {
      let date = new Date()
      date = date.toISOString()
      return date.substring(0, 10)
    }
  },
  created() {
    this.$store.dispatch('notification/fetchAnnouncements', this.$store.getters.getPath)
  },
  methods: {
    onSelectedClassChange(value) {
      this.selectedClass = value
    }
  }
}
</script>
<style scoped>
.record-mic {
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  transform: scale(1);
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
  background-color: #4db6ac;
  border-radius: 50%;
  pointer-events: all;
  cursor: pointer;
  -webkit-box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
  box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
}

.record-mic i {
  font-size: 24px;
  color: #fff;
}
.record-mic.active {
  background-color: #ef5350;
  -webkit-animation: pulse 1.25s cubic-bezier(0.66, 0, 0, 1) infinite;
  animation: pulse 1.25s cubic-bezier(0.66, 0, 0, 1) infinite;
}
@keyframes pulse {
  100% {
    -webkit-box-shadow: 0 0 0 10px rgba(239, 83, 80, 0.1);
    box-shadow: 0 0 0 10px rgba(239, 83, 80, 0.1);
    background-color: #e53935;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
</style>
