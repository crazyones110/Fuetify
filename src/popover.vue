<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
      :class="[`position-${position}`]"
    >
      <slot name="content"></slot>
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
      visible: false
    };
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom', 'left', 'right'].includes(val)
      }
    }
  },
  methods: {
    positionContent() {
      const { contentWrapper } = this.$refs
      document.body.appendChild(contentWrapper);
      const {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      switch(this.position) {
        case 'top': {
          contentWrapper.style.left = left + window.scrollX + "px";
          contentWrapper.style.top = top + window.scrollY + "px";
          return
        }
        case 'bottom': {
          contentWrapper.style.left = left + window.scrollX + "px";
          contentWrapper.style.top = top + window.scrollY + height + "px";
          return
        }
        case 'left': {
          contentWrapper.style.left = left + window.scrollX + "px";
          const { height: height2 } = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = top + window.scrollY +
            (height - height2) / 2 + "px";
          return
        }
        case 'right': {
          contentWrapper.style.left = left + window.scrollX + width + "px";
          const { height: height2 } = contentWrapper.getBoundingClientRect()
          contentWrapper.style.top = top + window.scrollY +
            (height - height2) / 2 + "px";
          return
        }
      }
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
      bottom: 100%;
    }
    &::after {
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