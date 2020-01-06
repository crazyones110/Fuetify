import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './ButtonGroup'

Vue.component('f-icon', Icon)
Vue.component('f-button', Button)
Vue.component('f-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// 单元测试
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  // vm.$mount('#test')
  vm.$mount()
  const useElement = vm.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
