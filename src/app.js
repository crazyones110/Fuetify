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
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  vm.$mount()
  const useElement = vm.$el.querySelector('use')
  const href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  const svg = vm.$el.querySelector('svg')
  const { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  // mock
  const Constructor = Vue.extend(Button)
  const fButton = new Constructor({
    propsData: {
      icon: 'setting',
    }
  })
  fButton.$mount()
  // 期望这个函数被执行
  fButton.$on('click', () => {
    console.log(1)
  })
  const button = fButton.$el
  button.click()
}