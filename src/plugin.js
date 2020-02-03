import Toast from './toast'

/**
 * helpers
 */
function createToast({Vue, msg, propsData, onClose}) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    propsData
  })
  toast.$slots.default = msg
  toast.$mount()
  toast.$on('beforeClose', onClose)
  document.body.appendChild(toast.$el)
  return toast
}

let currentToast // TODO current 套路

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (msg, toastOptions = {}) => {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        msg,
        propsData: toastOptions,
        onClose() {
          currentToast = null
        }
      })
    }
  }
}