import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './ButtonGroup'
import Input from './input'

Vue.component('f-icon', Icon)
Vue.component('f-button', Button)
Vue.component('f-button-group', ButtonGroup)
Vue.component('f-input', Input)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  }
})