<template>
  <div class="f-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      const nodeName = node.nodeName.toLowerCase()
      if (nodeName !== 'button') {
        console.warn(`There should only f-button inside f-button-group, but you wrote ${nodeName}`)
      }
    }
  }
}
</script>

<style lang='scss'>
.f-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .f-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>