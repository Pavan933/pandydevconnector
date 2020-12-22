<template>
  <div class="custom-bodypad">
    <div class="row mt-3 mb-3">
      <div class="col-lg-12 col-sm-12 stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center pb-3">
              <div class="wrapper d-flex align-items-center media-info text-facebook">
                <h4 class="card-title float-left">Server Integration</h4>
              </div>
              <div class="wrapper ml-auto action-bar kanban-toolbar">
                <div class="d-flex text-white">
                  <button
                    type="button"
                    class="btn btn-icons btn-primary d-none d-lg-block"
                    data-toggle="modal"
                    data-target="#add-server"
                  >
                    <i class="mdi mdi-server"></i> Add Server
                  </button>
                </div>
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
                    <a href="#" class="actn-btn" data-toggle="modal" data-target="#edit-server">
                      <i class="mdi mdi-pencil"></i>
                    </a>
                    <a href="#" class="actn-btn" data-toggle="modal" data-target="#delete-server">
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
            <!--Modal delete Starts-->
            <div id="delete-server" class="modal fade" role="dialog">
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
                        <button type="submit" class="btn btn-danger mr-2">Delete</button>
                        <button class="btn btn-light">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!--Modal delete  End-->
          </div>
        </div>
      </div>
    </div>
    <!--Modal server add  Starts-->
    <div id="add-server" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Add Server</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample">
              <div class="form-group">
                <label for="name">Name</label>
                <input class="form-control" placeholder="Alias name of the server" />
              </div>
              <div class="form-group">
                <label>Server Components</label>
                <SingleSelect
                  :options="optionsServer"
                  :initialValue="selectedServer"
                  @onChange="onSelectedServerChange"
                />
              </div>
              <div class="form-group">
                <label>Subdomain</label>
                <div class="input-group">
                  <input
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
              <div class="form-group">
                <label for="ipAddress">IP Address</label>
                <input
                  class="form-control"
                  placeholder="111.111.11.1"
                  data-inputmask="'alias': 'ip'"
                  im-insert="true"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary mr-2">Add</button>
            <button class="btn btn-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <!--Modal server add  End-->
    <!--Modal server EDIT  Starts-->
    <div id="edit-server" class="modal fade" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">Edit Server</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample">
              <div class="form-group">
                <label for="name">Name</label>
                <input class="form-control" placeholder="Alias name of the server" />
              </div>
              <div class="form-group">
                <label>Server Components</label>
                <SingleSelect
                  :options="optionsServer"
                  :initialValue="selectedServer"
                  @onChange="onSelectedServerChange"
                />
              </div>
              <div class="form-group">
                <label>Subdomain</label>
                <div class="input-group">
                  <input
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
              <div class="form-group">
                <label for="ipAddress">IP Address</label>
                <input
                  class="form-control"
                  placeholder="111.111.11.1"
                  data-inputmask="'alias': 'ip'"
                  im-insert="true"
                />
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
    <!--Modal server edit  End-->
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
      optionsServer: ['Application Server', 'Video Bridge', 'Database', 'Prosody'],
      selectedServer: 'Application Server',
      items: [
        {
          isActive: true,
          serverName: 'Server 1',
          serverComponent: 'Database',
          suDomain: 'christ.PRISMM.com',
          ipAddress: '111.111.111.111'
        },
        {
          isActive: true,
          serverName: 'Server 2',
          serverComponent: 'Application Server',
          suDomain: 'jgi.PRISMM.com',
          ipAddress: '111.111.111.111'
        }
      ],
      fields: [
        { key: 'serverName', label: 'Name', sortable: true, sortDirection: 'desc' },
        { key: 'serverComponent', label: 'Server Component', sortable: true, sortDirection: 'desc' },
        { key: 'suDomain', label: 'Subdomain', sortable: true, sortDirection: 'desc' },
        { key: 'ipAddress', label: 'IP Address', sortable: true, sortDirection: 'desc' },
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
    onSelectedServerChange: function(value) {
      this.selectedServer = value
    }
  }
}
</script>

<style></style>
