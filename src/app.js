import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('f-icon', Icon)
Vue.component('f-button', Button)

new Vue({
  el: '#app'
})