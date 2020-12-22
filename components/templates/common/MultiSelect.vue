<template>
  <v-select v-model="selected" multiple :value="initialValue" :options="options" @input="onChange"></v-select>
</template>
<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.component('v-select', vSelect)
export default {
  props: ['initialValue', 'options'],
  data() {
    return {
      selected: [this.initialValue]
    }
  },
  methods: {
    onChange() {
      this.$emit('onChange', this.selected)
    }
  }
}
</script>
