import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './ButtonGroup'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('f-icon', Icon)
Vue.component('f-button', Button)
Vue.component('f-button-group', ButtonGroup)
Vue.component('f-input', Input)
Vue.component('f-row', Row)
Vue.component('f-col', Col)
Vue.component('f-layout', Layout)
Vue.component('f-header', Header)
Vue.component('f-sider', Sider)
Vue.component('f-content', Content)
Vue.component('f-footer', Footer)
Vue.component('f-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      message: 'hi'
    }
  },
  created() {
  },
  methods: {
    showToast() {
      this.$toast('show toast')
    }
  }
})