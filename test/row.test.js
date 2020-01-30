const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })

  it('可以接收 gutter', done => {
    Vue.component('f-row', Row)
    Vue.component('f-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <f-row gutter="20">
        <f-col span="12"></f-col>
        <f-col span="12"></f-col>
      </f-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      // console.log(cols[0])
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      vm.$destroy()
      vm.$el.remove()
      done()
    })
  })

  it ('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'left'
      }
    }).$mount(div)
    const el = vm.$el
    expect(getComputedStyle(el).justifyContent).to.eq('flex-start')
    div.remove()
    vm.$el.remove()
    vm.$destroy()
  })
})
