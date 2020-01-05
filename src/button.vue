<template>
  <button class="f-button" :class="{[`icon-${iconPosition}`]: true}">
    <f-icon :name="icon" v-if="icon" class="icon"></f-icon>
    <f-icon name="loading" class="loading"></f-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
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

<style lang='scss'>
@keyframes spin {
  0% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(360deg)
  }
}
.f-button {
  font-size: var(--font-size);
  // font-size: 1rem;
  height: var(--button-height);
  // height: calc(32 / 424 * 100vh);
  padding: 0 1rem; /*左边一个字，右边一个字*/
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    border-color: var(--border-active-bg);
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