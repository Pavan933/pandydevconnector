<template>
  <div class="custom-bodypad">
    <div class="row mt-3 mb-3">
      <div class="col-sm-12">
        <div class="d-flex flex-column flex-md-row align-items-center">
          <h4 class="mb-md-0 mb-4">E-Learning Library for Teachers</h4>
          <div
            class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
          >
            <div class="d-flex mt-4 mt-md-0">
              <button
                type="button"
                class="btn btn-icons btn-primary d-none d-lg-block"
                data-toggle="modal"
                data-target="#add-subject"
              >
                <i class="mdi mdi-library-plus pr-2"></i> Add Subject
              </button>
              <button
                type="button"
                class="btn btn-icons btn-primary d-none d-lg-block"
                data-toggle="modal"
                data-target="#add-delete"
              >
                <i class="mdi mdi-delete pr-2"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Modal subject Starts-->
    <div id="add-subject" class="modal fade" role="dialog">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Add Subject</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form class="forms-sample">
            <div class="modal-body modal-bg">
              <div class="form-group">
                <!-- <div class="clearfix">
                    <label class="float-left" for="subject">Subject </label>                            
                </div>-->
                <input type="text" class="form-control" id="subject" placeholder="Subject" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary mr-2">Add</button>
              <button class="btn btn-light">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--Modal subject Ends-->
    <!--Modal delete Starts-->
    <div id="add-delete" class="modal fade" role="dialog">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Delete Subject</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form class="forms-sample">
            <div class="modal-body modal-bg">
              <div class="form-group">
                <!-- <div class="clearfix">
                    <label class="float-left" for="subject">Subject </label>                            
                </div>-->
                <select class="js-example-basic-single" style="width:100%">
                  <option value="1">English</option>
                  <option value="2">Mathematics</option>
                  <option value="3">Hindi</option>
                  <option value="4">Social Science</option>
                  <option value="5">French</option>
                  <option value="6">Computer Science</option>
                </select>
                <small
                  class="form-text font-italic text-danger"
                >Warning - Deleting a Subject will delete all related contents</small>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary mr-2">Delete</button>
              <button class="btn btn-light">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--Modal delete Ends-->
    <div class="row mt-3 mb-4">
      <div class="col-12 col-sm-6 col-md-3 stretch-card mb-4">
        <div class="card bg-color-1">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                  <h3 class="font-weight-bold card-title-color">English</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 stretch-card mb-4">
        <div class="card bg-color-2">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                  <h3 class="font-weight-bold card-title-color">Mathematics</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 stretch-card mb-4">
        <div class="card bg-color-3">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                  <h3 class="font-weight-bold card-title-color">Computer Science</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 stretch-card mb-4">
        <div class="card bg-color-4">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                  <h3 class="font-weight-bold card-title-color">Art and Design</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 stretch-card mb-4">
        <div class="card bg-color-5">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                  <h3 class="font-weight-bold card-title-color">French</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-3 stretch-card mb-4">
        <div class="card bg-color-6">
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                  <h3 class="font-weight-bold card-title-color">Geography</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3 mb-3">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-sm-flex pb-4 mb-4 border-bottom">
              <div class="d-flex align-items-center">
                <h4 class="card-title">Mathematics</h4>
              </div>
              <form
                class="ml-auto d-flex pt-2 pt-md-0 align-items-stretch w-50 justify-content-end"
              >
                <button
                  type="button"
                  class="btn btn-icons btn-primary d-none d-lg-block"
                  data-toggle="modal"
                  data-target="#add-content"
                >
                  <i class="mdi mdi-upload btn-icon-prepend"></i> Upload
                </button>
              </form>
            </div>
            <div class="table-responsive elearn">
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
                  bordered
                  show-empty
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
                  <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>

                  <template v-slot:cell(actions)>
                    <a href="#" class="actn-btn" data-toggle="modal" data-target="#">
                      <i class="mdi mdi-eye"></i>
                    </a>
                    <a href="#" class="actn-btn">
                      <i class="mdi mdi-download"></i>
                    </a>
                    <a href="#" class="actn-btn">
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
    <!--Modal Upload row Field Edit Starts-->
    <div id="add-content" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Upload</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form class="forms-sample">
            <div class="modal-body modal-bg">
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label for="classname">Class</label>
                    <SingleSelect
                      :options="optionsClass"
                      :initialValue="selectedClass"
                      @onChange="onSelectedClassChange"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label for="contentType">Content Type</label>
                    <SingleSelect
                      :options="optionsContentType"
                      :initialValue="selectedContentType"
                      @onChange="onSelectedContentTypeChange"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" rows="4"></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="form-check form-check-flat form-check-primary">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" /> Allow Student Submissions
                        <i class="input-helper"></i>
                        <small
                          class
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Allow students to upload/submit solutions against uploaded material"
                        >
                          <nuxt-link to="#">
                            <i
                              class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"
                            ></i>
                          </nuxt-link>
                        </small>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>File upload</label>
                    <div class="input-group col-xs-12">
                      <b-form-file
                        :file-name-formatter="formatNames"
                        accept="image/png, image/jpeg, .csv, .pdf, .doc, .docx, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      ></b-form-file>
                    </div>
                    <small
                      class="form-text text-muted"
                    >Supports .csv, .dat, .doc, .docx, .jpg, .jpeg, .pdf, .png, .ppt, .xls, .xlsx</small>
                    <small class="form-text text-muted">Max Size 5MB</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="d-flex flex-column flex-md-row align-items-center mb-4">
                <div
                  class="wrapper ml-md-auto d-flex flex-column flex-md-row kanban-toolbar ml-n2 ml-md-0 mt-4 mt-md-0"
                >
                  <div class="d-flex mt-4 mt-md-0">
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                  </div>
                  <div class="d-flex mt-4 mt-md-0">
                    <button class="btn btn-light">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--Modal Upload Field Edit Ends-->
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
      optionsClass: ['Class VIII', 'Class IX', 'Class X'],
      selectedClass: 'Class X',
      optionsContentType: ['Document', 'Image', 'Video'],
      selectedContentType: 'Document',
      items: [
        {
          isActive: true,
          classname: 'Class VI',
          title: 'Chapter 2 - Trignometry',
          description:
            'The expression sin^{-1}(x)sin fraction. In other words, the -1−1minus, 1 is not an exponent. Instead, it simply means inverse function.',
          date: '05-05-2020',
          contentType: 'Document',
          status: 'pending'
        },
        {
          isActive: true,
          classname: 'Class VI',
          title: 'Chapter 1 - Introduction ',
          description: 'The expression inverse function.',
          date: '05-05-2020',
          contentType: 'Document',
          status: 'Submitted'
        }
      ],
      fields: [
        { key: 'classname', label: 'Class', sortable: true, sortDirection: 'desc' },
        { key: 'title', label: 'Title', sortable: true, class: 'text-center' },
        { key: 'description', label: 'Description', sortable: true, sortDirection: 'text-center' },
        { key: 'date', label: 'Date', sortable: true, class: 'text-center' },
        { key: 'contentType', label: 'Content Type', sortable: true, sortDirection: 'desc' },
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
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    onSelectedClassChange: function(value) {
      this.selectedClass = value
    },
    onSelectedContentTypeChange: function(value) {
      this.selectedContentType = value
    },
    formatNames(files) {
      if (files.length === 1) {
        return files[0].name
      } else {
        return `${files.length} files selected`
      }
    }
  }
}
</script>

<style></style>
