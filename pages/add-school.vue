<template>
  <div class="custom-bodypad">
    <div class="row mt-3 mb-3">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h4 class="d-flex border-bottom pb-3">School Organization Form</h4>
            <form class="pt-3">
              <div class="row flex-grow">
                <div class="col-lg-4">
                  <div class="form-group">
                    <label for="institutionfullname">Institution Full Name</label>
                    <div class="input-group">
                      <input
                        id="institutionfullname"
                        v-model="school.name"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Institution Full Name"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="institutionfulladdress">Institution Full Address</label>
                    <div class="input-group">
                      <input
                        id="institutionfulladdress"
                        v-model="school.address"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Institution Full Address"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="affiliatedboard">Affiliated Board</label>
                    <div class="input-group">
                      <input
                        id="affiliatedboard"
                        v-model="school.board"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Affiliated Board"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="schoolShortCode">School Short Code</label>
                    <div class="input-group">
                      <input
                        id="schoolShortCode"
                        v-model="school.shortCode"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="example JGI"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label for="contactpersonprincipal">Contact Person/Principal name</label>
                    <div class="input-group">
                      <input
                        id="contactpersonprincipal"
                        v-model="school.contactName"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Contact Person/Principal name"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="emailaddress">Email Address</label>
                    <div class="input-group">
                      <input
                        id="emailaddress"
                        v-model="school.email"
                        type="email"
                        class="form-control form-control-lg"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="schoolwebsiteurl">School Website Url</label>
                    <div class="input-group">
                      <input
                        id="schoolwebsiteurl"
                        v-model="school.schoolURL"
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="School Website Url"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Subdomain</label>
                    <div class="input-group">
                      <input
                        v-model="school.subdomain"
                        type="text"
                        class="form-control"
                        placeholder="Subdomain"
                        aria-label="Subdomain Name"
                        aria-describedby="subdomain"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">.PRISMM.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label for="noofstudents">Number of Students</label>
                    <div class="input-group">
                      <input
                        id="noofstudents"
                        v-model="school.numOfStudents"
                        type="number"
                        class="form-control form-control-lg"
                        placeholder="Number of Students"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="contactno1">Contact Phone Number-1</label>
                    <div class="input-group">
                      <input
                        id="contactno1"
                        v-model="school.contactPhone"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Contact Phone Number-1"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="contactnomobile">Contact Mobile Number</label>
                    <div class="input-group">
                      <input
                        id="contactnomobile"
                        v-model="school.contactMobile"
                        type="tel"
                        class="form-control form-control-lg"
                        placeholder="Contact Mobile Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 mb-3">
      <div class="col-lg-6 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="d-flex border-bottom pb-3">SMS</h4>
            <div class="form-group">
              <label>Service Provider</label>
              <SingleSelect
                :options="optionsSMS"
                :initial-value="selectedSMS"
                @onChange="onSelectedSMSChange"
              />
            </div>
            <div class="form-group">
              <label for="smsAPIkey">API Key</label>
              <input id="smsAPIkey" type="text" class="form-control" placeholder="API Key" />
            </div>
            <div class="form-group">
              <label for="smsAPIauthkey">API Auth Key</label>
              <input id="smsAPIauthkey" type="text" class="form-control" placeholder="API Auth Key" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="d-flex border-bottom pb-3">Email</h4>
            <div class="form-group">
              <label>Service Provider</label>
              <SingleSelect
                :options="optionsEmail"
                :initial-value="selectedEmail"
                @onChange="onSelectedEmailChange"
              />
            </div>
            <div class="form-group">
              <label>Display Name</label>
              <input id="displayName" type="text" class="form-control" placeholder="Display Name" />
            </div>
            <div class="form-group">
              <label for="smsAPIkey">API Key</label>
              <input id="smsAPIkey" type="text" class="form-control" placeholder="API Key" />
            </div>
            <div class="form-group">
              <label for="smsAPIauthkey">API Auth Key</label>
              <input id="smsAPIauthkey" type="text" class="form-control" placeholder="API Auth Key" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 mb-3">
      <div class="col-lg-6 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="d-flex border-bottom pb-3">Storage</h4>
            <div class="form-group">
              <label>Service Provider</label>
              <SingleSelect
                :options="optionsStorage"
                :initial-value="selectedStorage"
                @onChange="onSelectedStorageChange"
              />
            </div>
            <div class="form-group">
              <label for="bucketName">Bucket Name</label>
              <input id="bucketName" type="text" class="form-control" placeholder="Bucket Name" />
            </div>
            <div class="form-group">
              <label>Storage Limit</label>
              <div class="input-group">
                <input
                  type="number"
                  pattern="/^-?\d+\.?\d*$/"
                  onkeypress="if(this.value.length==4) return false;"
                  class="form-control"
                  placeholder="Storage Limit"
                  aria-label="Storage Limit"
                  aria-describedby="storageLimit"
                />
                <div class="input-group-append">
                  <span class="input-group-text">GB</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="smsAPIkey">API Key</label>
              <input id="smsAPIkey" type="text" class="form-control" placeholder="API Key" />
            </div>
            <div class="form-group">
              <label for="smsAPIauthkey">API Auth Key</label>
              <input id="smsAPIauthkey" type="text" class="form-control" placeholder="API Auth Key" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="d-flex border-bottom pb-3">Discount Coupon</h4>           
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
              <input
                id="validity-day"
                type="number"
                class="form-control"
                placeholder="Validity Date"
              />
            </div>
            <div class="form-group">
              <div class="clearfix">
                <label class="float-left" for="expiry-date">Expiry Date</label>
              </div>
              <input id="expiry-date" type="date" class="form-control" placeholder="Expiry Date" />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Generate</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-sm-12">
        <div class="d-flex flex-column flex-md-row align-items-center">
          <div
            class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
          >
            <div class="d-flex">
              <button class="btn btn-primary mr-2" @click="addSchool">Submit</button>
              <nuxt-link to="/school-settings">
                <button class="btn btn-light">Cancel</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SingleSelect from '~/components/templates/common/SingleSelect'

export default {
  components: {
    SingleSelect
  },
  data() {
    return {
      school: {},
      optionsSMS: ['MSG91', 'Textlocal'],
      selectedSMS: 'MSG91',
      optionsEmail: ['Sendgrid', 'Mailgun'],
      selectedEmail: 'Sendgrid',
      optionsStorage: ['AWS', 'Google Cloud'],
      selectedStorage: 'AWS',
      optionsServer: ['Application Server', 'Video Bridge', 'Database', 'Prosody'],
      selectedServer: 'Application Server'
    }
  },
  methods: {
    addSchool() {
      this.$store.dispatch('settings/approveSchoolRequest', { data: this.school })
      this.$router.push('/school-settings')
    },
    onSelectedSMSChange(value) {
      this.selectedSMS = value
    },
    onSelectedEmailChange(value) {
      this.selectedEmail = value
    },
    onSelectedStorageChange(value) {
      this.selectedStorage = value
    },
    onSelectedServerChange(value) {
      this.selectedServer = value
    }
  }
}
</script>

<style></style>
