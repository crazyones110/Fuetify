<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
      :class="[`position-${position}`]"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "FPopover",
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    const { popover } = this.$refs
    if (this.trigger === 'click') {
      popover.addEventListener('click', this.onClick)
    } else {
      popover.addEventListener('mouseenter', this.open)
      popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed() {
    const { popover } = this.$refs
    if (this.trigger === 'click') {
      popover.removeEventListener('click', this.onClick)
    } else {
      popover.removeEventListener('mouseenter', this.open)
      popover.removeEventListener('mouseleave', this.close)
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom', 'left', 'right'].includes(val)
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(val) {
        return 'click' || 'hover'
      }
    }
  },
  computed: {
    openEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent() {
      if (this.trigger === 'click') {
        return 'click'
      } else {
        return 'mouseleave'
      }
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      const {
        width,
        height,
        top,
        left
      } = triggerWrapper.getBoundingClientRect();
      const { height: height2 } = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + window.scrollY + height,
          left: left + window.scrollX
        },
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        },
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'

    },
    onClickDocument(e) {
      if (this.$refs.popover.contains(e.target)) { return }
      if (this.$refs.contentWrapper.contains(e.target)) { return }
      this.close()
    },
    listenToDocument() {
      document.addEventListener("click", this.onClickDocument)
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
      document.removeEventListener("click", this.onClickDocument)
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
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background-color: white;
  padding: .5em 1em;
  max-width: 20em;
  min-width: 3em;
  word-break: break-all;
  &::before,&::after {
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    position: absolute;
    // left: 10px;
    border: 10px solid transparent;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,&::after {
      left: 10px;
      border-bottom: none;
    }
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,&::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: black;
      border-top: none;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,&::after {
      transform: translateY(-50%);
      top: 50%;
      border-right: none;
    }
    &::before {
      left: 100%;
      border-left-color: black;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,&::after {
      transform: translateY(-50%);
      top: 50%;
      border-left: none;
    }
    &::before {
      right: 100%;
      border-right-color: black;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>