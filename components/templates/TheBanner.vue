<template>
  <div class="row">
    <div class="col-lg-12 grid-margin">
      <div class="d-flex flex-row flex-wrap pstn">
        <div class="cover-image">
          <img
            src="~/assets/images/school_vector.jpg"
            class="mb-2 mw-100 w-100 ban-img profile-img"
            alt="coverimage"
          />
          <a data-toggle="modal" data-target="#upload_cover_image"> <i class="mdi mdi-camera upload-button"></i>
          <input class="file-upload" type="file" accept="image/*"/></a>
        </div>        
        <div class="select-skool">
          <div class="form-group">
            <SingleSelect
              :options="options"
              :initialValue="selectedCollege"
              @onChange="onSelectedCollegeChange"
            />
          </div>
        </div>
        <div class="profile-avtr">
          <img
            src="~/assets/images/faces/face1.jpg"
            class="img-profile rounded-circle"
            alt="userimage"
          />
          <a  data-toggle="modal" data-target="#upload_profile_image">  <i class="mdi mdi-camera upload-button"></i>
          <input ref="FileInput" class="file-upload" type="file" accept="image/*" style="display: none;"/></a>
        </div>       
        <div class="logo-avtr">
          <img src="~/assets/images/icons/university_grey.png" class="img-profile rounded-circle" />
          <a data-toggle="modal" data-target="#upload_org_image">  <i class="mdi mdi-camera upload-button"></i>
          <input class="file-upload" type="file" accept="image/*"/></a>
        </div>       
      </div>
    </div>
    <!--Modal Upload Cover Image  Starts-->
        <div id="upload_cover_image" class="modal fade" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-bg">
                <h5 class="modal-title">Upload Cover Image</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body modal-bg">
                <form class="forms-sample">
                  <div class="form-group">
                    <div class="input-group col-xs-12">
                       <VueCropper v-show="selectedFileCover" ref="cropper" :src="selectedFileCover" alt="Source Image"></VueCropper>
                      <b-form-file class="mt-3"
                        :file-name-formatter="formatNamesCoverImage"
                        accept="image/png, image/jpeg" @change="onFileSelectCover"
                      ></b-form-file>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-secondary mr-2">Upload</button>
                <button class="btn btn-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <!--Modal Upload Cover image  End-->
     <!--Modal Upload Profile Image  Starts-->
        <div id="upload_profile_image" class="modal fade" role="dialog" > 
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-bg">
                <h5 class="modal-title">Upload Profile Image</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body modal-bg">
                <form class="forms-sample">
                  <div class="form-group">
                    <div class="input-group col-xs-12">
                        <VueCropper v-show="selectedFileProfile" ref="cropper" :src="selectedFileProfile" alt="Source Image"></VueCropper>
                      <b-form-file class="mt-3"
                        :file-name-formatter="formatNamesProfile"
                        accept="image/png, image/jpeg" @change="onFileSelectProfile"
                      ></b-form-file>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-secondary mr-2">Upload</button>
                <button class="btn btn-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <!--Modal Upload Profile Image  End-->
     <!--Modal Upload Organization Profile Image  Starts-->
        <div id="upload_org_image" class="modal fade" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header modal-bg">
                <h5 class="modal-title">Upload Organization Image</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body modal-bg">
                <form class="forms-sample">
                  <div class="form-group">
                    <div class="input-group col-xs-12">
                        <VueCropper v-show="selectedFileOrg" ref="cropper" :src="selectedFileOrg" alt="Source Image"></VueCropper>
                      <b-form-file class="mt-3"
                        :file-name-formatter="formatNamesOrgProfile"
                        accept="image/png, image/jpeg" @change="onFileSelectOrg"
                      ></b-form-file>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-secondary mr-2">Upload</button>
                <button class="btn btn-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <!--Modal Upload Org Profile Image  End-->
  </div>
</template>
<script>
import SingleSelect from '~/components/templates/common/SingleSelect'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
  components: {
    SingleSelect,
    VueCropper
  },
  data: function() {
    return {
      options: ['All', 'Jain Univeristy', 'Christ University'],
      selectedCollege: 'All',
      mime_type: '',
      cropedImage: '',
      autoCrop: false,
      selectedFileCover: '',
      selectedFileProfile:'',
      selectedFileOrg:'',
      image: '',
      dialog: false,
      files: '',
    }
  },
  methods: {
    onSelectedCollegeChange: function(value) {
      this.selectedCollege = value
    },
    formatNamesProfile(files) {
      if (files.length === 1) {
        return files[0].name
      } else {
        return `${files.length} files selected`
      }
    },
    formatNamesCoverImage(files) {
      if (files.length === 1) {
        return files[0].name
      } else {
        return `${files.length} files selected`
      }
    },
    formatNamesOrgProfile(files) {
      if (files.length === 1) {
        return files[0].name
      } else {
        return `${files.length} files selected`
      }
    },
    /*  saveImage() {
      const userId = this.$route.params.user_id
      this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
        const formData = new FormData()
        formData.append('profile_photo', blob, 'name.jpeg')
        axios
          .post('/api/user/' + userId + '/profile-photo', formData)
          .then((response) => {
          })
          .catch(function (error) {
            console.log(error)
          })
      }, this.mime_type)
    }, */
    onFileSelectCover(e) {
      const file = e.target.files[0]
      this.mime_type = file.type
      console.log(this.mime_type)
      if (typeof FileReader === 'function') {
        this.dialog = true
        const reader = new FileReader()
        reader.onload = (event) => {
          this.selectedFileCover = event.target.result
          this.$refs.cropper.replace(this.selectedFileCover)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
     onFileSelectProfile(e) {
      const file = e.target.files[0]
      this.mime_type = file.type
      console.log(this.mime_type)
      if (typeof FileReader === 'function') {
        this.dialog = true
        const reader = new FileReader()
        reader.onload = (event) => {
          this.selectedFileProfile = event.target.result
          this.$refs.cropper.replace(this.selectedFileProfile)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
     onFileSelectOrg(e) {
      const file = e.target.files[0]
      this.mime_type = file.type
      console.log(this.mime_type)
      if (typeof FileReader === 'function') {
        this.dialog = true
        const reader = new FileReader()
        reader.onload = (event) => {
          this.selectedFileOrg = event.target.result
          this.$refs.cropper.replace(this.selectedFileOrg)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },
  }
}
</script>