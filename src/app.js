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
import Tabs from './tab/tabs'
import TabsHead from './tab/tabs-head'
import TabsBody from './tab/tabs-body'
import TabsItem from './tab/tabs-item'
import TabsPane from './tab/tabs-pane'
import Popover from './popover'

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
Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-head', TabsHead)
Vue.component('f-tabs-body', TabsBody)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-pane', TabsPane)
Vue.component('f-popover', Popover)
Vue.use(plugin)

new Vue({
  el: '#app',
  data() {
    return {
      selectedTab: 'sports'
    }
  },
  methods: {
    showToast(position) {
      this.$toast('很长的文字', {
        closeButton: {
          text: '我知道了',
          callback(toast) {
            toast.log()
          }
        },
        autoClose: 2,
        position
      })
    },
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    }
  },
  watch: {
    selectedTab(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
})