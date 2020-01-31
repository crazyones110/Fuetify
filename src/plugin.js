import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (msg) => { // 生成一个 toast 组件，放到 body 里面
      const Constructor = Vue.extend(Toast) // 根据 .vue 文件创建构造函数
      const toast = new Constructor()
      toast.$slots.default = msg
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}