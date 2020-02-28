<template>
  <div class="popover" @click.stop="changeVisible">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
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
    changeVisible() {
      this.visible = !this.visible
      if (this.visible) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          const { width, height, top, left } = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'

          const eventHandler = () => {
            this.visible = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        })
      } else {
        console.log('document remove');
        // document.removeEventListener('click', eventHandler)
      }
    }
  },
  mounted() {
    // console.log(this.$refs.contentWrapper)
    // document.body.appendChild(this.$refs.contentWrapper)
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>