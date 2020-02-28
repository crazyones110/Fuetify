<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "FPopover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      const {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    eventHandler(e) {
      if (this.$refs.popover.contains(e.target)) { return }
      if (this.$refs.contentWrapper.contains(e.target)) { return }
      this.close()
    },
    listenToDocument() {
      document.addEventListener("click", this.eventHandler)
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        this.listenToDocument()
      })
    },
    close() {
      this.visible = false
      console.log('关闭')
      document.removeEventListener("click", this.eventHandler)
    },
    onClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.visible) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
};
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