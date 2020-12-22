<template>
  <div class="custom-bodypad">
    <div class="row mt-3 mb-3">
      <div class="col-lg-6 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="d-flex border-bottom pb-3">SMS</h4>
            <div class="form-group">
              <label>Service Provider</label>
            <SingleSelect :options="optionsSMS" :initialValue="selectedSMS" @onChange="onSelectedSMSChange"/>
            </div>
            <div class="form-group">
              <label for="smsAPIkey">API Key</label>
              <input type="text" class="form-control" id="smsAPIkey" placeholder="API Key" />
            </div>
            <div class="form-group">
              <label for="smsAPIauthkey">API Auth Key</label>
              <input type="text" class="form-control" id="smsAPIauthkey" placeholder="API Auth Key" />
            </div>
            <div class="d-flex flex-column flex-md-row align-items-center">
              <div
                class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
              >
                <div class="d-flex">
                  <button type="submit" class="btn btn-primary mr-2">Submit</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>
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
            <SingleSelect :options="optionsEmail" :initialValue="selectedEmail" @onChange="onSelectedEmailChange"/>
            </div>
            <div class="form-group">
              <label>Display Name</label>
              <input type="text" class="form-control" id="displayName" placeholder="Display Name" />
            </div>
            <div class="form-group">
              <label for="smsAPIkey">API Key</label>
              <input type="text" class="form-control" id="smsAPIkey" placeholder="API Key" />
            </div>
            <div class="form-group">
              <label for="smsAPIauthkey">API Auth Key</label>
              <input type="text" class="form-control" id="smsAPIauthkey" placeholder="API Auth Key" />
            </div>
            <div class="d-flex flex-column flex-md-row align-items-center">
              <div
                class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
              >
                <div class="d-flex">
                  <button type="submit" class="btn btn-primary mr-2">Submit</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>
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
                 <SingleSelect :options="optionsStorage" :initialValue="selectedStorage" @onChange="onSelectedStorageChange"/>
            </div>
            <div class="form-group">
              <label for="bucketName">Bucket Name</label>
              <input type="text" class="form-control" id="bucketName" placeholder="Bucket Name" />
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
              <input type="text" class="form-control" id="smsAPIkey" placeholder="API Key" />
            </div>
            <div class="form-group">
              <label for="smsAPIauthkey">API Auth Key</label>
              <input type="text" class="form-control" id="smsAPIauthkey" placeholder="API Auth Key" />
            </div>
            <div class="d-flex flex-column flex-md-row align-items-center">
              <div
                class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
              >
                <div class="d-flex">
                  <button type="submit" class="btn btn-primary mr-2">Submit</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="d-flex border-bottom pb-3">Whatsapp</h4>
            <div class="form-group">
              <label>Display Name</label>
              <input type="text" class="form-control" id="displayName" placeholder="Display Name" />
            </div>
            <div class="form-group">
              <label for="smsAPIkey">API Key</label>
              <input type="text" class="form-control" id="smsAPIkey" placeholder="API Key" />
            </div>
            <div class="form-group">
              <label for="smsAPIauthkey">API Auth Key</label>
              <input type="text" class="form-control" id="smsAPIauthkey" placeholder="API Auth Key" />
            </div>
              <div class="d-flex flex-column flex-md-row align-items-center">
              <div
                class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
              >
                <div class="d-flex">
                  <button type="submit" class="btn btn-primary mr-2">Submit</button>
                  <button class="btn btn-light">Cancel</button>
                </div>
              </div>
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
  data: function() {
    return {
      optionsSMS: ['MSG91','Textlocal'],
      selectedSMS: 'MSG91',
       optionsEmail: ['Sendgrid','Mailgun'],
      selectedEmail: 'Sendgrid',
       optionsStorage: ['AWS','Google Cloud'],
      selectedStorage: 'AWS',
    }
  },
  methods: {
    onSelectedSMSChange:function(value){
        this.selectedSMS=value
    },
     onSelectedEmailChange:function(value){
        this.selectedEmail=value
    },
     onSelectedStorageChange:function(value){
        this.selectedStorage=value
    }
  }
}
</script>

<style></style>
