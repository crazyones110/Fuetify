const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.be.ok
  })

  describe('props', () => {
    const Constructor = Vue.extend(Toast)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('接受 autoClose', (done) => {
      const div = document.createElement('div')
      vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('beforeClose', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })

    it('接受 closeButton', () => {
      const callback = sinon.fake()
      // const div = document.createElement('div')
      vm = new Constructor({
        propsData: {
          closeButton: {
            text: 'close me',
            callback
          }
        }
      }).$mount()
      const closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('close me')
      closeButton.click()
      expect(callback).to.have.been.called
    })

    it('接受 enableHtml', () => {
      vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = `<strong id="test">hi</strong>`
      vm.$mount()
      // console.log(vm.$el.outerHTML)
      const strongElement = vm.$el.querySelector('#test')
      expect(strongElement).to.exist
    })

    it('接受 position', () => {
      vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)

    })
  })

})
