const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tab/tabs'
import TabsHead from '../src/tab/tabs-head'
import TabsBody from '../src/tab/tabs-body'
import TabsItem from '../src/tab/tabs-item'
import TabsPane from '../src/tab/tabs-pane'

Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-head', TabsHead)
Vue.component('f-tabs-body', TabsBody)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })

  it('接受 selected 属性', done => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <f-tabs selected="finance">
      <f-tabs-head>
        <f-tabs-item name="beauty">
          美女
        </f-tabs-item>
        <f-tabs-item name="finance">财经</f-tabs-item>
        <f-tabs-item name="sports">体育</f-tabs-item>
      </f-tabs-head>
      <f-tabs-body>
        <f-tabs-pane name="beauty">美女相关资讯</f-tabs-pane>
        <f-tabs-pane name="finance">财经相关资讯</f-tabs-pane>
        <f-tabs-pane name="sports">体育相关资讯</f-tabs-pane>
      </f-tabs-body>
    </f-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      const finance = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(finance.classList.contains('active')).to.be.true
      done()
    })

  })

  it('可以接收 direction prop', () => {

  })

})
