const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', (done) => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置position', (done) => {
    Vue.component('f-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <f-popover position="bottom" ref="a">
        <template #content>
          弹出内容
        </template>
        <button>点我</button>
      </f-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      vm.$el.querySelector('button').click()
      vm.$nextTick(() => {
        console.log(vm.$refs.a.$refs.contentWrapper)
        expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })

  xit('可以设置trigger', done => {
    Vue.component('f-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <f-popover trigger="hover" ref="a">
        <template #content>
          弹出内容
        </template>
        <button>点我</button>
      </f-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      const event = new Event('mouseenter')
      vm.$el.dispatchEvent(event)
      vm.$nextTick(() => {
        const { contentWrapper } = vm.$refs.a.$refs
        console.log(contentWrapper)
        expect(contentWrapper).to.exist
        done()
      })
    })
  })
})
