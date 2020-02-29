<template>
  <button class="f-button fan2" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <f-icon :name="icon" v-if="icon && !loading" class="icon"></f-icon>
    <f-icon name="loading" class="loading icon" v-if="loading"></f-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  name: "FButton",
  components: {
    "f-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(val) {
        return val === "left" || val === "right";
      }
    }
  }
};
</script>

<style lang='scss' scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.f-button {
  font-size: $font-size;
  // font-size: 1rem;
  height: $button-height;
  // height: calc(32 / 424 * 100vh);
  padding: 0 1rem; /*左边一个字，右边一个字*/
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  // display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    // border-color: var(--border-active-bg);
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3rem;
    margin-left: 0;
  }
  & > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3rem;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>