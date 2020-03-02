<template>
  <div class="f-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FButtonGroup',
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

<style lang='scss' scoped>
$border-radius: 4px;
.f-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .f-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>