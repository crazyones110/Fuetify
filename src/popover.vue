<template>
  <div class="popover" @click.stop="handleClick">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleClick() {
      this.visible = !this.visible
      if (this.visible) {
        // this.$nextTick(() => { // TODO 在冒泡阶段结束再在document上绑定监听函数
        //   document.addEventListener('click', function x() {
        //     this.visible = false
        //     document.removeEventListener('click', x)
        //     console.log('visible 变成 false')
        //   }.bind(this))
        // })
        setTimeout(() => {
          const eventHandler = () => {
            this.visible = false
            document.removeEventListener('click', eventHandler)
            console.log('document 隐藏了 popover')
          }
          document.addEventListener('click', eventHandler)
        }, 0)
      } else {
        console.log('vm 隐藏了 popover');
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.popover
  display: inline-block
  vertical-align: top
  position: relative
  .content-wrapper
    position: absolute
    bottom: 100%
    left: 0
    border: 1px solid red
    box-shadow: 0 0 3px rgba(0,0,0,0.5)
</style>