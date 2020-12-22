<template>
<div>
    <template v-slot:cell(enableDisable)>
                    <label class="switch" for="schoolcheck">
                      <input type="checkbox" id="schoolcheck" />
                      <div class="slider round"></div>
                    </label>
                  </template>
                  <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>
                  <template v-slot:cell(resetAllData)>
                    <button class="btn small-icon btn btn-danger">RESET</button>
                  </template>
                  <template v-slot:cell(actions)>
                    <a href="edit-school-settings" class="actn-btn">
                      <i class="mdi mdi-pencil"></i>
                    </a>
                    <a
                      href="#delete-school"
                      data-toggle="modal"
                      data-target="#reject-org"
                      class="actn-btn"
                    >
                      <i class="mdi mdi-delete"></i>
                    </a>
                  </template>
</div>
    
</template>