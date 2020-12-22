<template>
  <v-select
    :value="initialValue"
    :options="options"
    :option-sub="optionSub"
    :option-teacher="optionTeacher"
    :option-class="optionClass"
    :option-content-type="optionContentType"
    :options-s-m-s="optionsSMS"
    :options-email="optionsEmail"
    :options-storage="optionsStorage"
    :options-server="optionsServer"
    @input="onChange"
  ></v-select>
</template>
<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.component('v-select', vSelect)
export default {
  props: [
    'initialValue',
    'options',
    'optionSub',
    'optionTeacher',
    'optionClass',
    'optionContentType',
    'optionsSMS',
    'optionsEmail',
    'optionsStorage',
    'optionsServer'
  ],
  methods: {
    onChange(value) {
      this.$emit('onChange', value)
    }
  }
}
</script>
