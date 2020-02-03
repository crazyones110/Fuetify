<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default"></div>
    </div>
    <div class="line" ref="line"></div>
    <span
      v-if="closeButton"
      class="close"
      @click="onClickClose"
    >{{closeButton.text}}</span>
  </div>
</template>

<script>
// 构造组件的选项
export default {
  name: "FToast",
  props: {
    autoClose: {
      type: [Boolean | Number],
      default: 3, // TODO 默认值应该是大于1的，且不能是负数
      validator(val) {
        return val === false || typeof val === 'number'
      }
    },
    autoCloseDelay: {
      type: Number,
      default: 2
    },
    closeButton: {
      type: Object,
      default() {
        /*
        default: {
          text: '关闭',
          callback(){}
        }
        如果这里直接写一个对象，每一次初始化组件的时候, 都会用同一个选项
        那假如这个组件改了该对象的值，另外一个也会改
        */
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'middle', 'bottom'].includes(val)
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoClose * 1000);
    }
    this.$nextTick(() => {
      // TODO $ref, $nextTick,getComputedStyle 的使用，并且加入 Cacher
      this.$refs.line.style.height = getComputedStyle(this.$refs.wrapper).height
    })
    // console.log(getComputedStyle(this.$refs.wrapper).height)
    // this.$refs.line.style.height = this.$refs.wrapper.style.height
  },
  computed: {
    toastClasses() {
      return [`position-${this.position}`]
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit('beforeClose')
      this.$destroy();
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this) // this === toast 实例
      }
    },
    log() {
      console.log('测试')
    }
  }
};
</script>
<style lang="sass" scoped>
$font-size: 14px
$toast-min-height: 40px
$toast-bg: rgba(0,0,0,0.74)

@keyframes slide-to-bottom
  0%
    transform: translate(-50%, 100%)
    opacity: 0
  100%
    transform: translate(-50%, 0)
    opacity: 1

@keyframes fade-in-middle
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes slide-to-top
  0%
    opacity: 0
    transform: translate(-50%, -100%)
  100%
    opacity: 1
    transform: translate(-50%, 0)

.toast
  font-size: $font-size
  line-height: 1.8
  min-height: $toast-min-height
  position: fixed
  left: 50%
  transform: translateX(-50%)
  display: flex
  align-items: center
  background: $toast-bg
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50)
  border-radius: 4px
  color: white
  padding: 0 16px
  .message
    padding: 8px 0
  .close
    padding-left: 16px
    flex-shrink: 0
  .line
    height: 100%
    border-left: 1px solid #666
    margin-left: 16px
  &.position-top
    top: 0
    animation: slide-to-top 1s
  &.position-middle
    top: 50%
    transform: translate(-50%, -50%)
    animation: fade-in-middle 1s
  &.position-bottom
    bottom: 0
    animation: slide-to-bottom 1s

</style>