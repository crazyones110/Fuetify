import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (msg, toastOptions = {}) => { // 生成一个 toast 组件，放到 body 里面
      const Constructor = Vue.extend(Toast) // 根据 .vue 文件创建构造函数
      const toast = new Constructor({
        propsData: toastOptions
      }) // 创建一个 vm 实例，可以直接赋值prop，data啥的
      toast.$slots.default = msg
      toast.$mount() // 挂载到页面上，但不是加入 DOM
      document.body.appendChild(toast.$el)
    }
  }
}