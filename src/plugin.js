import Toast from './toast'
function createToast({Vue, msg, propsData}) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    propsData
  })
  toast.$slots.default = msg
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (msg, toastOptions = {}) => {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({ Vue, msg, propsData: toastOptions })
    }
  }
}