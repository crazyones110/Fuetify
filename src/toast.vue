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
      type: [Boolean, Number],
      default: 2,
      validator(val) {
        return (typeof val === 'boolean') || (typeof val === 'number' && val > 0)
      }
    },
    closeButton: {
      type: Object,
      default() {
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
    this.execAutoClose()
    this.updateLineStyle()
  },
  computed: {
    toastClasses() {
      return [`position-${this.position}`]
    }
  },
  methods: {
    updateLineStyle() {
      this.$nextTick(() => {
        // TODO $ref, $nextTick,getComputedStyle 的使用，并且加入 Cacher
        this.$refs.line.style.height = getComputedStyle(this.$refs.wrapper).height
      })
    },
    execAutoClose() {
      if (typeof this.autoClose === 'boolean' && this.autoClose === true) {
        setTimeout(() => {
          this.close()
        }, 2 * 1000)
        return
      }
      if (typeof this.autoClose === 'number') {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
        return
      }
    },
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
    border-left: 1px solid #666
    margin-left: 16px
  &.position-top
    border-top-left-radius: 0
    border-top-right-radius: 0
    top: 0
    animation: slide-to-top 250ms
  &.position-middle
    top: 50%
    transform: translate(-50%, -50%)
    animation: fade-in-middle 250ms
  &.position-bottom
    border-bottom-left-radius: 0
    border-bottom-right-radius: 0
    bottom: 0
    animation: slide-to-bottom 250ms

</style>